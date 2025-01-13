// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => (
  <header className="header">
    <div className="header-container">
      <h1 className="logo">E-Shop</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
      </nav>
    </div>
  </header>
);

export default Header;

