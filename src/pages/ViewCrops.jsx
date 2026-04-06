import { useEffect, useState } from "react";

function ViewCrops() {
  const [crops, setCrops] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/crops")
      .then(res => res.json())
      .then(data => setCrops(data));
  }, []);

  return (
    <div>
      <h2>All Crops</h2>

      {crops.map((crop, index) => (
        <div key={index} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
          <h3>{crop.name}</h3>
          <p>Price: {crop.price}</p>
          <p>Quantity: {crop.quantity}</p>
          <p>Farmer: {crop.farmer?.email}</p>

          {/* 🔥 SIMPLE CONNECTION FEATURE */}
          <button onClick={() => alert("Contact: " + crop.farmer?.email)}>
            Contact Farmer
          </button>
        </div>
      ))}
    </div>
  );
}

export default ViewCrops;