const menuItems = [
    { name: 'Veg Thali', img: 'web1.webp', price: 15.99 },
    { name: 'Singara', img: 'web1.webp', price: 15.99 },
    { name: 'Fish Thali', img: 'web1.webp', price: 15.99 },
    { name: 'Chai', img: 'web1.webp', price: 15.99 },
    { name: 'Mango Lassi', img: 'web1.webp', price: 15.99 },
    { name: 'Burger', img: 'web1.webp', price: 15.99 },
];

const Menu = ({ addToCart }) => (
    <section className="menu" id="best-seller">
        <h1 className="heading">Best <span className="spa">Seller</span></h1>
        <div className="box-container">
            {menuItems.map((item, index) => (
                <div className="box" key={index}>
                    <img src={item.img} alt={item.name} />
                    <h3>{item.name}</h3>
                    <div className="price">${item.price}<span>20.99</span></div>
                    <button className="buy-btn" onClick={() => addToCart(item.name, item.price, item.img)}>
                        Buy it
                    </button>
                    
                </div>
            ))}
        </div>
    </section>
);

export default Menu;
