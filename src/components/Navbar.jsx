import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const role = localStorage.getItem("userRole");

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    navigate("/login");
  };

  return (
    <nav className="navbar">

      <div className="nav-left"></div>

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

        {/* FARMER NAVBAR */}
        {role === "farmer" && (
          <>
            <Link to="/farmer">Dashboard</Link>
            <Link to="/schemes">Schemes</Link>
            <Link to="/market-price">Market</Link>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </>
        )}

        {/* PUBLIC NAVBAR */}
        {role === "public" && (
          <>
            <Link to="/public">Dashboard</Link>
            <Link to="/explore">Explore</Link>
            <Link to="/marketplace">Fresh Vegetables</Link>
            <Link to="/connect">Connect</Link>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </>
        )}

        {/* EXPERT NAVBAR */}
        {role === "expert" && (
          <>
            <Link to="/expert">Dashboard</Link>
            <Link to="/view-queries">Queries</Link>
            <Link to="/upload-guides">Upload Guides</Link>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </>
        )}

      </div>

    </nav>
  );
}

export default Navbar;