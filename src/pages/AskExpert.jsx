import { useState, useEffect } from "react";

function AskExpert() {
  const [question, setQuestion] = useState("");
  const [posts, setPosts] = useState([]);
  const [experts, setExperts] = useState([]);
  const [selectedExpert, setSelectedExpert] = useState("");

  const loggedInEmail = localStorage.getItem("email");

  // 🔹 Load experts
  useEffect(() => {
    fetch("http://localhost:8080/experts")
      .then(res => res.json())
      .then(data => setExperts(data))
      .catch(err => console.error(err));
  }, []);

  // 🔹 Load my questions + replies
  const loadMyQuestions = () => {
    fetch(`http://localhost:8080/farmer-questions/${loggedInEmail}`)
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    if (loggedInEmail) loadMyQuestions();
  }, []);

  // 🔹 Send question to backend
  const handlePost = async () => {
    if (question.trim() === "") return;

    if (!selectedExpert) {
      alert("Please select an expert");
      return;
    }

    try {
      const res = await fetch("http://localhost:8080/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          question: question,
          farmer: { email: loggedInEmail },
          expert: { email: selectedExpert }
        })
      });

      const result = await res.text();
      alert(result);

      setQuestion("");
      loadMyQuestions();

    } catch (err) {
      console.error(err);
      alert("Error sending question");
    }
  };

  return (
    <div className="content-page">
      <h1>👨‍🔬 Ask Agricultural Expert</h1>

      {/* 🔹 SELECT EXPERT */}
      <select
        value={selectedExpert}
        onChange={(e) => setSelectedExpert(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "8px",
          marginTop: "15px"
        }}
      >
        <option value="">Select Expert</option>
        {experts.map((exp) => (
          <option key={exp.id} value={exp.email}>
            {exp.email}
          </option>
        ))}
      </select>

      {/* 🔹 TEXTAREA */}
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

      {/* 🔹 BUTTON */}
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

      {/* 🔹 DISPLAY QUESTIONS + ANSWERS */}
      <div style={{ marginTop: "30px" }}>
        {posts.map((p) => (
          <div key={p.id} className="scheme-card">
            <p><b>Q:</b> {p.question}</p>
            <p>
              <b>Answer:</b>{" "}
              {p.answer ? p.answer : "Waiting for reply..."}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AskExpert;