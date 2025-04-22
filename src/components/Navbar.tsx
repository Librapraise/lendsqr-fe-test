import React from 'react';
import './Navbar.scss';
import { FaBell } from 'react-icons/fa';

const Navbar: React.FC = () => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <img src="./src/assets/lendsqrlogo.png" alt="Lendsqr Logo" className="logo" />
        <div className="search-bar">
          <input type="text" placeholder="Search for anything" />
          <button type="button">🔍</button>
        </div>
      </div>

      <div className="navbar-right">
        <a href="#" className="docs-link">Docs</a>
        <FaBell className="icon bell" />
        <img src="./src/assets/userimage.png" alt="User" className="avatar" />
        <span className="username">Adedeji ▾</span>
      </div>
    </header>
  );
};

export default Navbar;
