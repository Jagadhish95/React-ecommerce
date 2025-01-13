// src/pages/Checkout.jsx
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Checkout = () => {
  const { state } = useContext(CartContext);

  const totalAmount = state.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    alert("Thank you for your purchase!");
  };

  return (
    <div className="check">
      
      {state.items.length === 0 ? (
        <p>Your cart is empty. Add some products to proceed to checkout.</p>
      ) : (
        <div>
          <h2>Order Summary</h2>
          <ul>
            {state.items.map((item) => (
              <li key={item.id}>
                {item.title} - {item.quantity} x ${item.price.toFixed(2)}
              </li>
            ))}
          </ul>
          <h3>Total: ${totalAmount.toFixed(2)}</h3>
          <button
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
