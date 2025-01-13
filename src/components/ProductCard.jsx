// src/components/ProductCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => (
  <div style={{ border: "1px solid #ccc", padding: "16px", margin: "16px" }}>
    <img src={product.image} alt={product.title} style={{ height: "150px" }} />
    <h2>{product.title}</h2>
    <p>${product.price}</p>
    <Link to={`/products/${product.id}`}>View Details</Link>
  </div>
);

export default ProductCard;
