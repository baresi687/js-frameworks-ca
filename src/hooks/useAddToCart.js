import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext.js';

export function useAddToCart() {
  const { dispatch } = useContext(CartContext);
  const [isAddToCart, setIsAddToCart] = useState(false);
  const [isCheckmark, setIsCheckmark] = useState(false);

  function handleAddToCart(product) {
    setIsAddToCart(true);
    setTimeout(() => {
      dispatch({ type: 'INCREMENT_PRODUCT', payload: product });
      setIsAddToCart(false);
    }, 400);
    setTimeout(() => {
      setIsCheckmark(true);
    }, 400);
    setTimeout(() => {
      setIsCheckmark(false);
    }, 900);
  }

  return { isAddToCart, isCheckmark, handleAddToCart };
}
