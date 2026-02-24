import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/mainpagepic.jpg";

function Login() {
  const [role, setRole] = useState("farmer");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const username = e.target[1].value;
    const password = e.target[2].value;

    if (username === "user" && password === "1234") {
      localStorage.setItem("userRole", role);
      navigate(`/${role}`);
    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
    <>
      {/* ================= LOGIN SECTION ================= */}
      <div
        className="login-page split-layout"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="overlay"></div>

        <div className="split-container">

          {/* LEFT CONTENT */}
          <div className="left-content">
            <h1>🌱 AgriConnect</h1>
            <p className="tagline">
              Inspiring Society About Farming & Empowering Farmers
            </p>

            <div className="feature-box">
              🌿 Sustainable farming practices
            </div>

            <div className="feature-box">
              👨‍🌾 Connect with agricultural experts
            </div>

            <div className="feature-box">
              📈 Access government schemes & market prices
            </div>
          </div>

          {/* RIGHT LOGIN BOX */}
          <div className="login-box">
            <h2>Welcome Back</h2>
            <p className="subtitle">
              Sign in to access your dashboard
            </p>

            <form onSubmit={handleLogin}>
              <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="farmer">👨‍🌾 Farmer</option>
                <option value="public">🌍 Public-User</option>
                <option value="expert">👩‍🔬 Expert</option>
                <option value="admin">🛠 Admin</option>
              </select>

              <input type="text" placeholder="Enter your username" required />

              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  required
                />
                <span
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "🙈" : "👁"}
                </span>
              </div>

              <button type="submit">Sign In</button>
            </form>

            <p className="demo-text">
              Demo credentials: user / 1234
            </p>
          </div>

        </div>
      </div>

      {/* ================= FEEDBACK SECTION ================= */}
      <div className="feedback-green-section">
        <div className="feedback-wrapper">
          <h2>🌟 What Our Users Say</h2>

          <div className="feedback-grid">

            <div className="feedback-box">
              <div className="stars">★★★★★</div>
              <p>
                AgriConnect helped me reach buyers directly and increase my crop sales without middlemen.
              </p>
              <span>- Bharath, Farmer</span>
            </div>

            <div className="feedback-box">
              <div className="stars">★★★★★</div>
              <p>
                Expert guidance and farming tips are extremely useful for modern agriculture.
              </p>
              <span>- Priya, Public User</span>
            </div>

            <div className="feedback-box">
              <div className="stars">★★★★☆</div>
              <p>
                A powerful initiative to digitally empower farmers and promote sustainable farming.
              </p>
              <span>- Dr. Kumar, Expert</span>
            </div>

            <div className="feedback-box">
              <div className="stars">★★★★★</div>
              <p>
                Simple, clean interface with valuable real-time agricultural updates.
              </p>
              <span>- Ramesh, Farmer</span>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Login;