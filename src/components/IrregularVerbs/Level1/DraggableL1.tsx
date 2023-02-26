import React from 'react';
import { Draggable } from "@hello-pangea/dnd";
import { Card, CardContent, Typography } from '@mui/material';
import { getStyle } from '../Helper';


interface DraggableL1Props {
  item: any
  index: number
  colorBackground: string
}

const DraggableL1 = ({ item, index, colorBackground }: DraggableL1Props) => {

  return (
    <Draggable

      key={item.id}
      draggableId={item.id.toString()}
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
          // style={{
          // userSelect: "none",
          // padding: 16,
          // margin: "0 0 8px 0",
          // minHeight: "50px",
          // backgroundColor: snapshot.isDragging
          //   ? "#263B4A"
          //   : "#456C86",
          // color: "white",
          // ...provided.draggableProps.style,
          // }}
          >
            <Card sx={{ margin: 1, background: colorBackground, }}>
              <CardContent>
                <Typography>
                  {item.translate}
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
