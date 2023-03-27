import { useApi } from '../../hooks/useApi.js';
import { API_BASE_URL } from '../../settings/api.js';
import ProductItem from '../ProductItem.jsx';
import styles from './Home.module.scss';

function Home() {
  const { data, isLoading, isError } = useApi(API_BASE_URL);

  if (isError) {
    return <div className={'error'}>Something went wrong.. please try again later</div>;
  }

  return (
    <section>
      <div className={'container'}>
        <h1>Home</h1>
        {isLoading && (
          <div className={'loader-container'}>
            <div className={'loader'}></div>
          </div>
        )}
        <div className={styles.home}>
          <div className={'products-container'}>
            <h2>All Products</h2>
            <div className={'products'}>
              {data.map((product) => {
                return <ProductItem {...product} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
