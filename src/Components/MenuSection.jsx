import MenuItem from './MenuItem';

const MenuSection = ({ id, title, items, addToCart }) => {
  return (
    <div className="menu-section" id={id}>
      <h2>{title}</h2>
      <div className="items-grid">
        {items.map((item, index) => (
          <MenuItem key={index} item={item} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
