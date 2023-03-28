import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';
import Home from './components/pages/Home.jsx';
import Contact from './components/pages/Contact.jsx';
import Cart from './components/pages/Cart.jsx';
import ProductDetails from './components/pages/ProductDetails.jsx';
import CheckoutSuccess from './components/pages/CheckoutSuccess.jsx';
import addToCartReducer from './reducers/addToCartReducer.js';
import { CartContext } from './context/CartContext.js';
import { useReducer } from 'react';

const initialState = {
  cart: [],
};
function App() {
  const [state, dispatch] = useReducer(addToCartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      <Routes>
        <Route path={'/'} element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path={'/product/:id'} element={<ProductDetails />}></Route>
          <Route path={'/contact'} element={<Contact />}></Route>
          <Route path={'/cart'} element={<Cart />}></Route>
          <Route path={'/cart/checkout-success'} element={<CheckoutSuccess />}></Route>
          <Route path={'*'} element={<div className={'container'}>Page not found</div>}></Route>
        </Route>
      </Routes>
    </CartContext.Provider>
  );
}

export default App;
