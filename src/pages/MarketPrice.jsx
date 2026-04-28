import { useEffect, useState } from "react";

function MarketPrice() {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/market")
      .then(res => res.json())
      .then(data => {
        console.log("API DATA:", data);
        setPrices(data || []); // ✅ direct data (no records)
      })
      .catch(err => {
        console.error(err);
        setPrices([]);
      });
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h2>📊 Market Prices</h2>

      {prices.length === 0 ? (
        <p>No data available</p>
      ) : (
        prices.map((p, index) => (
          <div
            key={index}
            style={{
              background: "#f5f5f5",
              padding: "20px",
              margin: "10px 0",
              borderRadius: "10px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
            }}
          >
            <h3>{p.cropName}</h3>
            <p>₹ {p.price} / Quintal</p>
          </div>
        ))
      )}
    </div>
  );
}

export default MarketPrice;