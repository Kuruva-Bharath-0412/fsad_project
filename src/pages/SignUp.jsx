import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("FARMER");

  const navigate = useNavigate();

  // ✅ PASSWORD VALIDATION FUNCTION
  const isValidPassword = (password) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    return regex.test(password);
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    // ✅ CHECK PASSWORD BEFORE SENDING
    if (!isValidPassword(password)) {
      alert(
        "Password must be at least 8 characters and include:\n• 1 uppercase\n• 1 lowercase\n• 1 number\n• 1 special character"
      );
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password,
          role
        })
      });

      const result = await response.text();
      alert(result);

      localStorage.setItem("email", email);
      navigate("/verify");

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

        {/* ✅ PASSWORD RULE HINT */}
        <p style={{ fontSize: "12px", color: "gray" }}>
          Password must be 8+ chars with uppercase, lowercase, number & special character
        </p>

        <br />

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