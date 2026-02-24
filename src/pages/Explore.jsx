import farmImg from "../assets/farmer.jpg";

function Explore() {
  return (
    <div className="explore-page">

      <h1 className="explore-title">
        🌾 Why Farming is the Backbone of Our Nation
      </h1>

      <img src={farmImg} alt="Farming" className="explore-image" />

      <div className="explore-grid">

        <div className="explore-card">
          <h3>🌍 Food Security</h3>
          <p>
            Farming ensures that every household has access to fresh and
            nutritious food. Without agriculture, food supply chains collapse.
          </p>
        </div>

        <div className="explore-card">
          <h3>👨‍🌾 Employment Generation</h3>
          <p>
            Agriculture provides employment to millions of people,
            especially in rural areas. It strengthens families and the economy.
          </p>
        </div>

        <div className="explore-card">
          <h3>🏭 Supports Industries</h3>
          <p>
            Industries like textiles, food processing, and dairy
            depend directly on agricultural raw materials.
          </p>
        </div>

        <div className="explore-card">
          <h3>🌱 Environmental Balance</h3>
          <p>
            Sustainable farming maintains soil fertility,
            biodiversity, and reduces pollution.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Explore;