import Button from './Button.jsx';
import { Link, useNavigate } from 'react-router-dom';
import styles from './ProductItem.module.scss';

function ProductItem({ id, title, description, imageUrl, discountedPrice }) {
  const navigate = useNavigate();
  return (
    <div className={styles.productItem} key={id}>
      <Link to={`/product/${id}`}>
        <img src={imageUrl} alt={title} />
        <h3>{title}</h3>
        <p className={'description'}>{description}</p>
        <p>
          Price: <strong>NOK {discountedPrice}</strong>
        </p>
      </Link>
      <div className={'product-btn'}>
        <Button>Add to Cart</Button>
        <Button color={'#3182ce'} bgColor={'transparent'} border onClick={() => navigate(`/product/${id}`)}>
          View details
        </Button>
      </div>
    </div>
  );
}

export default ProductItem;
