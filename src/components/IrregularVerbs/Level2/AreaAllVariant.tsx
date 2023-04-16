import { Draggable, Droppable } from '@hello-pangea/dnd';
import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import { getStyle } from '../Common/Helper';

interface IAreaAllVariant {
  columnId: string,
  column: any,
  index: number
}

const AreaAllVariant = ({ columnId, column, index }: IAreaAllVariant) => {
  return (
    <Droppable droppableId={columnId}>
      {(provided, snapshot) => {
        return (
          <div
            className='area-variant'
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
                <Draggable
                  key={item.type}
                  draggableId={`${item.type}${item.verb}`}
                  index={index}
                >
                  {(provided, snapshot) => {
                    return (
                      <div
                        className='1'
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getStyle(provided.draggableProps.style, snapshot)}
                      >
                        <Card sx={{ margin: 1, }}>
                          <CardContent>
                            <Typography>
                              {item.verb}
                            </Typography>
                          </CardContent>
                        </Card>
                      </div>
                    );
                  }}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </div>
        );
      }}
    </Droppable >
  );
};

export default AreaAllVariant;
