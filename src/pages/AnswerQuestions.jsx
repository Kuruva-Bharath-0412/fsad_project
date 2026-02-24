import React, { useState } from "react";

function AnswerQuestions() {
  const [answer, setAnswer] = useState("");
  const [answers, setAnswers] = useState([]);

  const handleSubmit = () => {
    if (answer.trim() === "") return;
    setAnswers([...answers, answer]);
    setAnswer("");
  };

  return (
    <div className="content-page">
      <h1>✍ Answer Farmer Questions</h1>

      <div className="upload-box">
        <textarea
          placeholder="Write your expert answer here..."
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <button onClick={handleSubmit}>Post Answer</button>
      </div>

      <div className="guide-list">
        {answers.map((item, index) => (
          <div key={index} className="guide-card">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnswerQuestions;