import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import UsernameMenu from "./UsernameMenu";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

const Header = () => {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  // login with Auth0
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <header className="header">
      <a href="#" className="logo">
        <img src="web3.jpeg" alt="Super Canteen Logo" />
      </a>
      <nav className="navvar hidden md:block" >
        <Link to="/" >Home</Link>
        <Link to="/" state={{ scrollTo: "about" }}>About</Link>
        <Link to="/menu" >Menu</Link>
        <Link to="/" state={{ scrollTo: "best-seller" }}>Best Seller</Link>
        <Link to="/offers" >Offers</Link>
        <Link to="/" state={{ scrollTo: "review" }}>Review</Link>
        <Link to="/" state={{ scrollTo: "contact" }}>Contact</Link>
        <Link to="/dmenu" >Buy Subscription</Link>
        <Link >
          {isAuthenticated ? <UsernameMenu />
            :
            <Button variant="ghost"
              className="text-3xl font-bold hover:text-orange-500 hover:bg-white" onClick={async () => await loginWithRedirect()}> Login </Button>}
        </Link>
      </nav>
      <div className="md:hidden">
        <MobileNav />
      </div>
      <div className="icons">
        <div className="fas fa-shopping-cart" id="cart-btn"></div>
        <div className="fas fa-bars" id="menu-btn"></div>
      </div>
    </header>
  );
};

export default Header;
