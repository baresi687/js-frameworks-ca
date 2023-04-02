import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext.js';
import styles from './Cart.module.scss';
import Button from '../Button.jsx';

function Cart() {
  const { state, dispatch } = useContext(CartContext);
  const { cart } = state;
  const totalSum = cart.reduce((total, product) => {
    total += product.discountedPrice * product.quantity;
    return total;
  }, 0);
  const navigate = useNavigate();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  function handleCheckout() {
    setIsCheckingOut(true);
    setTimeout(() => {
      dispatch({ type: 'CLEAR_CART' });
      setIsCheckingOut(false);
      navigate('/cart/checkout-success', { replace: true });
    }, 500);
  }

  return (
    <section>
      <div className={'container height-min-content'}>
        <h1>Cart</h1>
        <div className={styles.cart}>
          {cart.length > 0 ? (
            <div className={'cart-items'}>
              {cart.map((product) => {
                const productPrice = product.quantity * product.discountedPrice;
                return (
                  <div className={'cart-item'} key={product.id}>
                    <Link to={`/product/${product.id}`}>
                      <img src={product.imageUrl} alt={product.title} />
                    </Link>
                    <div>
                      <h2>{product.title}</h2>
                      <div className={'product-action'}>
                        <p>
                          Quantity: <b>{product.quantity}</b>
                        </p>
                        <div className={'product-action-btn'}>
                          <button
                            aria-label={'Decrement product quantity'}
                            onClick={() => dispatch({ type: 'DECREMENT_PRODUCT', payload: product })}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
                              <path fill="#747473" d="M2 26h60v12H2z" />
                            </svg>
                          </button>
                          <button
                            aria-label={'Increment product quantity'}
                            onClick={() => dispatch({ type: 'INCREMENT_PRODUCT', payload: product })}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
                              <path fill="#747473" d="M38 26V2H26v24H2v12h24v24h12V38h24V26z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <p>
                        Price: <span className={'price'}>${productPrice.toFixed(2)}</span>
                      </p>
                      <button
                        aria-label={'Remove product from cart'}
                        className={'remove-product-btn'}
                        onClick={() => dispatch({ type: 'REMOVE_PRODUCT', payload: product })}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19.5" viewBox="0 0 256 256">
                          <path
                            fill="currentColor"
                            d="M216 48h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16ZM96 40a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm96 168H64V64h128Zm-80-104v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Zm48 0v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Z"
                          />
                        </svg>
                        Remove product
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <h2>Cart is empty</h2>
          )}
          {cart.length > 0 ? (
            <div className={'total-checkout-container'}>
              <strong>
                Total: <span className={'sum'}>${totalSum.toFixed(2)}</span>
              </strong>
              <Button onClick={handleCheckout}>
                {isCheckingOut ? (
                  <>
                    <span className={'loader-processing'}></span>Processing..
                  </>
                ) : (
                  'Checkout'
                )}
              </Button>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default Cart;
