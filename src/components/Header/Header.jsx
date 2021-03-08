import React from 'react';
import logo from 'assets/Logo-white.png';
import { SearchBlock } from 'components'

function Header() {
  return (
    <header className="bg-primary">
      <div className="container">
        <nav className="navbar navbar-dark">
          <div className="logo">
            <a href="/" title="Home" alt="Home Page">
              <img src={logo} className="7Peaks-logo" alt="Seven Peaks" />
            </a>
          </div>
        </nav>
        <SearchBlock />
      </div>
    </header>
  );
}

export default Header;
