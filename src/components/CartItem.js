// components/CartItem.js
import React from 'react';

const CartItem = ({ item, onRemove }) => {
  return (
    <div className="cartitem">
      {item.name} - {item.price} $
      <button className="cart-button" onClick={() => onRemove(item.id)}>Remove</button>
    </div>
  );
};

export default CartItem;
