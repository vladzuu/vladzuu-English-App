import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable, DropResult } from "@hello-pangea/dnd";
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';



let num = [2, 3, 4, 5, 6, 7, 8]


const IrregularVerbsL1 = () => {
  const dataWorld = useSelector((state: RootState) => state.persistedReducer.irregularVerbs.verbs)
  const [first, setFirst] = useState([2, 3, 4, 5])
  const [two, setTwo] = useState<Array<number>>([])
  const [three, setThree] = useState<Array<number>>([])

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;
    console.log(result);

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }


    let change = () => {
      let add = 1;
      let active = first;
      let complete = two;

      if (source.droppableId === "TodosList") {
        add = active[source.index];
        active.splice(source.index, 1);
      } else {
        add = complete[source.index];
        complete.splice(source.index, 1);
      }

      if (destination.droppableId === 'TodosList') {
        active.splice(destination.index, 0, add);
      } else {
        complete.splice(destination.index, 0, add);
      }
      setTwo(complete);
      setFirst(active);
    }

  }
  return (
    <div className="l1">
      <DragDropContext onDragEnd={onDragEnd}>

        <Droppable droppableId="TodosList" >
          {(provided, snapshot) => (
            <div
              style={{ width: 300, background: 'yellow' }}
              ref={provided.innerRef}
              {...provided.droppableProps}>
              <span>thfg</span>
              {first?.map((num, index) => (
                <Draggable
                  key={num}
                  draggableId={num.toString()}
                  index={index}>
                  {(provided, snapshot) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    // 
                    >
                      <div style={{ width: 200, height: 200, background: 'green' }}>
                        {num}
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>

        <Droppable droppableId="TodosList1">
          {(provided, snapshot) => (
            <div
              style={{ width: 300, background: 'gray' }}
              ref={provided.innerRef}
              {...provided.droppableProps}>
              <span>thfg</span>
              {two?.map((num, index) => (
                <Draggable
                  key={num}
                  draggableId={num.toString()}
                  index={index}>
                  {(provided, snapshot) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    // 
                    >
                      <div style={{ width: 200, height: 200, background: 'green' }}>
                        {num}
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}

              {provided.placeholder}
            </div>
          )}
        </Droppable>

        <Droppable droppableId="TodosList2">
          {(provided, snapshot) => (
            <div
              style={{ width: 300, background: 'blue' }}
              ref={provided.innerRef}
              {...provided.droppableProps}>
              <span>thfg</span>
              {three?.map((num, index) => (
                <Draggable
                  key={num}
                  draggableId={num.toString()}
                  index={index}>
                  {(provided, snapshot) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    // 
                    >
                      <div style={{ width: 200, height: 200, background: 'green' }}>
                        {num}
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}

              {provided.placeholder}
            </div>
          )}
        </Droppable>

        <Droppable droppableId="TodosList3">
          {(provided, snapshot) => (
            <div
              style={{ width: 300, height: 250, background: 'purple' }}
              ref={provided.innerRef}
              {...provided.droppableProps}>
              <span>thfg</span>


              {provided.placeholder}
            </div>
          )}
        </Droppable>

      </DragDropContext>
    </div>

  );
};



export default IrregularVerbsL1;
