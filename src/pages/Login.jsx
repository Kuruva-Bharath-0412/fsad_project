import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/mainpagepic.jpg";

function Login() {
  const [role, setRole] = useState("farmer");
  const [showPassword, setShowPassword] = useState(false);

  // ✅ ADDED
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://fsad-project-backend-bgnq.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
  email: email,
  password: password,
  role: role.toUpperCase() // ✅ ADD THIS
})
      });

      const result = await response.text();
      alert(result);

     if (result === "Login successful") {

  // ✅ STORE EMAIL (VERY IMPORTANT)
  localStorage.setItem("email", email);

  // OPTIONAL (store role also)
  localStorage.setItem("role", role);

  // ✅ NAVIGATION
  if (role === "farmer") navigate("/farmer");
  else if (role === "admin") navigate("/admin");
  else if (role === "expert") navigate("/expert");
  else navigate("/public");
}

    } catch (error) {
      console.error(error);
      alert("Error connecting to backend");
    }
  };

  return (
    <>
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

              {/* ✅ FIXED EMAIL INPUT */}
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              {/* ✅ FIXED PASSWORD INPUT */}
              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "🙈" : "👁"}
                </span>
              </div>

              <button type="submit">Login</button>

              <button
                type="button"
                onClick={() => navigate("/signup")}
              >
                Create Account
              </button>

            </form>
          </div>

        </div>
      </div>

      {/* FEEDBACK SECTION */}
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