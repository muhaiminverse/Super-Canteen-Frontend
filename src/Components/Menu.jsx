import veg_thai from '../assets/veg_thai.jpg';
import burger from '../assets/burger.webp';
import FishThaliFeatured from '../assets/Fish-Thali-Featured.jpg';
import chai from '../assets/chai.jpeg';
import lassi from '../assets/juice.avif';
import singara from '../assets/Singara.jpg';

const menuItems = [
    { name: 'Veg Thali',    img: veg_thai, price: 15.99 },
    { name: 'Singara',      img: singara, price: 13.23 },
    { name: 'Fish Thali',   img: FishThaliFeatured, price: 2.19 },
    { name: 'Chai',         img: chai, price: 6.94 },
    { name: 'Mango Lassi',  img: lassi, price: 5.3 },
    { name: 'Burger',       img: burger, price: 12.03 },
];

const Menu = ({ addToCart }) => (
    <section className="menu" id="best-seller">
        <h1 className="heading">Best <span className="spa">Seller</span></h1>
        <div className="box-container">
            {menuItems.map((item, index) => (
                <div className="box" key={index}>
                    <img src={item.img} alt={item.name} />
                    <h3>{item.name}</h3>
                    <div className="price">৳{item.price}<span>16.99</span></div>
                    <button className="buy-btn" onClick={() => addToCart(item.name, item.price, item.img)}>
                        Buy it
                    </button>
                </div>
            ))}
        </div>
    </section>
);

export default Menu;
