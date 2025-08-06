import React, { useState } from "react";
import '../dmenu.css';
// import MenuCard from "./components/MenuCard";
// import BuyMenuModal from "./components/BuyMenuModal";
import MenuCard from "../Components/MenuCard";
import BuyMenuModal from "../Components/BuyMenuModal";


const demoMenus = [
  { title: "Menu 1: Healthy Panda", price: 1000 },
  { title: "Menu 2: Fitness Freak", price: 800 },
  { title: "Menu 3: Giant Meal", price: 1250 },
];

const DemoMenu = ({ addToCart }) => {
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (menuName) => {
    setSelectedMenu(menuName);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedMenu(null);
    setIsModalOpen(false);
  };

  // Find the selected menu object
  const selectedMenuObj = demoMenus.find(menu => menu.title === selectedMenu);

  return (
    <section className="menu">
      <h1 className="heading">Food <span>List</span></h1>
      <div className="menu-header">
        <a className="menu-btn" href="/">Home</a>
      </div>

      <h2 className="title">Super Canteen Weekly Subscription</h2>

      <div className="menu-grid">
        {demoMenus.map((menu, index) => (
          <MenuCard
            key={index}
            title={menu.title}
            price={menu.price}
            onBuy={() => openModal(menu.title)}
          />
        ))}
      </div>

      {isModalOpen && selectedMenuObj && (
        <BuyMenuModal
          menuName={selectedMenu}
          price={selectedMenuObj.price}
          img="/web3.jpeg" // or use a specific image if you have one
          onClose={closeModal}
          addToCart={addToCart}
        />
      )}
    </section>
  );
};

export default DemoMenu;
