export const receiveLocalDate = () => {
  const localDate = new Date()
  const stringDate = `${localDate.getDate()}.${localDate.getMonth() + 1}.${localDate.getFullYear()}`
  return stringDate
}
//return animation in draggable dnd
export const getStyle = (style: any, snapshot: any) => {
  if (!snapshot.isDragging) return {};
  if (!snapshot.isDropAnimating) {
    return style;
  }

  return {
    ...style,
    // cannot be 0, but make it super tiny
    transitionDuration: `0.001s`
  };
}

export const onDragEnd = (result: any, columns: any, setColumns: any) => {
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


