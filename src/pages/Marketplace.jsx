import { useEffect, useState } from "react";

function Marketplace() {
  const [crops, setCrops] = useState([]);

  useEffect(() => {
    fetch("https://fsad-project-backend-bgnq.onrender.com/crops")
      .then((res) => res.json())
      .then((data) => setCrops(data))
      .catch((err) => console.error(err));
  }, []);

  const handleContact = (crop) => {
    const email = crop.farmer?.email;

    if (!email) {
      alert("Farmer contact not available");
      return;
    }

    // Opens email app
    window.location.href = `mailto:${email}?subject=Regarding your crop: ${crop.name}`;
  };

  return (
    <div className="page-container">
      <h1 className="market-title">🛒 Fresh Crops Marketplace</h1>

      <div className="market-grid">
        {crops.length === 0 ? (
          <p>No crops available</p>
        ) : (
          crops.map((crop) => (
            <div key={crop.id} className="market-card">
              <h3>{crop.name}</h3>
              <p>💰 Price: ₹{crop.price}</p>
              <p>⚖ Quantity: {crop.quantity} kg</p>
              <p>👨‍🌾 Farmer: {crop.farmer?.email}</p>

              <button
                className="contact-btn"
                onClick={() => handleContact(crop)}
              >
                📞 Contact Farmer
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Marketplace;