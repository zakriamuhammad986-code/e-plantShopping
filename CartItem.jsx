import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  selectCartItems,
  selectTotalItems,
  selectTotalCost,
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from './CartSlice.jsx';
import './CartItem.css';

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const totalItems = useSelector(selectTotalItems);
  const totalCost = useSelector(selectTotalCost);
  const [checkoutMessage, setCheckoutMessage] = useState('');

  const handleCheckout = () => {
    setCheckoutMessage('Checkout is coming soon \u2014 thanks for your patience!');
  };

  return (
    <main className="cart-page">
      <h1>Your Shopping Cart</h1>

      {items.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty. Time to add some greenery.</p>
          <Link to="/plants" className="continue-shopping-btn">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-summary">
            <div>
              <span className="summary-label">Total plants</span>
              <span className="summary-value">{totalItems}</span>
            </div>
            <div>
              <span className="summary-label">Total cost</span>
              <span className="summary-value">${totalCost.toFixed(2)}</span>
            </div>
          </div>

          <ul className="cart-item-list">
            {items.map((item) => (
              <li className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} className="cart-item-thumb" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p className="cart-item-unit-price">${item.price.toFixed(2)} each</p>
                </div>

                <div className="cart-item-quantity">
                  <button
                    type="button"
                    aria-label={`Decrease quantity of ${item.name}`}
                    onClick={() => dispatch(decrementQuantity(item.id))}
                  >
                    &minus;
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    type="button"
                    aria-label={`Increase quantity of ${item.name}`}
                    onClick={() => dispatch(incrementQuantity(item.id))}
                  >
                    +
                  </button>
                </div>

                <div className="cart-item-total">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>

                <button
                  type="button"
                  className="delete-btn"
                  aria-label={`Remove ${item.name} from cart`}
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>

          <div className="cart-actions">
            <Link to="/plants" className="continue-shopping-btn">
              Continue Shopping
            </Link>
            <button type="button" className="checkout-btn" onClick={handleCheckout}>
              Checkout
            </button>
          </div>

          {checkoutMessage && <p className="checkout-message">{checkoutMessage}</p>}
        </>
      )}
    </main>
  );
}
