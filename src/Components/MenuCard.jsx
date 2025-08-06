import React from "react";
import '../dmenu.css';
const MenuCard = ({ title, price, onBuy }) => (
  <div className="menu-row">
    <img src="/web3.jpeg" alt={title} className="menu-image" />
    <div className="menu-info">
      <h2>{title}</h2>
      <div className="price">৳{price}</div>
      <button className="buy-btn" onClick={onBuy}>
        Buy Menu
      </button>
    </div>
  </div>
);

export default MenuCard;
