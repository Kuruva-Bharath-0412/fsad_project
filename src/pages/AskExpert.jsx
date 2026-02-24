import { useState } from "react";

function AskExpert() {
  const [question, setQuestion] = useState("");
  const [posts, setPosts] = useState([]);

  const handlePost = () => {
    if (question.trim() === "") return;

    setPosts([...posts, question]);
    setQuestion("");
  };

  return (
    <div className="content-page">
      <h1>👨‍🔬 Ask Agricultural Expert</h1>

      <textarea
        rows="4"
        placeholder="Type your farming question here..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "20px",
          borderRadius: "8px"
        }}
      />

      <button
        onClick={handlePost}
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          borderRadius: "8px",
          background: "#2e7d32",
          color: "white",
          border: "none",
          cursor: "pointer"
        }}
      >
        Post Question
      </button>

      <div style={{ marginTop: "30px" }}>
        {posts.map((p, index) => (
          <div key={index} className="scheme-card">
            {p}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AskExpert;