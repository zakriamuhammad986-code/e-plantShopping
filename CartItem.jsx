import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCartItems, updateQuantity, removeItem } from './CartSlice.jsx';
import './CartItem.css';

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const [checkoutMessage, setCheckoutMessage] = useState('');

  // Explicit calculation of total number of plants in the cart.
  const calculateTotalItems = () =>
    items.reduce((sum, item) => sum + item.quantity, 0);

  // Explicit calculation of the total cost of every item in the cart.
  const calculateTotalCost = () =>
    items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Explicit calculation of the line total for a single cart item.
  const calculateItemTotal = (item) => item.price * item.quantity;

  const totalItems = calculateTotalItems();
  const totalCost = calculateTotalCost();

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
                    onClick={() => dispatch(updateQuantity({ id: item.id, amount: -1 }))}
                  >
                    &minus;
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    type="button"
                    aria-label={`Increase quantity of ${item.name}`}
                    onClick={() => dispatch(updateQuantity({ id: item.id, amount: 1 }))}
                  >
                    +
                  </button>
                </div>

                <div className="cart-item-total">
                  ${calculateItemTotal(item).toFixed(2)}
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
