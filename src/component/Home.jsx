import { Link } from "react-router-dom";
import HeroSection from "./HeroSection"; // import HeroSection here
import SecondHome from "./SecondHome";

const Home = () => {
  return (
    <>
      <nav className="container">
        <div className="logo">
          <img src="/Image/brand_logo.png" alt="logo" />
        </div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Location</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </nav>
      {/* Add HeroSection below nav */}
      <HeroSection />
      
      <SecondHome />
    </>
  );
};

export default Home;


