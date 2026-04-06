import { useEffect, useState } from "react";

function Schemes() {
  const [schemes, setSchemes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/schemes")
      .then(res => res.json())
      .then(data => setSchemes(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{
      padding: "50px",
      background: "linear-gradient(to right, #e8f5e9, #f1f8e9)",
      minHeight: "100vh"
    }}>
      
      <h2 style={{
        textAlign: "center",
        marginBottom: "40px",
        fontSize: "32px",
        color: "#1b5e20"
      }}>
        🌾 Government Schemes
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
        gap: "30px"
      }}>
        
        {schemes.map((s, index) => (
          <div key={index} style={{
            background: "linear-gradient(135deg, #ffffff, #e0f2f1)",
            padding: "30px",
            borderRadius: "20px",
            boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
            transition: "0.3s",
            minHeight: "180px"
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = "scale(1.07)";
            e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.25)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)";
          }}
          >
            
            <h3 style={{
              color: "#0d47a1",
              fontSize: "22px",
              marginBottom: "10px"
            }}>
              🌿 {s.title}
            </h3>
            
            <p style={{
              color: "#333",
              fontSize: "16px",
              marginBottom: "20px"
            }}>
              {s.description}
            </p>

            <button
              style={{
                background: "linear-gradient(45deg, #43a047, #66bb6a)",
                color: "white",
                border: "none",
                padding: "12px 18px",
                borderRadius: "10px",
                cursor: "pointer",
                fontSize: "15px",
                fontWeight: "bold"
              }}
              onClick={() => window.open(s.link, "_blank")}
            >
              🚀 Apply Now
            </button>

          </div>
        ))}

      </div>
    </div>
  );
}

export default Schemes;