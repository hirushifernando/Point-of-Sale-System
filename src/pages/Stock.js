import React, { useState } from 'react';
import ItemList from '../components/ItemList';
import ItemForm from '../components/ItemForm';
import { CategoriesData } from '../Api/CategoriesData';
import { ProductsData } from '../Api/ProductsData';
 

const Stock = () => {
  const [items, setItems] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [products, setProducts] = useState(ProductsData);

  const handleAddItem = (newItem) => {
    const updatedProducts = products.map(product => {
      if (product.id === newItem.id) {
        return { ...product, available: product.available + newItem.quantity };
      }
      return product;
    });
    setProducts(updatedProducts);
    setItems([...items, { ...newItem, id: items.length + 1 }]);
  };

  const handleDeleteItem = (itemId) => {
    setItems(items.filter(item => item.id !== itemId));
  };

  const handleCategoryClick = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };

  const filteredProducts =
    selectedCategoryId !== null
      ? products.filter((product) => product.id_category === selectedCategoryId)
      : products;

  return (
    <div>
      <h1 className="title">Green Harvest - Stock Management</h1>
      <ItemForm onSubmit={handleAddItem} products={products} />
      <ItemList items={items} onDelete={handleDeleteItem} products={products} />
      
      <div className="main-container">
        <div className="category-images-container">
          {CategoriesData.map((category) => (
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
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.urlImage}
                alt={product.name}
                className="product-image"
              />
              <p className="category-label">{product.name}</p>
              <p className="category-label">{product.available} in stock</p>
              
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Stock;
