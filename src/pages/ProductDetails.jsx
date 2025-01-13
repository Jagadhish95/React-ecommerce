import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import axios from "axios";
import "./style/ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { state, dispatch } = useContext(CartContext);
  const itemInCart = state.items.find((item) => item.id === parseInt(id));

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
      setProduct(response.data);
    });
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-details">
      <img className="product-image" src={product.image} alt={product.title} />
      <h1>{product.title}</h1>
      <p>${product.price}</p>
      <p>{product.description}</p>
      <div>
        {!itemInCart ? (
          <button
            onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
          >
            Add to Cart
          </button>
        ) : (
          <div>
            <button onClick={() => dispatch({ type: "DECREASE_QUANTITY", payload: product.id })}>
              -
            </button>
            <span>{itemInCart.quantity}</span>
            <button onClick={() => dispatch({ type: "INCREASE_QUANTITY", payload: product.id })}>
              +
            </button>
            <button className="remove-btn"
              onClick={() =>
                dispatch({ type: "REMOVE_FROM_CART", payload: product.id })
              }
            >
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
