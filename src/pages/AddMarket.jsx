import { useState } from "react";

function AddMarket() {
  const [crop, setCrop] = useState("");
  const [price, setPrice] = useState("");

  const handleAdd = () => {
    if (!crop || !price) return alert("Fill all fields");

    fetch("http://localhost:8080/api/market", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ cropName: crop, price })
    }).then(() => {
      alert("✅ Added Successfully!");
      setCrop("");
      setPrice("");
    });
  };

  return (
    <div style={pageStyle}>

      <div style={cardStyle}>
        <h2 style={titleStyle}>📊 Add Market Price</h2>

        <input
          placeholder="Crop Name"
          value={crop}
          onChange={(e) => setCrop(e.target.value)}
          style={inputStyle}
        />

        <input
          placeholder="Price (₹)"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={inputStyle}
        />

        <button onClick={handleAdd} style={buttonStyle}>
          Add Price
        </button>
      </div>

    </div>
  );
}

/* ===== STYLES ===== */

const pageStyle = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(135deg, #667eea, #764ba2)"
};

const cardStyle = {
  background: "white",
  padding: "40px",
  borderRadius: "20px",
  width: "350px",
  boxShadow: "0 15px 40px rgba(0,0,0,0.3)",
  textAlign: "center"
};

const titleStyle = {
  marginBottom: "20px",
  color: "#333"
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "10px",
  border: "1px solid #ccc",
  fontSize: "14px"
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  borderRadius: "10px",
  border: "none",
  background: "linear-gradient(to right, #ff416c, #ff4b2b)",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer"
};

export default AddMarket;