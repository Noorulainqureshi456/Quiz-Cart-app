
import React, { useState } from 'react';
import ProductList from './ProductList';
import CartItem from './CartItem';
import './ShoppingCart.css';

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: 'Laptop', price: 999.99 },
    { id: 2, name: 'Smartphone', price: 699.99 },
    { id: 3, name: 'Headphones', price: 149.99 },
    { id: 4, name: 'Tablet', price: 399.99 }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="shopping-cart-container">
      <h2>Shopping Cart</h2>
      <div className="cart-layout">
        <ProductList products={products} onAddToCart={addToCart} />
        <div className="cart-section">
          <h3>Your Cart ({cart.length} items)</h3>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              {cart.map((item, index) => (
                <CartItem 
                  key={index} 
                  item={item} 
                  onRemove={removeFromCart} 
                />
              ))}
              <div className="cart-total">
                <strong>Total: ${total.toFixed(2)}</strong>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
