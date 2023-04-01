import { useApi } from '../../hooks/useApi.js';
import { API_BASE_URL } from '../../settings/api.js';
import ProductItem from '../ProductItem.jsx';
import styles from './Home.module.scss';
import { useEffect, useState } from 'react';

function Home() {
  const { data, isLoading, isError } = useApi(API_BASE_URL);
  const [products, setProducts] = useState([]);

  function handleSearch(e) {
    const filteredProducts = [
      ...data.filter((product) => product.title.toLowerCase().includes(e.target.value.toLowerCase().trim())),
    ];
    setProducts([...filteredProducts]);
  }

  useEffect(() => {
    setProducts(data);
  }, [data]);

  if (isError) {
    return <div className={'error'}>Something went wrong.. please try again later</div>;
  }

  return (
    <section>
      <div className={'container'}>
        <h1>Home</h1>
        {isLoading ? (
          <div className={'loader-container'}>
            <div className={'loader'}></div>
          </div>
        ) : (
          <div className={styles.home}>
            <div className={'products-container'}>
              <h2>All Products</h2>
              <div className={'search-products'}>
                <label htmlFor={'search'}>Search:</label>
                <input name={'search'} placeholder={'Search products'} onKeyUp={handleSearch} />
              </div>
              <div className={'products'}>
                {products.length ? (
                  products.map((product) => <ProductItem key={product.id} object={product} {...product} />)
                ) : (
                  <h3>No products found</h3>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Home;
