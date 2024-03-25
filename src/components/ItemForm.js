// components/ItemForm.js
import React, { useState } from 'react';

const ItemForm = ({ onSubmit, categories }) => {
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');
  const [itemCategory, setItemCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      name: itemName,
      quantity: itemQuantity,
      category: itemCategory,
    };
    onSubmit(newItem);
    setItemName('');
    setItemQuantity('');
    setItemCategory('');
  };

  return (
    <div className="add-item-container">
      <form onSubmit={handleSubmit}>
        <label className="form">
          Item Name:
          <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} />
        </label>
        <label className="form">
          Quantity:
          <input type="number" value={itemQuantity} onChange={(e) => setItemQuantity(e.target.value)} />
        </label>
        <label className="form">
          Category:
          <input type="text" value={itemCategory} onChange={(e) => setItemCategory(e.target.value)} />
        </label>
        <button className="add-button" type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default ItemForm;
