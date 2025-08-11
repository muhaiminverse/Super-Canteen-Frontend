import '../dmenu.css';
import logo2 from '../assets/MU_logo.jpeg'; // Assuming you have a logo image for the menu card
const MenuCard = ({ title, price, onBuy }) => (
  <div className="menu-row">
    <img src={logo2} alt={title} className="menu-image" />
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
