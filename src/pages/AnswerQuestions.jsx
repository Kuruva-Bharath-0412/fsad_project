import React, { useState, useEffect } from "react";

function AnswerQuestions() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});

  const expertEmail = localStorage.getItem("email");

  // ✅ Load only this expert's questions
  const loadQuestions = () => {
    fetch(`http://localhost:8080/expert-questions/${expertEmail}`)
      .then(res => res.json())
      .then(data => setQuestions(data));
  };

  useEffect(() => {
    loadQuestions();
  }, [expertEmail]);

  // typing handler
  const handleChange = (id, value) => {
    setAnswers({ ...answers, [id]: value });
  };

  // submit answer
  const handleSubmit = (q) => {
    const answer = answers[q.id];
    if (!answer) return;

    fetch("http://localhost:8080/reply", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: q.id,
        answer: answer
      })
    })
      .then(res => res.text())
      .then(() => {
        alert("Answer submitted!");
        setAnswers({ ...answers, [q.id]: "" });
        loadQuestions(); // refresh
      });
  };

  return (
    <div style={pageStyle}>
      <h1 style={{ color: "white" }}>✍ Answer Questions</h1>

      {questions.map((q) => (
        <div key={q.id} style={cardStyle}>
          <p><b>Farmer:</b> {q.farmer?.email}</p>
          <p><b>Question:</b> {q.question}</p>

          {/* ✅ IF ANSWER EXISTS → SHOW ONLY TEXT */}
          {q.answer ? (
            <p><b>Answer:</b> {q.answer}</p>
          ) : (
            <>
              <textarea
                value={answers[q.id] || ""}
                onChange={(e) => handleChange(q.id, e.target.value)}
                placeholder="Write answer..."
                style={inputStyle}
              />

              <button
                onClick={() => handleSubmit(q)}
                style={btnStyle}
              >
                Submit Answer
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
const pageStyle = {
  minHeight: "100vh",
  background: "linear-gradient(135deg, #0f2027, #203a43)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "40px",
  paddingBottom: "120px" // ✅ prevents overlap with footer
};

const containerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: "20px",
  width: "90%",
  maxWidth: "900px"
};

const cardStyle = {
  background: "white",
  padding: "15px",
  borderRadius: "10px",
  width: "100%",
  boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
};

const inputStyle = {
  width: "100%",
  height: "70px",
  marginTop: "8px",
  marginBottom: "8px",
  fontSize: "14px"
};


const btnStyle = {
  width: "100%",
  padding: "8px",
  background: "#0072ff",
  color: "white",
  border: "none",
  borderRadius: "5px",
  fontSize: "14px"
};

export default AnswerQuestions;