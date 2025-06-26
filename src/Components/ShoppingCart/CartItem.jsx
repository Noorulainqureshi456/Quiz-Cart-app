import React from 'react';
import './ShoppingCart.css';
const CartItem = ({ item, onRemove }) => {
  return (
    <div className="cart-item">
      <div className="item-info">
        <span className="item-name">{item.name}</span>
        <span className="item-price">${item.price.toFixed(2)}</span>
      </div>
      <button 
        onClick={() => onRemove(item.id)} 
        className="remove-btn"
        aria-label={`Remove ${item.name} from cart`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  );
};

export default CartItem;
