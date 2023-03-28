import Button from './Button.jsx';
import { Link, useNavigate } from 'react-router-dom';
import styles from './ProductItem.module.scss';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext.js';

function ProductItem({ id, title, description, imageUrl, discountedPrice, object }) {
  const navigate = useNavigate();
  const { dispatch } = useContext(CartContext);

  return (
    <div className={styles.productItem}>
      <Link to={`/product/${id}`}>
        <img src={imageUrl} alt={title} />
        <h3>{title}</h3>
        <p className={'description'}>{description}</p>
        <p>
          Price: <span className={'price'}>${discountedPrice}</span>
        </p>
      </Link>
      <div className={'product-btn'}>
        <Button onClick={() => dispatch({ type: 'INCREMENT_PRODUCT', payload: object })}>Add to Cart</Button>
        <Button color={'#3182ce'} bgColor={'transparent'} border onClick={() => navigate(`/product/${id}`)}>
          View details
        </Button>
      </div>
    </div>
  );
}

export default ProductItem;
