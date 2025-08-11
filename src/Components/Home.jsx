import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Menu from "./Menu";
import Review from "./Review";
import Contact from "./Contact";
import MenuPage from "../Pages/MenuPage";
import About from "./About";
import web2 from '../assets/web2.jpg';
import { Button } from "./ui/button";
const Home = ({ addToCart }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.state]);

  return (
    <div>
      {/* Home Section */}
      <section className="home" id="home">
        <div className="content">
          <h3>SUPER CANTEEN</h3>
          <p>Good food fuels your brain, helping you focus longer and think clearer.</p>
          <a href="#menu" className="btn">Get your order</a>
          <Link to="/dmenu"  className="btn">Buy Subscription</Link>
        </div>
      </section>

      {/* About Section */}

      <section className="about" id="about">
        <h1 className="heading"><span className="span">about</span> us</h1>
        <div className="row">
          <div className="image">
            <img src={web2} alt="About Us" />
          </div>
          <div className="content">
            <h3>Affordable, Tasty, and Nutritious – The Ultimate Uni Meal Solution</h3>
            <p>Quick, delicious, and packed with energy—perfect for those back-to-back lectures.</p>
            <button className="buy-btn" ><Link to="/menu" >See Our Menu</Link></button>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu">
        <Menu addToCart={addToCart} />
      </section>

      {/* Review Section */}
      <section id="review">
        <Review />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
