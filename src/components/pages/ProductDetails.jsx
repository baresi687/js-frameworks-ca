import { useParams } from 'react-router-dom';
import { useApi } from '../../hooks/useApi.js';
import { API_BASE_URL } from '../../settings/api.js';
import styles from './ProductDetails.module.scss';
import Button from '../Button.jsx';

function ProductDetails() {
  const { id } = useParams();
  const { data, isLoading, isError } = useApi(API_BASE_URL + '/' + id);
  const { title, description, imageUrl, discountedPrice, price, rating, reviews } = data;
  const discount = price - discountedPrice;

  if (isError) {
    return <div className={'error'}>Something went wrong.. please try again later</div>;
  }

  return (
    <section>
      <div className={'container'}>
        <h1>Product details</h1>
        {isLoading && (
          <div className={'loader-container'}>
            <div className={'loader'}></div>
          </div>
        )}
        <div className={styles.productDetails}>
          <div className={'details'}>
            <div>
              <h2>{title}</h2>
              <p>{description}</p>
              <p className={'rating'}>Rating: {rating > 0 ? <span>{rating}</span> : 'Not rated'}</p>
              <div className={'price'}>
                <p>
                  Price:
                  {discount > 0 ? (
                    <>
                      <span className={'discount-price'}> ${discountedPrice} </span>
                      <span className={'old-price'}> ${price} </span>
                      <span className={'savings'}>
                        You save <span> ${discount.toFixed(2)}</span>
                      </span>
                    </>
                  ) : (
                    <span className={'discount-price'}> ${discountedPrice}</span>
                  )}
                </p>
              </div>
              <Button>Add to Cart</Button>
            </div>
            <div>
              <img src={imageUrl} alt={title} />
            </div>
          </div>
          {reviews
            ? reviews.map(({ username, rating, description }, index) => {
                return (
                  <div key={index}>
                    <p>
                      {username} <span>Rating: {rating}</span>
                    </p>
                    <p>{description}</p>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
