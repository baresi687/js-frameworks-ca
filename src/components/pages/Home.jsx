import { Link } from 'react-router-dom';

function Home() {
  return (
    <section>
      <div className={'container'}>
        <h1>Home</h1>
        <Link to={'/cart'}>Placeholder link</Link>
      </div>
    </section>
  );
}

export default Home;
