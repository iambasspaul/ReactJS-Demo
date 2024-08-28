import React from 'react';
import { useDrop } from 'react-dnd';

const RightZone = ({ items, onItemSelect, onItemsUpdate }) => {
  const [, drop] = useDrop({
    accept: 'ITEM',
    drop: (item, monitor) => {
      const delta = monitor.getDifferenceFromInitialOffset();
      const left = Math.round(item.left + delta.x);
      const top = Math.round(item.top + delta.y);
      moveItem(item.id, left, top);
      return undefined;
    },
  });

  const moveItem = (id, left, top) => {
    onItemsUpdate(
      items.map(item => {
        if (item.id === id) {
          return { ...item, left, top };
        }
        return item;
      })
    );
  };

  return (
    <div ref={drop} className="right-zone">
      {items.map((item) => (
        <div
          key={item.id}
          className="draggable-item"
          style={{ left: item.left, top: item.top }}
          onClick={() => onItemSelect(item)}
        >
          {item.type === 'text' ? (
            <p>{item.content}</p>
          ) : (
            <img 
              src={item.src} 
              alt="Dragged item" 
              style={{ width: `${item.width}px`, height: `${item.height}px` }} 
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default RightZone;