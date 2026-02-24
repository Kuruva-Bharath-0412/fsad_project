import React from "react";

function ViewQueries() {
  const queries = [
    "My tomato plants are turning yellow. What should I do?",
    "How to improve soil fertility naturally?",
    "Best irrigation method for small farms?",
    "How to prevent pest attacks on rice crops?"
  ];

  return (
    <div className="content-page">
      <h1>📥 Farmer Queries</h1>

      <div className="query-grid">
        {queries.map((query, index) => (
          <div key={index} className="query-card">
            {query}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewQueries;