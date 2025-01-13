// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="home">
    <h1>Welcome to E-Commerce Store</h1>
    <Link to="/products">Shop Now</Link>
    <p>50% festival offer</p>
    <div className="image">
      
    <img src="/images/jac.png" alt="product" width="300px" height="300px" />
    <img src="/images/tv.png" alt="product" width="250px" height="250px" />
    <img src="/images/ts.png" alt="product" width="300px" height="300px" />
    </div>
  </div>
    
);

export default Home;
