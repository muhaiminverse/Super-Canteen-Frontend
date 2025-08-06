import React from "react";
import '../dmenu.css';
const buyMenuData = {
    "Menu 1: Healthy Panda": {
        Sunday: [
            { name: "Paratha", img: "/web2.jpg" },
            { name: "Beef Curry & Rice", img: "/web2.jpg" },
            { name: "Burger", img: "/web2.jpg" },
        ],
        Monday: [
            { name: "Porridge", img: "/web2.jpg" },
            { name: "Fish Curry & Rice", img: "/web2.jpg" },
            { name: "Noodles", img: "/web2.jpg" },
        ],
        Tuesday: [
            { name: "Oats", img: "/web2.jpg" },
            { name: "Chicken Curry & Rice", img: "/web2.jpg" },
            { name: "Pizza", img: "/web2.jpg" },
        ],
        Wednesday: [
            { name: "Bread & Egg", img: "/web2.jpg" },
            { name: "Mixed Vegetable & Rice", img: "/web2.jpg" },
            { name: "Hotdog", img: "/web2.jpg" },
        ],
        Thursday: [
            { name: "Khichuri", img: "/web2.jpg" },
            { name: "Beef Curry & Rice", img: "/web2.jpg" },
            { name: "Shawarma", img: "/web2.jpg" },
        ],
    },
    "Menu 2: Fitness Freak": {
        Sunday: [
            { name: "Oats", img: "/web2.jpg" },
            { name: "Boiled Egg & Rice", img: "/web2.jpg" },
            { name: "Fruits", img: "/web2.jpg" },
        ],
        Monday: [
            { name: "Smoothie", img: "/web2.jpg" },
            { name: "Chicken Breast & Rice", img: "/web2.jpg" },
            { name: "Salad", img: "/web2.jpg" },
        ],
        Tuesday: [
            { name: "Boiled Vegetables", img: "/web2.jpg" },
            { name: "Fish Curry & Rice", img: "/web2.jpg" },
            { name: "Fruit Yogurt", img: "/web2.jpg" },
        ],
        Wednesday: [
            { name: "Protein Shake", img: "/web2.jpg" },
            { name: "Mixed Vegetable & Rice", img: "/web2.jpg" },
            { name: "Protein Bar", img: "/web2.jpg" },
        ],
        Thursday: [
            { name: "Paratha", img: "/web2.jpg" },
            { name: "Beef Curry & Rice", img: "/web2.jpg" },
            { name: "Sandwich", img: "/web2.jpg" },
        ],
    },
    "Menu 3: Giant Meal": {
        Sunday: [
            { name: "Paratha & Egg", img: "/web2.jpg" },
            { name: "Beef Curry & Polao", img: "/web2.jpg" },
            { name: "Burger & Fries", img: "/web2.jpg" },
        ],
        Monday: [
            { name: "Puri & Sabzi", img: "/web2.jpg" },
            { name: "Fish Fry & Rice", img: "/web2.jpg" },
            { name: "Pizza", img: "/web2.jpg" },
        ],
        Tuesday: [
            { name: "Halwa & Bread", img: "/web2.jpg" },
            { name: "Chicken Roast & Biriyani", img: "/web2.jpg" },
            { name: "Donut", img: "/web2.jpg" },
        ],
        Wednesday: [
            { name: "Khichuri & Egg", img: "/web2.jpg" },
            { name: "Beef Tehari", img: "/web2.jpg" },
            { name: "Momo", img: "/web2.jpg" },
        ],
        Thursday: [
            { name: "Milk & Cake", img: "/web2.jpg" },
            { name: "Mixed Curry & Rice", img: "/web2.jpg" },
            { name: "Fried Chicken", img: "/web2.jpg" },
        ],
    },
};

const BuyMenuModal = ({ menuName, price, img, onClose, addToCart }) => {
    const weeklyMenu = buyMenuData[menuName];

    const renderTable = () => (
        <table className="menu-table">
            <thead>
                <tr>
                    <th>Day</th>
                    <th>Breakfast</th>
                    <th>Lunch</th>
                    <th>Snacks</th>
                </tr>
            </thead>
            <tbody>
                {Object.entries(weeklyMenu).map(([day, meals], index) => (
                    <tr key={index}>
                        <td>{day}</td>
                        {meals.map((meal, i) => (
                            <td key={i}>
                                <div className="meal-cell">
                                    <img src={meal.img} alt={meal.name} />
                                    <span>{meal.name}</span>
                                </div>
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close-btn" onClick={onClose}>&times;</span>
                <h2>{menuName} - Weekly Menu (Sun to Thu)</h2>
                {renderTable()}
                <button className="final-buy-btn" onClick={() => {
                    addToCart(menuName, price, img);
                    alert(`Thank you for buying the ${menuName} subscription!`);
                    onClose();
                }}>
                    Buy Package
                </button>
            </div>
        </div>
    );
};

const DemoMenu = ({ addToCart }) => {
    return (
        <div>
            {Object.keys(buyMenuData).map((menuName) => (
                <div key={menuName} className="menu-card">
                    <h3>{menuName}</h3>
                    <BuyMenuModal menuName={menuName} addToCart={addToCart} />
                </div>
            ))}
        </div>
    );
};

export default DemoMenu;
