import React from 'react';

const Cart = ({ cartItems, onRemoveFromCart }) => {
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}{' '}
            <button onClick={() => onRemoveFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;

