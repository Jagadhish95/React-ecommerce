// src/pages/ProductList.jsx
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import axios from "axios";
import "./style/ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const { state, dispatch } = useContext(CartContext);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false); // Data loaded
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false); // Stop loading even if there’s an error
      });
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div> {/* Optional: Add CSS spinner */}
        <p>Please wait, loading...</p>
      </div>
    );
  }

  return (
    <div className="product-list">
      {products.map((product) => {
        const itemInCart = state.items.find((item) => item.id === product.id);

        return (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} className="product-image" />
            <h2>{product.title}</h2>
            <p>${product.price.toFixed(2)}</p>
            <div className="product-actions">
              <Link to={`/products/${product.id}`} className="view-details-btn">
                View Details
              </Link>
              <div className="cart-buttons">
                {!itemInCart ? (
                  <button
                    onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
                  >
                    Add to Cart
                  </button>
                ) : (
                  <div>
                    <button
                      onClick={() =>
                        dispatch({ type: "DECREASE_QUANTITY", payload: product.id })
                      }
                    >
                      -
                    </button>
                    <span>{itemInCart.quantity}</span>
                    <button
                      onClick={() =>
                        dispatch({ type: "INCREASE_QUANTITY", payload: product.id })
                      }
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
