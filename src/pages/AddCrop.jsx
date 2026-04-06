import { useState } from "react";

function AddCrop() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = localStorage.getItem("email");

    if (!email) {
      alert("Please login first");
      return;
    }

    if (!name || !price || !quantity) {
      alert("Please fill all fields");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/add-crop", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name,
          price: parseFloat(price),      // ✅ FIXED
          quantity: parseFloat(quantity),// ✅ FIXED
          farmer: { email }
        })
      });

      if (response.ok) {                 // ✅ FIXED
        const result = await response.text();
        alert(result);

        setName("");
        setPrice("");
        setQuantity("");
      } else {
        const error = await response.text();
        console.error(error);
        alert("Error adding crop");
      }

    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>🌾 Add Crop</h2>

      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        
        <input
          value={name}
          placeholder="Crop Name"
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "10px", width: "250px" }}
        />
        <br /><br />

        <input
          type="number"                   // ✅ FIXED
          value={price}
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
          style={{ padding: "10px", width: "250px" }}
        />
        <br /><br />

        <input
          type="number"                   // ✅ FIXED
          value={quantity}
          placeholder="Quantity (kg)"
          onChange={(e) => setQuantity(e.target.value)}
          style={{ padding: "10px", width: "250px" }}
        />
        <br /><br />

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            background: "green",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Add Crop
        </button>

      </form>
    </div>
  );
}

export default AddCrop;