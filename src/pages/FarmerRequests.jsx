import { useEffect, useState } from "react";

function FarmerRequests() {
  const [requests, setRequests] = useState([]);
  const [replies, setReplies] = useState({});
  const [input, setInput] = useState({});

  const farmerEmail = localStorage.getItem("email");

  // 🔥 Load requests
  useEffect(() => {
    fetch("http://localhost:8080/api/requests")
      .then(res => res.json())
      .then(data => {
        setRequests(data);

        // 🔥 ALSO LOAD REPLIES
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
  }, []);

  // 🔥 SEND REPLY
  const handleReply = (requestId) => {
    if (!input[requestId]) return;

    fetch("http://localhost:8080/api/replies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        requestId: requestId,
        farmerEmail: farmerEmail,
        reply: input[requestId]
      })
    })
      .then(() => {
        alert("Reply sent!");

        // 🔥 CLEAR INPUT
        setInput({ ...input, [requestId]: "" });

        // 🔥 RELOAD REPLIES (IMPORTANT)
        fetch(`http://localhost:8080/api/replies/${requestId}`)
          .then(res => res.json())
          .then(repData => {
            setReplies(prev => ({
              ...prev,
              [requestId]: repData
            }));
          });
      });
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>📢 Public Requirements</h2>

      {requests.map((r) => (
        <div key={r.id} style={{
          border: "1px solid #ccc",
          margin: "15px 0",
          padding: "15px",
          borderRadius: "10px"
        }}>
          <p><b>{r.email}</b></p>
          <p>{r.message}</p>

          {/* 🔥 SHOW ALL REPLIES */}
          <div style={{ marginTop: "10px" }}>
            {replies[r.id]?.map((rep, i) => (
              <p key={i}>
                <b>{rep.farmerEmail}</b>: {rep.reply}
              </p>
            ))}
          </div>

          {/* 🔥 REPLY INPUT */}
          <input
            value={input[r.id] || ""}
            onChange={(e) =>
              setInput({ ...input, [r.id]: e.target.value })
            }
            placeholder="Reply..."
          />

          <button onClick={() => handleReply(r.id)}>
            Reply
          </button>

        </div>
      ))}
    </div>
  );
}

export default FarmerRequests;