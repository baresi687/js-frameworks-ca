import Button from './Button.jsx';
import { Link, useNavigate } from 'react-router-dom';
import styles from './ProductItem.module.scss';
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext.js';

function ProductItem({ id, title, description, imageUrl, discountedPrice, object }) {
  const navigate = useNavigate();
  const { dispatch } = useContext(CartContext);
  const [isAddToCart, setIsAddToCart] = useState(false);

  function handleAddToCart(product) {
    setIsAddToCart(true);
    setTimeout(() => {
      dispatch({ type: 'INCREMENT_PRODUCT', payload: product });
      setIsAddToCart(false);
    }, 300);
  }

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
        <Button onClick={() => handleAddToCart(object)}>
          {isAddToCart ? (
            <>
              <div className={'loader-processing'}></div>
              Adding..
            </>
          ) : (
            'Add to Cart'
          )}
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
