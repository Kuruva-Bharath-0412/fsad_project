import { useNavigate } from "react-router-dom";

function FarmerDashboard() {
  const navigate = useNavigate();

  return (
    <div className="farmer-dashboard">

      {/* Top Section */}
      <div className="farmer-top">
        <h2 className="farmer-title">👨‍🌾 Farmer Dashboard</h2>
      </div>

      {/* Bottom Section */}
      <div className="farmer-content">
        <div className="farmer-grid">

          <div
            className="farmer-card"
            onClick={() => navigate("/schemes")}
          >
            <h3>🏛 Government Schemes</h3>
            <p>Explore latest farming schemes and subsidies.</p>
          </div>

          <div
            className="farmer-card"
            onClick={() => navigate("/market-price")}
          >
            <h3>📊 Market Prices</h3>
            <p>Check current crop prices and trends.</p>
          </div>

          <div
            className="farmer-card"
            onClick={() => navigate("/ask-expert")}
          >
            <h3>👨‍🔬 Ask Expert</h3>
            <p>Post your farming doubts and get expert advice.</p>
          </div>

          <div
            className="farmer-card"
            onClick={() => navigate("/sustainable")}
          >
            <h3>🌱 Sustainable Farming</h3>
            <p>Learn eco-friendly farming practices.</p>
          </div>

        </div>
      </div>

    </div>
  );
}

export default FarmerDashboard;