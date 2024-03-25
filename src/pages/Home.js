import React, { useState } from 'react';
import ShoppingCart from '../components/ShoppingCart';
import { CategoriesData } from '../Api/CategoriesData';
import { ProductsData } from '../Api/ProductsData';
import './Home.css'; // Import the CSS file

const Home = () => {
  
  const [cart, setCart] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  

  const handleRemoveItem = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  const handleAddToCart = (product) => {
    setCart([...cart, { ...product, id: cart.length + 1 }]);
  };

  const handleCategoryClick = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };
  

  const handleCheckout = () => {
    // Simulate backend integration for transaction handling
    alert('Checkout successful!');
    setCart([]);
  };
  

  return (
    <div>
      <h1 className="title">Green Harvest - Point of Sale System </h1>
      <div className="main-container">
        <div className="category-images-container">
          {CategoriesData.map(category => (
            <div key={category.id} className="category-card" onClick={() => handleCategoryClick(category.id)}>
              <img
                src={category.urlImage}
                alt={category.label}
                className={`category-image ${selectedCategoryId === category.id ? 'selected' : ''}`}
              />
              <p className="category-label">{category.label}</p>
            </div>
          ))}
        </div>
        <div className="product-images-container">
          {ProductsData.filter(product => product.id_category === selectedCategoryId).map(product => (
            <div key={product.id} className="product-card">
              <img
                src={product.urlImage}
                alt={product.name}
                onClick={() => handleAddToCart(product)}
                className="product-image"
              />
              <h3 className="product-label">{product.name}</h3>
              <p className="category-label">{product.note}</p>
              <p className="category-label">{product.price} {product.devise}</p>
              <button className="add-to-cart-button" onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
        <div className="shopping-cart-container">
          <ShoppingCart cart={cart} onRemoveItem={handleRemoveItem} onCheckout={handleCheckout} />
        </div>
      </div>
      
    </div>
  );
};

export default Home;
