 
import React, { useState } from 'react';
import FoodItem from './Components/FoodItem';
 import Cart from './Components/Cart';

 const foodMenu = [
  { id: 1, name: 'Burger', price: 10.99 },
  { id: 2, name: 'Pizza', price: 12.99 },
// //   // Add more food items as needed
 ];

 const App = () => {
  const [cartItems, setCartItems] = useState([]);

 const addToCart = (item) => {
   setCartItems([...cartItems, item]);
 };

  const removeFromCart = (index) => {
   const newCartItems = [...cartItems];
     newCartItems.splice(index, 1);
   setCartItems(newCartItems);
  };

  return (
   <div>
     <h1>Food Order Website</h1>
    <div>
       <h2>Menu</h2>
      {foodMenu.map((item) => (
          <FoodItem
            key={item.id}
           name={item.name}
           price={item.price}
          onAddToCart={() => addToCart(item)}
        />
        ))}
     </div>
    <Cart cartItems={cartItems} onRemoveFromCart={removeFromCart} />
  </div>
  );
};

 export default App;


//   // src/App.js
//   import React, { useState } from 'react';
//   import './App.css';
  
//   const foodMenu = [
//     { id: 1, name: 'Burger', price: 10.99 },
//     { id: 2, name: 'Pizza', price: 12.99 },
//     { id: 3, name: 'Salad', price: 8.99 },
//     // Add more food items as needed
//   ];
  
//   const App = () => {
//     const [cartItems, setCartItems] = useState([]);
  
//     const addToCart = (item) => {
//       setCartItems([...cartItems, item]);
//     };
  
//     const removeFromCart = (index) => {
//       const newCartItems = [...cartItems];
//       newCartItems.splice(index, 1);
//       setCartItems(newCartItems);
//     };
  
//     const calculateTotal = () => {
//       return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
//     };
  
//     return (
//       <div className="app-container">
//         <h1>Food Order Website</h1>
//         <div className="menu-container">
//           <h2>Menu</h2>
//           {foodMenu.map((item) => (
//             <div className="food-item" key={item.id}>
//               <h3>{item.name}</h3>
//               <p>${item.price.toFixed(2)}</p>
//               <button onClick={() => addToCart(item)}>Add to Cart</button>
//             </div>
//           ))}
//         </div>
//         <div className="cart-container">
//           <h2>Shopping Cart</h2>
//           <ul>
//             {cartItems.map((item, index) => (
//               <li key={index}>
//                 {item.name} - ${item.price.toFixed(2)}{' '}
//                 <button onClick={() => removeFromCart(index)}>Remove</button>
//               </li>
//             ))}
//           </ul>
//           <div className="order-summary">
//             <h3>Total: ${calculateTotal()}</h3>
//             <button className="order-button">Place Order</button>
//             </div>
//       </div>
//     </div>
//   );
// };

// export default App;


