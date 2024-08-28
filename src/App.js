import React, { useState } from 'react';
import LeftZone from './components/LeftZone';
import RightZone from './components/RightZone';
import './styles.css';

const App = () => {
  const [rightItems, setRightItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleDrop = (item) => {
    const newItem = { ...item, id: Date.now() };
    setRightItems([...rightItems, newItem]);
    //setSelectedItem(newItem);
  };

  const handleItemSelect = (item) => {
    setSelectedItem(item);
  };

  const handleItemUpdate = (updatedItem) => {
    setRightItems(rightItems.map(item => 
      item.id === updatedItem.id ? updatedItem : item
    ));
    setSelectedItem(updatedItem);
  };

  const handleClearAll = () => {
    setRightItems([]);
    setSelectedItem(null);
  };

  return (
    <div className="app">
      <LeftZone 
        onDrop={handleDrop} 
        selectedItem={selectedItem} 
        onItemUpdate={handleItemUpdate}
        onClearAll={handleClearAll}
        onBackToSelection={() => setSelectedItem(null)}
      />
      <div className="divider"></div>
      <RightZone 
        items={rightItems} 
        onItemSelect={handleItemSelect}
        onItemsUpdate={setRightItems}
      />
    </div>
  );
};

export default App;