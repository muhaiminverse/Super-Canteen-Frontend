import React from 'react';
import MenuSection from '../Components/MenuSection.jsx';
import '../menu.css';

const sections = [
  {
    id: 'thalli',
    title: 'Thalli',
    items: Array(12).fill().map((_, i) => ({
      name: `Thalli Item ${i + 1}`,
      price: 5.0,
      img: '/web2.jpg',
    })),
  },
  {
    id: 'snacks',
    title: 'Snacks',
    items: Array(12).fill().map((_, i) => ({
      name: `Snack Item ${i + 1}`,
      price: 2.0,
      img: '/Singara.jpg',
    })),
  },
  {
    id: 'beverages',
    title: 'Beverages',
    items: Array(12).fill().map((_, i) => ({
      name: `Beverage ${i + 1}`,
      price: 1.5,
      img: '/chai.jpeg',
    })),
  },
  {
    id: 'other-food',
    title: 'Other Food',
    items: Array(12).fill().map((_, i) => ({
      name: `Other Food ${i + 1}`,
      price: 3.0,
      img: '/kichuri.webp',
    })),
  },
];

const MenuPage = ({ addToCart }) => {
  return (
    <section className="menu">
      <h1 className="heading">Our <span>Menu</span></h1>
      <div className="menu-header">
        <a className="menu-btn" href="/">Home</a>
        {sections.map(({ id }) => (
          <a key={id} className="menu-btn" href={`#${id}`}>{id}</a>
        ))}
      </div>

      {sections.map(section => (
        <MenuSection
          key={section.id}
          id={section.id}
          title={section.title}
          items={section.items}
          addToCart={addToCart}
        />
      ))}
    </section>
  );
};

export default MenuPage;
