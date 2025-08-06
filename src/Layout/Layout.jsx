import React, { useState } from "react";
import Cart from "../Components/Cart";
import Header from "../Components/Header";

const Layout = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (name, price, img) => {
    console.log("Adding to cart:", name, price, img); 
    setCartItems((prev) => [...prev, { name, price, img }]);
  };

  const removeFromCart = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  // Pass addToCart to children
  const childrenWithProps = React.Children.map(children, (child) =>
    React.isValidElement(child)
      ? React.cloneElement(child, { addToCart })
      : child
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {childrenWithProps}
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
};

export default Layout;
