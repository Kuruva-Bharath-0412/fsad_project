import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>🛠 Admin Dashboard</h1>

      <div style={gridStyle}>

        <div style={cardStyle} onClick={() => navigate("/add-market")}>
          <h2 style={iconStyle}>📊</h2>
          <h3>Add Market Prices</h3>
          <p>Update crop prices</p>
        </div>

        <div style={cardStyle} onClick={() => navigate("/answer-questions")}>
          <h2 style={iconStyle}>✍</h2>
          <h3>Answer Questions</h3>
          <p>Respond to farmers</p>
        </div>

      </div>
    </div>
  );
}

/* ===== STYLES ===== */

const pageStyle = {
  minHeight: "100vh",
  background: "linear-gradient(135deg, #141e30, #243b55)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "40px"
};

const titleStyle = {
  color: "white",
  marginBottom: "40px",
  fontSize: "32px",
  fontWeight: "600"
};

const gridStyle = {
  display: "flex",
  gap: "40px",
  flexWrap: "wrap",
  justifyContent: "center"
};

const cardStyle = {
  background: "rgba(255,255,255,0.95)",
  padding: "35px",
  borderRadius: "20px",
  cursor: "pointer",
  width: "260px",
  textAlign: "center",
  boxShadow: "0 15px 35px rgba(0,0,0,0.3)",
  transition: "0.3s"
};

const iconStyle = {
  fontSize: "40px",
  marginBottom: "10px"
};

export default AdminDashboard;