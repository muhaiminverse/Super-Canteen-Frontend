import { Link, useLocation } from "react-router-dom";  // if you want to use Link
import { useEffect } from "react";
import About from "./About";
import Menu from "./Menu";
import Review from "./Review";
import Contact from "./Contact";
import MenuPage from "../Pages/MenuPage";

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
          {/* If you want to scroll to menu on same page: */}
          <a href="#menu" className="btn">Get your order</a>

          {/* Or if you want to link to a different page */}
          {/* <Link to="/dmenu" className="btn">Buy Subscription</Link> */}
          <a href="/dmenu.html" className="btn">Buy Subscription</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Menu Section */}
      <section id="menu">
        <Menu addToCart={addToCart} />
        
      </section>

      {/* Best Seller Section */}
      <section id="best-seller">
        <h2 style={{ textAlign: "center", color: "rgb(221, 98, 53)" }}>Best Seller</h2>
        {/* If you want, render best sellers here or inside Menu */}
        {/* Example: */}
        {/* <BestSeller addToCart={addToCart} /> */}
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
