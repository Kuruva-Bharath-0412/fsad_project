import mainImg from "../assets/mainpagepic.jpg";

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${mainImg})` }}
    >
      <div className="hero-content">
        <h1>Empowering Farmers. Inspiring Society.</h1>
        <p>
          Connecting farmers with industries, experts, and government support
          for sustainable agricultural growth.
        </p>
        <button>Explore Now</button>
      </div>
    </section>
  );
}

export default Hero;