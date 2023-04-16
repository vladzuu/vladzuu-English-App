import React, { useEffect, useState } from 'react';
import { DragDropContext, Draggable, Droppable, DropResult } from "@hello-pangea/dnd";
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../store/store';
import { ITransl, setLastAttemptDate, setReproduce } from '../../../store/slice/irregularVerbsSlice';
import './IrregularVerbsL2.scss';
import StyledButton from '../../Common/StyledButton';
import DroppableL1 from './DroppableL2';
import AreaAllVariant from './AreaAllVariant';
import { Card, CardContent, Typography } from '@mui/material';
import { onDragEnd, receiveLocalDate } from '../Common/Helper';
import NavArrowBack from '../../Common/NavArrowBack';
import ButtonCheck from '../Common/ButtonCheck';

interface IColumns {
  all: ITransl
  1: ITransl | []
  2: ITransl | []
  3: ITransl | []
}

function IrregularVerbsL2() {
  const listVerbs = useSelector((state: RootState) => state.persistedReducer.irregularVerbs.verbs)
  const [isComplete, setIsComplete] = useState(false)
  const [columns, setColumns] = useState<any>('')
  const [word, setWord] = useState<ITransl | undefined>()
  const dispatch = useAppDispatch()

  useEffect(() => {
    createLevel()
  }, [])

  const createLevel = () => {
    const localDate = receiveLocalDate()
    let arrVerbs: Array<ITransl> = []
    for (let i = 0; i < listVerbs.length; i++) {
      if (arrVerbs.length === 1) break
      if (listVerbs[i].setReproduce === 1 && listVerbs[i].lastAttemptDate !== localDate) {
        arrVerbs.push(listVerbs[i])
      }
    }
    if (arrVerbs.length) {
      let objForView: any = {
        all: {
          items: [
            {
              type: 'infinitive',
              verb: arrVerbs[0].infinitive,
              correctColor: ''
            },
            {
              type: 'pastSimple',
              verb: arrVerbs[0].pastSimple,
              correctColor: ''
            },
            {
              type: 'participle',
              verb: arrVerbs[0].participle,
              correctColor: ''
            }
          ]
        },
        1: {
          type: 'Infinitive (V)',
          items: []
        },
        2: {
          type: 'Past Simple (V2)',
          items: []
        },
        3: {
          type: 'Participle (V3)',
          items: []
        },
      }

      objForView.all.items.sort(() => {
        return Math.random() - 0.5
      })
      setColumns(objForView)
      setWord(arrVerbs[0])
      setIsComplete(false)
    }
    if (!arrVerbs.length) {
      setColumns('')
    }
  }

  const submitLevel = () => {
    const localDate = receiveLocalDate()
    let countCorrectAnswer = 0
    const checkCorrect = (index: number, type: string) => {
      // @ts-ignore
      if (columns[index].items[0].verb === word[type]) {
        columns[index].items[0].correctColor = 'green'
        countCorrectAnswer++
      } else {
        columns[index].items[0].correctColor = 'red'
      }
    }
    checkCorrect(1, 'infinitive')
    checkCorrect(2, 'pastSimple')
    checkCorrect(3, 'participle')

    const idVerb = [word?.id]
    if (countCorrectAnswer === 3) {
      dispatch(setReproduce({ idCorrectAnswer: idVerb, level: 2 }))
    } else {
      dispatch(setLastAttemptDate({ idIncorrectAnswer: idVerb, localDate: localDate }))
    }
    setIsComplete(true)
  }
  const createInputArea = () => {
    let arr = Object.entries(columns).map(([columnId, column], index) => {
      if (columnId !== 'all') return (
        <DroppableL1 columnId={columnId} column={column} key={index} index={index} />
      );
    })
    return arr
  }
  const createAllVariant = () => {
    const arr = Object.entries(columns).map(([columnId, column], index) => {
      if (columnId === 'all') return (
        <AreaAllVariant columnId={columnId} column={column} key={index} index={index} />
      )
    })
    return arr
  }


  if (typeof (columns) === 'string') {
    return (
      <div> ynet</div>
    )
  }

  return (
    <DragDropContext
      onDragEnd={result => onDragEnd(result, columns, setColumns)}
    >
      <div style={{ display: 'flex', flexDirection: 'column', minWidth: '100vw', flexGrow: 1 }}>
        <NavArrowBack linkTo='/choselevel' />
        <div className='box-level-verbs'>
          <div className='box-verbs'>
            <div className='cards-verbs'>
              <Typography variant='h2' sx={{ marginBottom: 3 }}>
                {`${word?.translate.charAt(0).toUpperCase()}${word?.translate.slice(1)}`}
              </Typography>
              <div className='card-verb'>
                {createInputArea()}
              </div>
            </div>
          </div>
          <div className='all-variant' >
            {createAllVariant()}
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


export default IrregularVerbsL2;
