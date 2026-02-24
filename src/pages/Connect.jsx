import React, { useState } from "react";

function Connect() {
  const [message, setMessage] = useState("");
  const [posts, setPosts] = useState([]);

  const handlePost = () => {
    if (message.trim() === "") return;
    setPosts([...posts, message]);
    setMessage("");
  };

  return (
    <div className="content-page">
      <h1>👨‍🌾 Connect With Farmers</h1>

      <div className="connect-box">
        <textarea
          placeholder="Write something to farmers..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={handlePost}>Post</button>
      </div>

      <div className="posts-section">
        {posts.map((post, index) => (
          <div key={index} className="post-card">
            {post}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Connect;