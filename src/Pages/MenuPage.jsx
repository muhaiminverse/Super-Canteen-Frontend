import MenuSection from '../Components/MenuSection.jsx';
import '../menu.css';

import Bun from '../assets/bun.jpeg';
import chocolate from '../assets/chocolet.jpeg';
import icecreame from '../assets/icecreame.jpeg';

import Singara from '../assets/Singara.jpg';
import chai from '../assets/chai.jpeg';
import coffee from '../assets/coffee.jpeg';
import Cappuccino from '../assets/mocha.jpeg';

import chips from '../assets/chips.jpeg';
import sandwich from '../assets/candwish.jpeg';
import samosa from '../assets/burger.webp';

import web2 from '../assets/web2.jpg';
import kichuri from '../assets/kichuri.webp';
import dalparata from '../assets/dalparata.jpeg';
import FishThai from '../assets/Fish-Thali-Featured.jpg';
import Rice from '../assets/vatt.jpeg';
import VegThai from '../assets/veg_parata.jpeg';



const sections = [
  {
    id: 'thalli',
    title: 'Thalli',
    items: [
      { name: 'Dal Parata', price: 35.0, img: dalparata },
      { name: 'Fish Thai', price: 63.0, img: FishThai },
      { name: 'Kichuri', price: 54.5, img: kichuri },
      { name: 'Thalli parata', price: 65.5, img: web2 },
      { name: 'Rice', price: 5.8, img: Rice },
      { name: 'Veg Thai', price: 6.2, img: VegThai },
    ],
  },
  {
    id: 'snacks',
    title: 'Snacks',
    items: [
      { name: 'Singara', price: 10.0, img: Singara },
      { name: 'Sandwich', price: 22.5, img: sandwich },
      { name: 'Chips', price: 12.2, img: chips },
      { name: 'Burger', price: 20.5, img: samosa },
    ],
  },
  {
    id: 'beverages',
    title: 'Beverages',
    items: [
      { name: 'Chai', price: 5.5, img: chai },
      { name: 'Coffee', price: 10.5, img: coffee },
      { name: 'Cappuccino', price: 100.5, img: Cappuccino },
    ],
  },
  {
    id: 'other-food',
    title: 'Other Food',
    items: [
      { name: 'Chocolate', price: 30.0, img: chocolate },
      { name: 'Bun', price: 5.5, img: Bun },
      { name: 'Ice creame', price: 33.2, img: icecreame },
    ],
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
