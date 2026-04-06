import { useState, useEffect } from "react";

function ConnectFarmers() {
  const [message, setMessage] = useState("");
  const [requests, setRequests] = useState([]);
  const [replies, setReplies] = useState({});

  const email = localStorage.getItem("email");

  // 🔥 LOAD ALL REQUESTS
  const loadData = () => {
    fetch("http://localhost:8080/api/requests")
      .then(res => res.json())
      .then(data => {
        setRequests(data);

        // 🔥 LOAD REPLIES FOR EACH REQUEST
        data.forEach(req => {
          fetch(`http://localhost:8080/api/replies/${req.id}`)
            .then(res => res.json())
            .then(repData => {
              setReplies(prev => ({
                ...prev,
                [req.id]: repData
              }));
            });
        });
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  // 🔥 POST REQUEST
  const handlePost = () => {
    if (!message.trim()) return;

    fetch("http://localhost:8080/api/requests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        message: message
      })
    })
      .then(() => {
        alert("Posted successfully!");
        setMessage("");
        loadData(); // 🔥 refresh after post
      })
      .catch(() => alert("Error posting"));
  };

  return (
    <div style={{ padding: "40px", minHeight: "80vh" }}>
      <h2>👨‍🌾 Connect with Farmers</h2>

      {/* 🔥 BIG TEXT AREA */}
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask farmers anything... (e.g., Need sweet potatoes ₹2/kg)"
        style={{
          width: "100%",
          height: "150px",
          padding: "10px",
          borderRadius: "10px"
        }}
      />

      <br /><br />

      <button onClick={handlePost} style={{
        padding: "10px 20px",
        background: "green",
        color: "white",
        border: "none",
        borderRadius: "5px"
      }}>
        Post
      </button>

      {/* 🔥 SHOW ALL POSTS */}
      <div style={{ marginTop: "30px" }}>
        {requests.map((req) => (
          <div key={req.id} style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "10px"
          }}>
            <p><b>{req.email}</b></p>
            <p>{req.message}</p>

            {/* 🔥 SHOW REPLIES */}
            <div style={{ marginTop: "10px", paddingLeft: "10px" }}>
              {replies[req.id]?.map((rep, i) => (
                <p key={i}>
                  <b>{rep.farmerEmail}</b>: {rep.reply}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ConnectFarmers;