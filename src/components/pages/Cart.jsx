import { Link } from 'react-router-dom';

function Cart() {
  return (
    <section>
      <div className={'container'}>
        <h1>Cart</h1>
        <Link to={'/cart'}>Placeholder link</Link>
      </div>
    </section>
  );
}

export default Cart;
