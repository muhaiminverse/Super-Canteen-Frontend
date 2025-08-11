

const MenuItem = ({ item, addToCart }) => {
  const { name, price, img } = item;

  return (
    <div className="menu-item">
      <div className="img-placeholder">
        <img src={img} alt={name} />
      </div>
      <h3>{name}</h3>
      <p>৳{price.toFixed(2)}</p>
      <button className='buy-btn' onClick={() => addToCart(item.name, item.price, item.img)}>Buy</button>
    </div>
  );
};

export default MenuItem;
