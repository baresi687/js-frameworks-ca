import React from 'react';
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <>
      <section>
        <div style={{ height: '50vh' }} className={'container'}>
          <h1>404 Page not found</h1>
          <Link to={'/'}>Home</Link>
        </div>
      </section>
    </>
  );
}

export default ErrorPage;
