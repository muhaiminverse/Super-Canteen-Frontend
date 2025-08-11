import React, { useState } from "react";
import '../dmenu.css';
import MenuCard from "../Components/MenuCard";
import BuyMenuModal from "../Components/BuyMenuModal";

// ✅ Import a modal image (if you want a single package image)
import web3 from '../assets/MU_logo.jpeg';

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
          img={web3} // ✅ This image is passed to addToCart
          onClose={closeModal}
          addToCart={addToCart}
        />
      )}
    </section>
  );
};

export default DemoMenu;
