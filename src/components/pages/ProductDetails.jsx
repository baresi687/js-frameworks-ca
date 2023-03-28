import { useNavigate, useParams } from 'react-router-dom';
import { useApi } from '../../hooks/useApi.js';
import { API_BASE_URL } from '../../settings/api.js';
import styles from './ProductDetails.module.scss';
import Button from '../Button.jsx';

function ProductDetails() {
  const { id } = useParams();
  const { data, isLoading, isError } = useApi(API_BASE_URL + '/' + id);
  const { title, description, imageUrl, discountedPrice, price, rating, reviews } = data;
  const discount = price - discountedPrice;
  const navigate = useNavigate();

  if (isError) {
    return <div className={'error'}>Something went wrong.. please try again later</div>;
  }

  return (
    <section>
      <div className={'container'}>
        <h1>{title}</h1>
        {isLoading && (
          <div className={'loader-container'}>
            <div className={'loader'}></div>
          </div>
        )}

        <div className={styles.productDetails}>
          <button className={'back-btn'} onClick={() => navigate(-1)}>
            {'<< '}Go back
          </button>
          <div className={'details-container'}>
            <div className={'product-image'}>
              <img src={imageUrl} alt={title} />
            </div>
            <div className={'details'}>
              <h2>{description}</h2>
              <p className={'rating'}>Rating: {rating > 0 ? <span>{rating} stars</span> : 'Not rated'}</p>
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
          </div>
          <div className={'reviews'}>
            <h3>Reviews</h3>
            <div className={'reviews-container'}>
              {reviews && reviews.length ? (
                reviews.map(({ username, rating, description }, index) => {
                  return (
                    <div key={index}>
                      <b>
                        {username} <span>rated this {rating} stars</span>
                      </b>
                      <p>{description}</p>
                    </div>
                  );
                })
              ) : (
                <div>No reviews yet</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
