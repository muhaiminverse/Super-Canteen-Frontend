import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { sendCartToBackend } from "../api/CartApi";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Cart = ({ cartItems, removeFromCart }) => {
  const { getAccessTokenSilently } = useAuth0();

  const handleStripePayment = async () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    try {
      
      const accessToken = await getAccessTokenSilently();
      await createCheckoutSession(cartItems, accessToken);
    } catch (error) {
      alert("Stripe payment failed.");
    }
  };

  // Pay and clear cart
  const payNow = async () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    try {
      const accessToken = await getAccessTokenSilently();
      // Only send totalPrice to backend
      const payload = { totalPrice: total };
      console.log(JSON.stringify(payload));
      await sendCartToBackend(payload, accessToken);
      alert(`Thank you! Your total is $${total.toFixed(2)}. Payment successful and sent to backend.`);
      // Optionally, clear cart here
    } catch (error) {
      alert("Failed to send cart to backend.");
    }
  };

  // Send cart items to backend and redirect to Stripe
  const createCheckoutSession = async (cartItems, accessToken) => {
    // Transform cart items to include quantity for Stripe
    const itemsWithQuantity = cartItems.map(item => ({
      name: item.name,
      price: item.price,
      quantity: 1, // Add quantity field - assuming each item in cart is 1 quantity
      img: item.img
    }));
    
    const response = await fetch(`${API_BASE_URL}/api/stripe/create-checkout-session`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ items: itemsWithQuantity }),
    });
    const data = await response.json();
    window.location.href = data.url; // Redirect to Stripe Checkout
  };


  const handleBoth = async () => {
  await payNow();
  await handleStripePayment();
};

  return (
    <div className="cart hidden md:block" style={{ position: "fixed", top: 80, right: 20, width: 250, background: "#fff8f0", border: "2px solid #e67e22", borderRadius: 10, padding: 15, boxShadow: "0 4px 8px rgba(230, 126, 34, 0.3)", zIndex: 1000 }}>
      <h2 style={{ color: "#e67e22", fontSize: "1.2rem", marginBottom: 10 }}>Your Cart</h2>
      <ul id="cart-items" style={{ listStyle: "none", paddingLeft: 0 }}>
        {cartItems.length === 0 && <li>No items in cart</li>}
        {cartItems.map((item, index) => (
          <li key={index} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10, paddingBottom: 10, borderBottom: "1px solid #f5d7b1" }}>
            <img src={item.img} alt={item.name} style={{ width: 40, height: 40, objectFit: "cover", borderRadius: 5 }} />
            <div>
              <strong>{item.name}</strong><br />
              <span>${item.price.toFixed(2)}</span>
            </div>
            <span onClick={() => removeFromCart(index)} style={{ cursor: "pointer", color: "red", fontWeight: "bold" }}>&times;</span>
          </li>
        ))}
      </ul>
      <button
        className="btn"
        onClick={handleBoth}
        style={{
          width: "100%",
          textAlign: "center",
          marginTop: "10px",
          padding: "0.7rem",
          backgroundColor: "#635bff",
          color: "#fff",
          borderRadius: "5px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Pay with Stripe
      </button>
    </div>
  );
};

export default Cart;