import { useEffect, useState } from "react";

function FarmerPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://fsad-project-backend-bgnq.onrender.com/api/posts")
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div>
      <h2>Public Queries</h2>

      {posts.map((p) => (
        <div key={p.id} style={{ border: "1px solid gray", margin: "10px" }}>
          <p><b>{p.email}</b></p>
          <p>{p.message}</p>

          <input placeholder="Reply..." />
          <button>Reply</button>
        </div>
      ))}
    </div>
  );
}

export default FarmerPosts;