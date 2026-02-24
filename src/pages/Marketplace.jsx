import React from "react";

function Marketplace() {
  const vegetables = [
    { name: "Tomatoes", price: "₹30/kg" },
    { name: "Potatoes", price: "₹25/kg" },
    { name: "Carrots", price: "₹40/kg" },
    { name: "Onions", price: "₹28/kg" }
  ];

  return (
    <div className="content-page">
      <h1>🛒 Fresh Vegetables Marketplace</h1>

      <div className="market-grid">
        {vegetables.map((item, index) => (
          <div key={index} className="market-card">
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Marketplace;