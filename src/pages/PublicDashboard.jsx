import { useNavigate } from "react-router-dom";

function PublicDashboard() {
  const navigate = useNavigate();

  const features = [
    { title: "Explore Farming Content", icon: "🌾", path: "/explore" },
    { title: "Benefits of Agriculture", icon: "🌱", path: "/benefits" },
    { title: "Sustainable Farming", icon: "♻", path: "/sustainable" },
    { title: "Watch Videos", icon: "🎥", path: "/videos" },
    { title: "Government Schemes", icon: "🏛", path: "/schemes" },
    { title: "Fresh Vegetables Marketplace", icon: "🛒", path: "/marketplace" },
    { title: "Join Community Discussions", icon: "💬", path: "/discussion" },

    // ✅ UPDATED HERE
    { title: "Connect with Farmers", icon: "👨‍🌾", path: "/connect-farmers" },

    { title: "View Crops", icon: "🌾", path: "/crops" }
  ];

  return (
    <div className="public-dashboard">

      {/* Top Section */}
      <div className="public-top">
        <h2 className="public-title">🌍 Public Awareness Dashboard</h2>
        <p className="public-subtitle">
          Explore farming knowledge, learn sustainable agriculture,
          and engage with the farming community.
        </p>
      </div>

      {/* Bottom Section */}
      <div className="public-content">
        <div className="public-grid">
          {features.map((item, index) => (
            <div
              key={index}
              className="public-card"
              onClick={() => navigate(item.path)}
            >
              <div className="card-icon">{item.icon}</div>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default PublicDashboard;