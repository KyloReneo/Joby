import { Logo } from "../components";
import img from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page"></div>
      {/* info */}
      <div className="info">
        <h1>
          Job <span>Tracking</span> Web Application
        </h1>
        <p>
          I'm baby blackbird spyplane godard tonx, photo booth grailed biodiesel
          asymmetrical forage post-ironic four dollar toast hoodie literally tbh
          cred. Keffiyeh art party sriracha, tofu vinyl kickstarter pinterest
          cupping yr air plant shaman narwhal same. VHS cardigan squid, occupy
          street art venmo austin four dollar toast umami adaptogen.
        </p>
        <Link to="/register" className="btn btn-hero">
          Login/Register
        </Link>
      </div>
      <img src={img} alt="Job hunt" className="img main-img" />
    </Wrapper>
  );
};

export default Landing;
