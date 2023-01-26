import { Droppable } from '@hello-pangea/dnd';
import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import { ITransl } from '../../../store/slice/irregularVerbsSlice';
import DraggableL1 from './DraggableL1';
import { IListWords } from './IrregularVerbsL1';

interface DropableL1Props {
  columnId: string,
  column: any,
  allVerbs: IListWords,
  index: number
}

const DroppableL1 = ({ columnId, column, allVerbs, index }: DropableL1Props) => {
  const colorBackground = allVerbs.items[index].correctColor

  return (
    <div className='card-verb' >
      <Droppable droppableId={columnId} key={columnId}>
        {(provided, snapshot) => {
          return (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div>
                <Card sx={{ minWidth: 170, padding: 0, mr: 1, background: colorBackground }}>
                  <CardContent sx={{ padding: 1 }}>
                    <Typography>
                      V: {allVerbs?.items[index].infinitive}
                    </Typography>
                    <Typography>
                      V2: {allVerbs?.items[index].pastSimple}
                    </Typography>
                    <Typography >
                      V3: {allVerbs?.items[index].participle}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
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
                    <DraggableL1 item={item} index={index} key={index} colorBackground={colorBackground} />
                  );
                })}
                {provided.placeholder}
              </div>
            </div>
          );
        }}
      </Droppable >
    </div >
  );
};

export default DroppableL1;
