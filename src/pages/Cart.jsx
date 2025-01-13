import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./style/Cart.css";
import Checkout from "./Checkout";

const Cart = () => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {state.items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {state.items.map((item) => (
              <div className="cart-item" key={item.id}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="cart-item-image"
                />
                <h2>{item.title}</h2>
                <p>${item.price.toFixed(2)}</p>
                <div className="quantity-controls">
                  <button
                    aria-label={`Decrease quantity of ${item.title}`}
                    onClick={() => dispatch({ type: "DECREASE_QUANTITY", payload: item.id })}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    aria-label={`Increase quantity of ${item.title}`}
                    onClick={() => dispatch({ type: "INCREASE_QUANTITY", payload: item.id })}
                  >
                    +
                  </button>
                  <button
                    className="remove-btn"
                    aria-label={`Remove ${item.title} from cart`}
                    onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.id })}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <Checkout />
        </>
      )}
    </div>
  );
};

export default Cart;
