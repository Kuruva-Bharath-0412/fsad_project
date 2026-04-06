import { useEffect, useState } from "react";

function FarmerForum() {
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState("");

  const email = localStorage.getItem("email");
  const role = localStorage.getItem("role");

  // 🔥 Load all posts
  useEffect(() => {
    fetch("http://localhost:8080/api/posts")
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error(err));
  }, []);

  // 🔥 Public user posts
  const handlePost = () => {
    if (!message) return;

    fetch("http://localhost:8080/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        message
      })
    })
      .then(res => res.json())
      .then(() => {
        setMessage("");
        window.location.reload(); // refresh
      });
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>🌾 Farmer Forum</h2>

      {/* ✅ ONLY PUBLIC CAN POST */}
      {role === "public" && (
        <div style={{ marginBottom: "20px" }}>
          <textarea
            placeholder="Ask something to farmers..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <br />
          <button onClick={handlePost}>Post</button>
        </div>
      )}

      {/* ✅ ALL CAN VIEW */}
      {posts.map((p) => (
        <div
          key={p.id}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            margin: "10px 0",
            borderRadius: "10px"
          }}
        >
          <p><b>{p.email}</b></p>
          <p>{p.message}</p>

          {/* ✅ FARMERS CAN REPLY (UI only now) */}
          {role === "farmer" && (
            <>
              <input placeholder="Reply..." />
              <button>Reply</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default FarmerForum;