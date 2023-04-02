import { ScrollRestoration } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';
import addToCartReducer from './reducers/addToCartReducer.js';
import { CartContext } from './context/CartContext.js';
import { useReducer } from 'react';

const initialState = {
  cart: [],
};

function App() {
  const [state, dispatch] = useReducer(addToCartReducer, initialState);

  return (
    <>
      <CartContext.Provider value={{ state, dispatch }}>
        <Layout />
      </CartContext.Provider>
      <ScrollRestoration />
    </>
  );
}

export default App;
