import React, { useState } from 'react';
import './Navbar.scss';
import { FaBell, FaBars } from 'react-icons/fa';

interface NavbarProps {
  onToggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onToggleSidebar }) => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <FaBars className="menu-icon" onClick={onToggleSidebar} />
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
