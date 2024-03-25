import React from 'react';

const ItemList = ({ items, onDelete, products }) => {
  return (
    <ul className="ul-list">
      {items.map(item => {
        const product = products.find(product => product.id === item.id);
        const quantityInStock = product ? product.available : 0;
        const totalQuantity = parseInt(quantityInStock, 10) + parseInt(item.quantity, 10);

        return (
          <li className="list"key={item.id}>
            <strong>{item.name}</strong> Quantity: {totalQuantity} (Added: {item.quantity})
            <button className="cart-button" onClick={() => onDelete(item.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default ItemList;
