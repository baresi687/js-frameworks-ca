import { useNavigate, useParams } from 'react-router-dom';
import { useApi } from '../../hooks/useApi.js';
import { API_BASE_URL } from '../../settings/api.js';
import styles from './ProductDetails.module.scss';
import Button from '../Button.jsx';
import { useAddToCart } from '../../hooks/useAddToCart.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';

function ProductDetails() {
  const { id } = useParams();
  const { data, isLoading, isError } = useApi(API_BASE_URL + '/' + id);
  const { title, description, imageUrl, discountedPrice, price, rating, reviews } = data;
  const discount = price - discountedPrice;
  const { isAddToCart, isCheckmark, handleAddToCart } = useAddToCart();
  const navigate = useNavigate();
  const ratingTemplate = Array(5).fill(faStarEmpty);
  const averageRating = [...ratingTemplate];

  function handleRating(rating, array) {
    for (let i = 0; i < Math.trunc(rating); i++) {
      array[i] = faStar;
    }

    if (!Number.isInteger(rating)) {
      array[Math.trunc(rating)] = faStarHalfStroke;
    }
  }

  handleRating(rating, averageRating);

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
              <div className={'rating'}>
                <p>Rating: </p>
                {rating > 0 ? (
                  <div>
                    {averageRating.map((item, index) => (
                      <FontAwesomeIcon className={'rating-star'} key={index} icon={item} />
                    ))}
                  </div>
                ) : (
                  'Not rated'
                )}
              </div>
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
              <Button onClick={() => handleAddToCart(data)}>
                {isAddToCart ? (
                  <>
                    <span className={'loader-processing'}></span>Adding..
                  </>
                ) : (
                  ''
                )}
                {isCheckmark ? (
                  <>
                    <span className={'check'}></span>Added
                  </>
                ) : (
                  ''
                )}
                {!isAddToCart && !isCheckmark && 'Add to Cart'}
              </Button>
            </div>
          </div>
          <div className={'reviews'}>
            <h3>Reviews</h3>
            <div className={'reviews-container'}>
              {reviews && reviews.length ? (
                reviews.map(({ username, rating, description }, index) => {
                  const userRating = [...ratingTemplate];
                  handleRating(rating, userRating);

                  return (
                    <div key={index}>
                      <div>
                        <b>{username}</b>
                        <span>
                          {userRating.map((item, index) => (
                            <FontAwesomeIcon className={'rating-star'} key={index} icon={item} />
                          ))}
                        </span>
                      </div>
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
