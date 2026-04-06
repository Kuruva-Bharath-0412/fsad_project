import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("FARMER"); // ✅ added role

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          password: password,
          role: role   // ✅ send role
        })
      });

      const result = await response.text();

      alert(result);

      // ✅ go to OTP page instead of login
      if (result === "OTP sent to email") {
        navigate("/verify");
      }

    } catch (error) {
      console.error("Error:", error);
      alert("Failed to connect to server");
    }
  };

  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h2>Create Account</h2>

      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <br /><br />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <br /><br />

        {/* ✅ ROLE DROPDOWN */}
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="FARMER">Farmer</option>
<option value="PUBLIC">Public-User</option>
<option value="EXPERT">Expert</option>
<option value="ADMIN">Admin</option>
        </select>

        <br /><br />

        <button type="submit">Sign Up</button>
      </form>

      <p
        style={{ cursor: "pointer", marginTop: "10px" }}
        onClick={() => navigate("/")}
      >
        Back to Login
      </p>
    </div>
  );
}

export default Signup;