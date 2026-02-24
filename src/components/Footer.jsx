import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* ABOUT SECTION */}
        <div className="footer-section">
          <h2 className="footer-logo">🌾 AgriConnect</h2>
          <p>
            A platform dedicated to inspiring society about farming,
            empowering farmers, and connecting agriculture with
            various sectors for sustainable growth.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/farmer")}>Farmer Dashboard</li>
            <li onClick={() => navigate("/public")}>Public Section</li>
            <li onClick={() => navigate("/expert")}>Expert Section</li>
          </ul>
        </div>

        {/* ROLES */}
        <div className="footer-section">
          <h3>User Roles</h3>
          <ul>
            <li>👨‍🌾 Farmers</li>
            <li>🌍 Public Users</li>
            <li>👩‍🔬 Agricultural Experts</li>
            <li>🛠 Admin</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: support@agriconnect.com</p>
          <p>Phone: +91 98765 43210</p>
          <button
            className="contact-btn"
            onClick={() => navigate("/contact")}
          >
            📞 Contact Us
          </button>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} AgriConnect | 
        Developed for FSAD-PS17 Academic Project
      </div>
    </footer>
  );
}

export default Footer;