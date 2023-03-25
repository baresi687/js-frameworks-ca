import { Link } from 'react-router-dom';

function CheckoutSuccess() {
  return (
    <section>
      <div className={'container'}>
        <h1>Checkout success</h1>
        <Link to={'/cart'}>Placeholder link</Link>
      </div>
    </section>
  );
}

export default CheckoutSuccess;
