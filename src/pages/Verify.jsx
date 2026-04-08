import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Verify() {
  const [email] = useState(localStorage.getItem("email") || "");
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleVerify = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          otp
        })
      });

      const result = await response.text();
      alert(result);

      if (result === "Account verified") {
        navigate("/login");
      }

    } catch (error) {
      console.error(error);
      alert("Error verifying OTP");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Verify OTP</h2>

      <p><b>Email:</b> {email}</p>

      <form onSubmit={handleVerify}>
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
        />

        <br /><br />

        <button type="submit">Verify</button>
      </form>
    </div>
  );
}

export default Verify;