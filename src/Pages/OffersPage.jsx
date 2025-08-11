
import '../offers.css';
import web2 from '../assets/web2.jpg';

const offers = Array(12).fill().map((_, i) => ({
  name: `Thalli Item ${i + 1}`,
  price: 5.0,
  img: web2,
}));

const OffersPage = ({addToCart}) => {


  return (
    <section className="menu" id="menu">
      <h1 className="heading">Our <span>Offers</span></h1>
      <div className="menu-header">
        <a className="menu-btn" href="/">Home</a>
        <br /><br />
      </div>

      <div className="items-grid">
        {offers.map((item, idx) => (
          <div className="menu-item" key={idx}>
            <div className="img-placeholder">
              <img src={item.img} alt={item.name} />
            </div>
            <h3>{item.name}</h3>
            <p>৳{item.price.toFixed(2)}</p>
            <button className="buy-btn" onClick={() => addToCart(item.name, item.price, item.img)}>
              Buy it
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OffersPage;
