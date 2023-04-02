import Button from './Button.jsx';
import { Link, useNavigate } from 'react-router-dom';
import styles from './ProductItem.module.scss';
import { useAddToCart } from '../hooks/useAddToCart.js';

function ProductItem({ id, title, description, imageUrl, discountedPrice, object }) {
  const { isAddToCart, isCheckmark, handleAddToCart } = useAddToCart();
  const navigate = useNavigate();

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
        <Button onClick={(e) => handleAddToCart(object, e)}>
          {isAddToCart && (
            <>
              <span className={'loader-processing'}></span>Adding..
            </>
          )}
          {isCheckmark && (
            <>
              <span className={'check'}></span>Added
            </>
          )}
          {!isAddToCart && !isCheckmark && 'Add to Cart'}
        </Button>
        <Button
          padding={'6px 0'}
          color={'#1d4ed8'}
          bgColor={'transparent'}
          border
          onClick={() => navigate(`/product/${id}`)}
        >
          View details
        </Button>
      </div>
    </div>
  );
}

export default ProductItem;
