import { Link } from 'react-router-dom';

function ProductDetails() {
  return (
    <section>
      <div className={'container'}>
        <h1>Product details</h1>
        <Link to={'/cart'}>Placeholder link</Link>
      </div>
    </section>
  );
}

export default ProductDetails;
