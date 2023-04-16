import { Droppable } from '@hello-pangea/dnd';
import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import { ITransl } from '../../../store/slice/irregularVerbsSlice';
import DraggableL2 from './DraggableL2';
// import { IListWords } from './IrregularVerbsL2';

interface DropableL1Props {
  columnId: string,
  column: any,
  allVerbs?: any,
  index: number
}

const DroppableL1 = ({ columnId, column, allVerbs, index }: DropableL1Props) => {
  return (
    <Droppable droppableId={columnId} key={columnId}>
      {(provided, snapshot) => {
        return (
          <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <span className='title-verb'>
              {column.type}
            </span>
            <div
              className='droppable-input'
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{
                background: snapshot.isDraggingOver
                  ? "lightblue"
                  : "",
              }}
            >
              {column.items.map((item: any, index: number) => {
                return (
                  <DraggableL2 item={item} index={index} key={index} />
                );
              })}
              {provided.placeholder}
            </div>
          </div>
        );
      }}
    </Droppable >
  );
};

export default DroppableL1;
