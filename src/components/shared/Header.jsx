import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <header>
        <nav>
          <div>
            <Link to={'/'}>Logo</Link>
          </div>
          <ul>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/contact'}>Contact Us</Link>
            </li>
            <li>
              <Link to={'/cart'}>Cart</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
