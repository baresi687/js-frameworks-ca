import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/pages/Home.jsx';
import ProductDetails from './components/pages/ProductDetails.jsx';
import Contact from './components/pages/Contact.jsx';
import Cart from './components/pages/Cart.jsx';
import CheckoutSuccess from './components/pages/CheckoutSuccess.jsx';
import ErrorPage from './components/shared/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/product/:id',
        element: <ProductDetails />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/cart/checkout-success',
        element: <CheckoutSuccess />,
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
