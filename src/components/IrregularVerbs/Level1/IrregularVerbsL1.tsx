import React, { useEffect, useState } from 'react';
import { ITransl, setLastAttemptDate, setReproduce } from '../../../store/slice/irregularVerbsSlice';
import { RootState, useAppDispatch } from '../../../store/store';
import { DragDropContext } from "@hello-pangea/dnd";
import { useSelector } from 'react-redux';
import { onDragEnd, receiveLocalDate } from '../Common/Helper';
import NavArrowBack from '../../Common/NavArrowBack';
import DroppableL1 from './DroppableL1';
import AreaAllVariant from './AreaAllVariant';
import ButtonCheck from '../Common/ButtonCheck';
import './IrregularVerbsL1.scss';


interface IColumns {
  all: ITransl
  1?: ITransl | []
  2?: ITransl | []
  3?: ITransl | []
  4?: ITransl | []
  5?: ITransl | []
}
interface IVerbs {
  id: number
  infinitive: string
  pastSimple: string
  participle: string
  translate: string
  setReproduce: number
  lastAttemptDate: string
  correctColor: string
}

export interface IListWords {
  items: IVerbs[]
}

const IrregularVerbsL1 = () => {
  const listVerbs = useSelector((state: RootState) => state.persistedReducer.irregularVerbs.verbs)
  const [isComplete, setIsComplete] = useState(false)
  const [columns, setColumns] = useState<any>('')
  const [listWords, setListWords] = useState<IListWords>({ items: [] })
  const dispatch = useAppDispatch()

  useEffect(() => {
    createLevel()
  }, [])

  const createLevel = async () => {
    const localDate = receiveLocalDate()
    let arrVerbs: Array<IVerbs> = []
    for (let i = 0; i <= listVerbs.length; i++) {
      if (arrVerbs.length === 5) break
      if (listVerbs[i].setReproduce === 0 && listVerbs[i].lastAttemptDate !== localDate) {
        let addColor = { ...listVerbs[i], correctColor: '' }
        arrVerbs.push(addColor)
      }

    }
    let card = await JSON.parse(JSON.stringify(arrVerbs))
    card.sort(() => {
      return Math.random() - 0.5
    })

    let objForView: any = {}
    for (let i = 0; i <= arrVerbs.length; i++) {
      switch (i) {
        case (0): objForView['all'] = { items: arrVerbs }
          break;
        case (1): objForView[1] = { items: [] }
          break;
        case (2): objForView[2] = { items: [] }
          break;
        case (3): objForView[3] = { items: [] }
          break;
        case (4): objForView[4] = { items: [] }
          break;
        case (5): objForView[5] = { items: [] }
          break;
      }
    }
    setColumns(objForView)
    setListWords({ items: [...card] })
    setIsComplete(false)
  }

  const submitLevel = () => {
    const localDate = receiveLocalDate()
    let idCorrectAnswer: Array<number> = []
    let idIncorrectAnswer: Array<number> = []
    let copyColumns = JSON.parse(JSON.stringify(columns))
    for (let i = 0; i < listWords.items.length; i++) {
      if (listWords.items[i].infinitive === columns[i + 1].items[0].infinitive) {
        idCorrectAnswer.push(listWords.items[i].id)
        copyColumns[i + 1].items[0].correctColor = '#0db10d'
      } else {
        idIncorrectAnswer.push(listWords.items[i].id)
        copyColumns[i + 1].items[0].correctColor = '#ff4141'
      }
    }
    dispatch(setLastAttemptDate({ idIncorrectAnswer: idIncorrectAnswer, localDate: localDate }))
    dispatch(setReproduce({ idCorrectAnswer: idCorrectAnswer, level: 1 }))
    setColumns(copyColumns)
    setIsComplete(true)
  }
  const createInputArea = () => {
    let arr = Object.entries(columns).map(([columnId, column], index) => {
      if (columnId !== 'all') return (
        <DroppableL1 columnId={columnId} column={column} key={index} index={index} allVerbs={listWords} />
      )
    })
    return arr
  }
  const createAllVraiant = () => {
    let arr = Object.entries(columns).map(([columnId, column], index) => {
      if (columnId === 'all') return (

        <AreaAllVariant columnId={columnId} column={column} key={index} index={index} />
      )
    })
    return arr
  }

  // if()



  return (
    <DragDropContext
      onDragEnd={result => onDragEnd(result, columns, setColumns)}
    >

      <div style={{ display: 'flex', flexDirection: 'column', minWidth: '100vw' }}>
        <NavArrowBack linkTo='/choselevel' />
        <div className='box-level-verbs'>
          <div className='box-verbs'>
            <div className='cards-verbs'>
              {createInputArea()}
            </div>
          </div>
          <div className='all-variant' >
            {createAllVraiant()}
          </div>
          <ButtonCheck
            isComplete={isComplete}
            length={columns.all?.items.length}
            createLevel={createLevel}
            submitLevel={submitLevel}
          />
        </div>
      </div>
    </DragDropContext>
  );
}


export default IrregularVerbsL1;
