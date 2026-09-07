# Paradise Nursery

Paradise Nursery is a front-end shopping application for browsing houseplants,
adding them to a cart, and managing quantities before checkout. It was built
as a final project for a front-end development course, using React for the
UI and Redux Toolkit for shopping cart state management.

## Features

- **Landing page** with a full-bleed background image, a short company
  description, the company name, and a "Get Started" button that leads into
  the shop.
- **Product listing page** with eight houseplants grouped into four
  categories (Succulents & Cacti, Air-Purifying Plants, Aromatic Herbs, and
  Trailing & Vining). Each plant shows a thumbnail, name, price, and an
  "Add to Cart" button that disables itself once the plant is in the cart.
- **Header/navbar** on the product listing and cart pages with links to
  Home, Plants, and Cart, plus a cart icon that updates live with the total
  number of items.
- **Shopping cart page** showing every plant in the cart with its thumbnail,
  name, unit price, and line total, along with increase/decrease quantity
  buttons, a delete button, the overall item count and cost, a "Continue
  Shopping" button, and a "Checkout" button (shows a "Coming Soon" message).

## Tech stack

- React (Vite)
- Redux Toolkit + React-Redux
- React Router (`HashRouter`, for easy GitHub Pages deployment)
- Plain CSS (no UI framework)

## Project structure

```
src/
  App.jsx                 landing page + route shell
  App.css                 global styles + landing page background
  store.js                Redux store configuration
  components/
    Header.jsx / .css     navbar + live cart icon
    AboutUs.jsx / .css    company description used on the landing page
    ProductList.jsx / .css  product listing page
    CartItem.jsx / .css     shopping cart page
    CartSlice.jsx          Redux Toolkit slice for the cart
  data/
    plants.js              plant catalog data
  assets/                   SVG thumbnail illustrations + hero background
```

## Running locally

```bash
npm install
npm run dev
```

Then open the printed local URL (typically `http://localhost:5173`).

## Building

```bash
npm run build
```

The production build is written to `dist/`.

## Deploying to GitHub Pages

1. Push this project to a public GitHub repository.
2. Install the deploy dependency if you haven't already: `npm install`.
3. Run:

   ```bash
   npm run deploy
   ```

   This builds the app and publishes the `dist/` folder to the `gh-pages`
   branch using the `gh-pages` package.
4. In your repository settings, under **Pages**, set the source to the
   `gh-pages` branch. Your app will be live at
   `https://<your-username>.github.io/<repo-name>/`.

Because the app uses `HashRouter` and a relative Vite `base` path, it works
correctly when served from a GitHub Pages project subpath without any extra
server configuration.
