import React from 'react';
import { Draggable } from "@hello-pangea/dnd";
import { Card, CardContent, Typography } from '@mui/material';
import { getStyle } from '../Helper';

interface DraggableL1Props {
  item: any
  index: number
  colorBackground?: string
}

const DraggableL1 = ({ item, index, colorBackground }: DraggableL1Props) => {
  return (
    <Draggable
      key={item.id}
      draggableId={index.toString()}
      index={index}
    >
      {(provided, snapshot) => {
        return (
          <div
            className='area'
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={getStyle(provided.draggableProps.style, snapshot)}
          >
            <Card sx={{ margin: 1, background: item.correctColor }}>
              <CardContent>
                <Typography>
                  {item.verb}
                </Typography>
              </CardContent>
            </Card>
          </div>
        );
      }}
    </Draggable >
  );
};

export default DraggableL1;
