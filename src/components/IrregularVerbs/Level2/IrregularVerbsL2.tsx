import React, { useEffect, useState } from 'react';
import { DragDropContext, Draggable, Droppable, DropResult } from "@hello-pangea/dnd";
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../store/store';

import { ITransl, setReproduce } from '../../../store/slice/irregularVerbsSlice';
import './IrregularVerbsL1.css';

import StyledButton from '../../Common/StyledButton';
import DroppableL1 from '../Level1/DroppableL1';
import AreaAllVariant from '../Level1/AreaAllVariant';


const onDragEnd = (result: any, columns: any, setColumns: any) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);

    if (destination.droppableId === 'all') {
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems
        }
      })
    } else {
      if (!destColumn.items.length) {
        destItems.splice(destination.index, 0, removed)
        setColumns({
          ...columns,
          [source.droppableId]: {
            ...sourceColumn,
            items: sourceItems
          },
          [destination.droppableId]: {
            ...destColumn,
            items: destItems
          }
        })
      } else if (source.droppableId !== 'all') {
        const [removed1] = destItems.splice(0, 1)
        destItems.push(removed)
        const destColumn1 = columns['all'];
        const destItems1 = [...destColumn1.items];
        destItems1.push(removed1)

        setColumns({
          ...columns,
          [source.droppableId]: {
            ...sourceColumn,
            items: sourceItems
          },
          [destination.droppableId]: {
            ...destColumn,
            items: destItems
          },
          ['all']: {
            ...destColumn1,
            items: destItems1
          }
        })
      } else {
        const [removed1] = destItems.splice(0, 1)
        destItems.push(removed)
        sourceItems.push(removed1)

        setColumns({
          ...columns,
          [source.droppableId]: {
            ...sourceColumn,
            items: sourceItems
          },
          [destination.droppableId]: {
            ...destColumn,
            items: destItems
          },
        })
      }
    }
  }
};

interface IColumns {
  all: ITransl
  1?: ITransl | []
  2?: ITransl | []
  3?: ITransl | []
}


function IrregularVerbsL1() {
  const listVerbs = useSelector((state: RootState) => state.persistedReducer.irregularVerbs.verbs)
  const [isComplete, setIsComplete] = useState(false)
  const [columns, setColumns] = useState<any>('')
  const [listWords, setListWords] = useState<any>('')
  const dispatch = useAppDispatch()

  const createLevel = () => {
    //Create obj for view
    let arrVerbs: Array<ITransl> = []
    for (let i = 0; i <= listVerbs.length; i++) {
      if (arrVerbs.length === 1) break
      if (listVerbs[i].setReproduce === 2) {
        arrVerbs.push(listVerbs[i])
      }

    }
    let objForView: any = {
      ['all']: [{
        infinitive: arrVerbs[0].infinitive,
        pastSimple: arrVerbs[0].pastSimple,
        participle: arrVerbs[0].participle,
      }],
    }
    objForView.all = { ...arrVerbs[0] }
    objForView[1] = 'r'
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
    setListWords(objForView.all)
    setIsComplete(false)
  }

  useEffect(() => {
    createLevel()
  }, [])

  const submitLevel = () => {
    let idCorrectAnswer: Array<number> = []
    let copyColumns = { ...columns }
    for (let i = 0; i < listWords.items.length; i++) {
      if (listWords.items[i].infinitive === columns[i + 1].items[0].infinitive) {
        idCorrectAnswer.push(listWords.items[i].id)
        copyColumns[i + 1].items[0].correctColor = 'green'
      } else {
        copyColumns[i + 1].items[0].correctColor = 'red'

      }
    }
    dispatch(setReproduce(idCorrectAnswer))
    setIsComplete(true)
  }

  return (
    <DragDropContext
      onDragEnd={result => onDragEnd(result, columns, setColumns)}
    >
      <div className='box-level'>
        <div className='box-verbs'>
          <div className='cards-verbs'>
            {Object.entries(columns).map(([columnId, column], index) => {
              if (columnId !== 'all') return (
                <DroppableL1 columnId={columnId} column={column} key={index} index={index} allVerbs={listWords} />
              );
            })}
          </div>
        </div>
        {Object.entries(columns).map(([columnId, column], index) => {
          if (columnId === 'all') return (
            <AreaAllVariant columnId={columnId} column={column} key={index} index={index} />
          )
        })}

        {(!isComplete) ?
          (columns.all?.items.length) ?
            <StyledButton name='Проверить' key={'but'} onClick={submitLevel} isDisabled={true} />
            :
            <StyledButton name='Проверить' key={'but'} onClick={submitLevel} isDisabled={false} />
          :
          <StyledButton name='Следующий уровень' onClick={createLevel} />
        }
      </div>
    </DragDropContext>
  );
}


export default IrregularVerbsL1;
