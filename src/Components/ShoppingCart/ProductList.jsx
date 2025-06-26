import React from 'react';
import './ShoppingCart.css'
const ProductList = ({ products, onAddToCart }) => {
  return (
    <div className="product-list">
      <h3>Available Products</h3>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-content">
              <span className="product-name">{product.name}</span>
              <span className="product-price">${product.price.toFixed(2)}</span>
            </div>
            <button 
              onClick={() => onAddToCart(product)} 
              className="add-to-cart-btn"
              aria-label={`Add ${product.name} to cart`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              Add
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
