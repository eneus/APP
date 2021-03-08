import React from 'react';

function Footer({ children }) {
  return (
    <footer className="footer bg-primary">
      <div className="container">
        {children}
      </div>
    </footer>
  );
}

export default Footer;
