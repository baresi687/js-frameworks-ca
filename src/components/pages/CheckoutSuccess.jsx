import { Link } from 'react-router-dom';
import styles from './CheckoutSuccess.module.scss';

function CheckoutSuccess() {
  return (
    <section>
      <div className={'container height-min-content'}>
        <h1>Checkout</h1>
        <div className={styles.checkout}>
          <div className={'checkout-success-message'}>
            <h2>Thank you for ordering with eShop</h2>
            <h3>Your order should arrive within two weeks </h3>
          </div>
          <Link to={'/'}>Home</Link>
        </div>
      </div>
    </section>
  );
}

export default CheckoutSuccess;
