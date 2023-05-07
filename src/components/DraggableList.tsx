import {
  DragDropContext,
  Droppable,
  Draggable,
  type DropResult,
} from 'react-beautiful-dnd';

interface Props<T extends { id: string }> {
  items: T[];
  onChange: (items: T[]) => any;
  render: (info: { item: T; isDragging: boolean }) => JSX.Element;
}

function reorder<T>(list: T[], startIndex: number, endIndex: number): T[] {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
}

export default function DraggableList<T extends { id: string }>({
  items,
  onChange,
  render,
}: Props<T>) {
  const dragEndHandler = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    onChange(reorder(items, result.source.index, result.destination.index));
  };

  return (
    <DragDropContext onDragEnd={dragEndHandler}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={provided.draggableProps.style}
                  >
                    {render({ item, isDragging: snapshot.isDragging })}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
