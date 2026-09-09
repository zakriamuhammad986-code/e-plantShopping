```jsx
import { useDispatch, useSelector } from 'react-redux';
import { categories } from '../data/plants.js';
import { addItem, selectCartItems } from './CartSlice.jsx';
import './ProductList.css';

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  const handleAddToCart = (plant) => {
    dispatch(
      addItem({
        id: plant.id,
        name: plant.name,
        price: plant.price,
        image: plant.image,
        quantity: 1,
      })
    );
  };

  return (
    <main className="product-list">
      <div className="product-list-intro">
        <h1>Our Plants</h1>
        <p>
          Every plant below is greenhouse-raised and ready to ship this week.
        </p>
      </div>

      {categories.map((category) => (
        <section
          key={category.name}
          className="category-section"
        >
          <div className="category-heading">
            <h2>{category.name}</h2>
            <p>{category.description}</p>
          </div>

          <div className="plant-grid">
            {category.plants.map((plant) => {
              const added = isInCart(plant.id);

              return (
                <article
                  key={plant.id}
                  className="plant-card"
                >
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="plant-thumb"
                  />

                  <div className="plant-info">
                    <h3>{plant.name}</h3>

                    <p className="plant-description">
                      {plant.description}
                    </p>

                    <div className="plant-footer">
                      <span className="plant-price">
                        ${plant.price.toFixed(2)}
                      </span>

                      <button
                        type="button"
                        className="add-to-cart-btn"
                        disabled={added}
                        onClick={() => handleAddToCart(plant)}
                      >
                        {added ? 'Added' : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </main>
  );
}
```
