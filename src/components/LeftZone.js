import React from 'react';
import DraggableItem from './DraggableItem';
import EditableItem from './EditableItem';

const LeftZone = ({ onDrop, selectedItem, onItemUpdate, onClearAll, onBackToSelection }) => {
  const items = [
    { type: 'text', content: 'Please insert text' },
    { type: 'image', src: 'https://miro.medium.com/v2/resize:fit:701/1*j8DELPVuI_w8045sxmHQsA.png', width: 400, height: 400 }
  ];

  return (
    <div className="left-zone">
      {!selectedItem ? (
        <>
          <div className="item-buttons">
            {items.map((item, index) => (
              <DraggableItem key={index} item={item} onDrop={onDrop} />
            ))}
          </div>
          <button onClick={onClearAll} className="clear-all-button">Clear All</button>
        </>
      ) : (
        <EditableItem 
          item={selectedItem} 
          onUpdate={onItemUpdate} 
          onBack={onBackToSelection} 
        />
      )}
    </div>
  );
};

export default LeftZone;