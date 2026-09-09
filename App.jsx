import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import AboutUs from './components/AboutUs.jsx';
import ProductList from './components/ProductList.jsx';
import CartItem from './components/CartItem.jsx';
import './App.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1 className="brand-name">Paradise Nursery</h1>
        <AboutUs />
        <Link to="/plants" className="get-started-btn">
          Get Started
        </Link>
      </div>
    </div>
  );
}

function AppShell() {
  const location = useLocation();
  const showHeader = location.pathname !== '/';

  return (
    <div className="app">
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <AppShell />
    </HashRouter>
  );
}
