import React from 'react';
import { useDrag } from 'react-dnd';

const DraggableItem = ({ item, onDrop }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'ITEM',
    item: { ...item },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        onDrop(item);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      {item.type === 'text' ? '文字' : '圖片'}
    </div>
  );
};

export default DraggableItem;