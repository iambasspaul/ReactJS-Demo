import React, { useState, useEffect } from 'react';

const EditableItem = ({ item, onUpdate, onBack }) => {
  const [editedItem, setEditedItem] = useState(item);

  useEffect(() => {
    setEditedItem(item);
  }, [item]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedValue = value;

    if (name === 'content') {
      // Limit content to 50 words
      const words = value.split(/\s+/);
      if (words.length > 50) {
        updatedValue = words.slice(0, 50).join(' ');
      }
    }

    const updatedItem = { ...editedItem, [name]: updatedValue };
    setEditedItem(updatedItem);
    onUpdate(updatedItem);
  };

  return (
    <div>
      {item.type === 'text' ? (
        <textarea
          name="content"
          value={editedItem.content}
          onChange={handleChange}
          placeholder="Enter text (max 50 words)"
        />
      ) : (
        <>
          <input
            type="text"
            name="src"
            value={editedItem.src}
            onChange={handleChange}
            placeholder="Image URL"
          />
          <input
            type="number"
            name="width"
            value={editedItem.width}
            onChange={handleChange}
            placeholder="Width"
          />
          <input
            type="number"
            name="height"
            value={editedItem.height}
            onChange={handleChange}
            placeholder="Height"
          />
        </>
      )}
      <button type="button" onClick={onBack}>Back to item selection</button>
    </div>
  );
};

export default EditableItem;