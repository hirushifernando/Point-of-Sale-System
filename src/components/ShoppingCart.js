// components/ShoppingCart.js
// components/ShoppingCart.js
import React, { useState } from 'react';
import CartItem from './CartItem';


const ShoppingCart = ({ cart, onRemoveItem, onCheckout }) => {
  const [paymentMethod, setPaymentMethod] = useState('cash');

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };
  

  return (
    <div>
      <h2 className="shopping-cart-header">Shopping Cart</h2>
      {cart.map(item => (
        <CartItem  key={item.id} item={item} onRemove={onRemoveItem} />
      ))}
      <div className="total-price">
        <p>Total Price: ${calculateTotalPrice().toFixed(2)}</p>

        <div>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="cash"
              checked={paymentMethod === 'cash'}
              onChange={handlePaymentMethodChange}
            />
            Cash
          </label>
        </div>

        <div>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="card"
              checked={paymentMethod === 'card'}
              onChange={handlePaymentMethodChange}
            />
            Card
          </label>
        </div>
        <button className="checkout-button" onClick={onCheckout}>Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart;

