import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const role = localStorage.getItem("role");
  const email = localStorage.getItem("email");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="navbar">

      <div className="nav-title">
        🌾 AgriConnect
      </div>

      <div className="nav-links">

        {/* LOGIN PAGE BUTTON */}
        {location.pathname === "/login" && (
          <Link to="/explore" className="explore-btn">
            Explore
          </Link>
        )}

        {/* FARMER */}
        {role === "farmer" && (
          <>
            <Link to="/farmer">Dashboard</Link>
            <Link to="/schemes">Schemes</Link>
            <Link to="/market-price">Market</Link>
          </>
        )}

        {/* PUBLIC */}
        {role === "public" && (
          <>
            <Link to="/public">Dashboard</Link>
            <Link to="/explore">Explore</Link>
            <Link to="/marketplace">Fresh Vegetables</Link>
            <Link to="/connect">Connect</Link>
          </>
        )}

        {/* EXPERT */}
        {role === "expert" && (
          <>
            <Link to="/expert">Dashboard</Link>
            <Link to="/view-queries">Queries</Link>
            <Link to="/upload-guides">Upload Guides</Link>
          </>
        )}

        {/* ADMIN (optional if you have) */}
        {role === "admin" && (
          <>
            <Link to="/admin">Dashboard</Link>
          </>
        )}

        {/* 🔥 COMMON FOR ALL ROLES */}
        {email && (
          <>
            <span style={{ marginLeft: "20px", color: "white", fontWeight: "500" }}>
              👤 {email}
            </span>

            <button
              onClick={handleLogout}
              className="logout-btn"
              style={{ marginLeft: "10px" }}
            >
              Logout
            </button>
          </>
        )}

      </div>
    </nav>
  );
}

export default Navbar;