import React from "react";
import '../dmenu.css';

// ✅ Import the image instead of using "/web2.jpg"
import web2 from '../assets/web2.jpg';

const buyMenuData = {
    "Menu 1: Healthy Panda": {
        Sunday: [
            { name: "Paratha", img: web2 },
            { name: "Beef Curry & Rice", img: web2 },
            { name: "Burger", img: web2 },
        ],
        Monday: [
            { name: "Porridge", img: web2 },
            { name: "Fish Curry & Rice", img: web2 },
            { name: "Noodles", img: web2 },
        ],
        Tuesday: [
            { name: "Oats", img: web2 },
            { name: "Chicken Curry & Rice", img: web2 },
            { name: "Pizza", img: web2 },
        ],
        Wednesday: [
            { name: "Bread & Egg", img: web2 },
            { name: "Mixed Vegetable & Rice", img: web2 },
            { name: "Hotdog", img: web2 },
        ],
        Thursday: [
            { name: "Khichuri", img: web2 },
            { name: "Beef Curry & Rice", img: web2 },
            { name: "Shawarma", img: web2 },
        ],
    },
    "Menu 2: Fitness Freak": {
        Sunday: [
            { name: "Oats", img: web2 },
            { name: "Boiled Egg & Rice", img: web2 },
            { name: "Fruits", img: web2 },
        ],
        Monday: [
            { name: "Smoothie", img: web2 },
            { name: "Chicken Breast & Rice", img: web2 },
            { name: "Salad", img: web2 },
        ],
        Tuesday: [
            { name: "Boiled Vegetables", img: web2 },
            { name: "Fish Curry & Rice", img: web2 },
            { name: "Fruit Yogurt", img: web2 },
        ],
        Wednesday: [
            { name: "Protein Shake", img: web2 },
            { name: "Mixed Vegetable & Rice", img: web2 },
            { name: "Protein Bar", img: web2 },
        ],
        Thursday: [
            { name: "Paratha", img: web2 },
            { name: "Beef Curry & Rice", img: web2 },
            { name: "Sandwich", img: web2 },
        ],
    },
    "Menu 3: Giant Meal": {
        Sunday: [
            { name: "Paratha & Egg", img: web2 },
            { name: "Beef Curry & Polao", img: web2 },
            { name: "Burger & Fries", img: web2 },
        ],
        Monday: [
            { name: "Puri & Sabzi", img: web2 },
            { name: "Fish Fry & Rice", img: web2 },
            { name: "Pizza", img: web2 },
        ],
        Tuesday: [
            { name: "Halwa & Bread", img: web2 },
            { name: "Chicken Roast & Biriyani", img: web2 },
            { name: "Donut", img: web2 },
        ],
        Wednesday: [
            { name: "Khichuri & Egg", img: web2 },
            { name: "Beef Tehari", img: web2 },
            { name: "Momo", img: web2 },
        ],
        Thursday: [
            { name: "Milk & Cake", img: web2 },
            { name: "Mixed Curry & Rice", img: web2 },
            { name: "Fried Chicken", img: web2 },
        ],
    },
};

const BuyMenuModal = ({ menuName, price, img, onClose, addToCart }) => {
    const weeklyMenu = buyMenuData[menuName];

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close-btn" onClick={onClose}>&times;</span>
                <h2>{menuName} - Weekly Menu (Sun to Thu)</h2>

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

                <button
                    className="final-buy-btn"
                    onClick={() => {
                        addToCart(menuName, price, img);
                        alert(`Thank you for buying the ${menuName} subscription!`);
                        onClose();
                    }}
                >
                    Buy Package
                </button>
            </div>
        </div>
    );
};

export default BuyMenuModal;
