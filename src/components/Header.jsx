// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/img/logo.png'; // 画像をインポート

const Header = () => {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo-container">
          <Link className="header-logo" to="/">
            <img src={logoImg} alt="Logo" className="logo" />
          </Link>
        </div>
        <div className="title-container">
          <h1>Santa Hirai</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;