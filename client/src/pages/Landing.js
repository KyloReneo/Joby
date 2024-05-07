import logo from "../assets/images/Color logo with background.svg";
import mainImage from "../assets/images/main.svg";

const Landing = () => {
  return (
    <main>
      <nav>
        <img src={logo} alt="Joby" className="logo" />
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
        <butten className="btn btn-hero">Login/Register</butten>
      </div>
      <img src={mainImage} alt="Job hunt" className="img main-img" />
    </main>
  );
};

export default Landing;
