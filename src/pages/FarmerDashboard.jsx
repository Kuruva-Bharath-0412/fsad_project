import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function FarmerDashboard() {
  const navigate = useNavigate();

  // 🔔 Notification count (from backend later)
  const [notifications, setNotifications] = useState(0);

  useEffect(() => {
    // Dummy for now → later connect backend
    setNotifications(3);
  }, []);

  return (
    <div className="farmer-dashboard">

      {/* Top Section */}
      <div className="farmer-top">
        <h2 className="farmer-title">👨‍🌾 Farmer Dashboard</h2>

        {/* 🔔 Notification Icon */}
        <div 
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/notifications")}
        >
          🔔 {notifications > 0 && (
            <span style={{
              color: "red",
              fontWeight: "bold",
              marginLeft: "5px"
            }}>
              {notifications}
            </span>
          )}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="farmer-content">
        <div className="farmer-grid">

          {/* Government Schemes */}
          <div
            className="farmer-card"
            onClick={() => navigate("/schemes")}
          >
            <h3>🏛 Government Schemes</h3>
            <p>Explore latest farming schemes and subsidies.</p>
          </div>

          {/* Market Prices */}
          <div
            className="farmer-card"
            onClick={() => navigate("/market-price")}
          >
            <h3>📊 Market Prices</h3>
            <p>Check current crop prices and trends.</p>
          </div>

          {/* Ask Expert */}
          <div
            className="farmer-card"
            onClick={() => navigate("/ask-expert")}
          >
            <h3>👨‍🔬 Ask Expert</h3>
            <p>Post your farming doubts and get expert advice.</p>
          </div>

          {/* Sustainable */}
          <div
            className="farmer-card"
            onClick={() => navigate("/sustainable")}
          >
            <h3>🌱 Sustainable Farming</h3>
            <p>Learn eco-friendly farming practices.</p>
          </div>

          {/* Add Crop */}
          <div
            className="farmer-card"
            onClick={() => navigate("/add-crop")}
          >
            <h3>🌾 Add Crop</h3>
            <p>Post your crops with price and quantity.</p>
          </div>

          {/* ✅ NEW: Public Requirements */}
          <div
            className="farmer-card"
            onClick={() => navigate("/farmer-requests")}
          >
            <h3>📢 Public Requirements</h3>
            <p>View requests posted by public users.</p>
          </div>

        </div>
      </div>

    </div>
  );
}

export default FarmerDashboard;