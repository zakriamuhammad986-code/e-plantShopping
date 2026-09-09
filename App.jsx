```jsx
import React, { useState } from 'react';
import Header from './components/Header.jsx';
import AboutUs from './components/AboutUs.jsx';
import ProductList from './components/ProductList.jsx';
import CartItem from './components/CartItem.jsx';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStarted = () => {
    setShowProductList(true);
  };

  return (
    <div className="app">
      {!showProductList ? (
        <div className="landing-page">
          <div className="landing-content">
            <h1 className="brand-name">Paradise Nursery</h1>

            <AboutUs />

            <button
              className="get-started-btn"
              onClick={() => setShowProductList(true)}
            >
              Get Started
            </button>
          </div>
        </div>
      ) : (
        <>
          <Header />
          <ProductList />
          <CartItem />
        </>
      )}
    </div>
  );
}

export default App;
```
