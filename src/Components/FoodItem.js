import React from 'react';

const FoodItem = ({ name, price, onAddToCart }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>${price}</p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
};

export default FoodItem;
