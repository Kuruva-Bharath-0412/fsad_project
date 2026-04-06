import React, { useState, useEffect } from "react";

function AnswerQuestions() {

  // ❌ REMOVE old answer array logic
  // const [answers, setAnswers] = useState([]);

  // ✅ NEW STATES
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});

  const email = localStorage.getItem("email");

  // 🔹 Load questions for this expert
  const loadQuestions = () => {
    fetch(`http://localhost:8080/expert-questions/${email}`)
      .then(res => res.json())
      .then(data => setQuestions(data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    if (email) loadQuestions();
  }, []);

  // 🔹 Handle typing
  const handleChange = (id, value) => {
    setAnswers({ ...answers, [id]: value });
  };

  // 🔹 Submit answer
  const handleSubmit = async (id) => {

    const answer = answers[id];

    if (!answer || answer.trim() === "") return;

    try {
      const res = await fetch("http://localhost:8080/reply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id: id,
          answer: answer
        })
      });

      const result = await res.text();
      alert(result);

      loadQuestions(); // refresh after reply

    } catch (err) {
      console.error(err);
      alert("Error sending reply");
    }
  };

  return (
    <div className="content-page">
      <h1>✍ Answer Farmer Questions</h1>

      <div className="guide-list">

        {questions.map((q) => (
          <div key={q.id} className="guide-card">

            {/* ✅ SHOW QUESTION */}
            <p><b>Question:</b> {q.question}</p>

            {/* ✅ INPUT FOR ANSWER */}
            <textarea
              placeholder="Write your expert answer here..."
              value={answers[q.id] || ""}
              onChange={(e) => handleChange(q.id, e.target.value)}
            />

            {/* ✅ SUBMIT BUTTON */}
            <button onClick={() => handleSubmit(q.id)}>
              Post Answer
            </button>

          </div>
        ))}

      </div>
    </div>
  );
}

export default AnswerQuestions;