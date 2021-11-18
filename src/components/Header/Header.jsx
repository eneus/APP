import React from 'react';
import logo from 'assets/logo.svg';
import { SearchBlock } from 'components'

function Header() {
  return (
    <header className="bg-primary">
      <div className="container">
        <nav className="navbar navbar-dark">
          <div className="logo">
            <a href="/" title="Home" alt="Home Page">
              <img src={logo} className="ReactJS-logo" alt="Context Example (content.guardianapis.com)" />
            </a>
          </div>
        </nav>
        <SearchBlock />
      </div>
    </header>
  );
}

export default Header;
