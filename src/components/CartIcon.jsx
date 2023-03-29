import { useContext } from 'react';
import { CartContext } from '../context/CartContext.js';

function CartIcon() {
  const cartLengthStyles = {
    backgroundColor: '#3182ce',
    color: 'rgba(255, 255, 255, 0.87)',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    position: 'absolute',
    top: '-8px',
    right: '-8px',
    fontSize: '0.7rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '600',
  };
  const { state } = useContext(CartContext);
  const { cart } = state;
  const totalItems = cart.reduce((total, item) => {
    total += item.quantity;
    return total;
  }, 0);

  return (
    <>
      <button style={{ position: 'relative', display: 'block' }} aria-label="Cart page">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M4.142 4L6.01 16.136A1.002 1.002 0 0 0 7.016 17H18a1 1 0 0 0 .958-.713l3-10A1 1 0 0 0 21 5H6.32l-.33-2.138a.993.993 0 0 0-.346-.627a.997.997 0 0 0-.66-.235H3a1 1 0 1 0 0 2h1.142zm3.716 11l-1.23-8h13.028l-2.4 8H7.858zM10 20a2 2 0 1 1-4 0a2 2 0 0 1 4 0zm9 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0z"
          />
        </svg>
        {cart.length > 0 && <span style={cartLengthStyles}>{totalItems}</span>}
      </button>
    </>
  );
}

export default CartIcon;
