import logo from '../assets/eShop-logo.svg';
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  function handleHamburgerMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <header className={styles.headerStyles}>
      <div className={'header-container'}>
        <div className={'logo-hamburger'}>
          <div className={'container'}>
            <NavLink to={'/'} className={'logo'}>
              <img src={logo} alt={'Home'} />
            </NavLink>
            <button className="open-menu" onClick={handleHamburgerMenu}>
              {showMenu ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2.4 24L0 21.6L9.6 12L0 2.4L2.4 0L12 9.6L21.6 0L24 2.4L14.4 12L24 21.6L21.6 24L12 14.4L2.4 24Z"
                    fill="#3182CE"
                  />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0V4.8H24V0H0ZM0 9.6V14.4H24V9.6H0ZM0 19.2V24H24V19.2H0Z" fill="#3182CE" />
                </svg>
              )}
            </button>
          </div>
        </div>
        <nav className={showMenu ? 'showMenu' : ''}>
          <div className={'container'}>
            <ul className={'menu'}>
              <li>
                <NavLink to={'/'} onClick={handleHamburgerMenu}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to={'/contact'} onClick={handleHamburgerMenu}>
                  Contact
                </NavLink>
              </li>
              <li className={'cart'}>
                <NavLink to={'/cart'} onClick={handleHamburgerMenu}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M4.142 4L6.01 16.136A1.002 1.002 0 0 0 7.016 17H18a1 1 0 0 0 .958-.713l3-10A1 1 0 0 0 21 5H6.32l-.33-2.138a.993.993 0 0 0-.346-.627a.997.997 0 0 0-.66-.235H3a1 1 0 1 0 0 2h1.142zm3.716 11l-1.23-8h13.028l-2.4 8H7.858zM10 20a2 2 0 1 1-4 0a2 2 0 0 1 4 0zm9 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0z"
                    />
                  </svg>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
