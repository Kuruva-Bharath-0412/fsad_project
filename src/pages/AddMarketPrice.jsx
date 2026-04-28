import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddMarketPrice() {
  const [crop, setCrop] = useState("");
  const [price, setPrice] = useState("");

  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  // 🔒 Only admin access
  if (role !== "admin") {
    return <h3 style={{ padding: "40px" }}>❌ Access Denied</h3>;
  }

  const handleSubmit = () => {
    if (!crop || !price) {
      alert("Please fill all fields");
      return;
    }

    fetch("http://localhost:8080/api/market", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        cropName: crop,
        price: price
      })
    })
      .then(res => {
        if (!res.ok) throw new Error("Error");
        return res.json();
      })
      .then(() => {
        alert("✅ Market price added!");
        setCrop("");
        setPrice("");
        navigate("/market-price"); // redirect
      })
      .catch(err => {
        console.error(err);
        alert("❌ Failed to add");
      });
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>➕ Add Market Price</h2>

      <input
        placeholder="Crop Name"
        value={crop}
        onChange={(e) => setCrop(e.target.value)}
      />
      <br /><br />

      <input
        placeholder="Price"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <br /><br />

      <button onClick={handleSubmit}>Add Price</button>
    </div>
  );
}

export default AddMarketPrice;