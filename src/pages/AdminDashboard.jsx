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
    <div className="answer-page">

      {/* TOP SECTION */}
      <div className="answer-top">
        <h2 className="answer-title">✍ Answer Farmer Questions</h2>
        <p className="answer-subtitle">
          Provide professional guidance and expert farming solutions
        </p>
      </div>

      {/* BOTTOM SECTION */}
      <div className="answer-content">

        <div className="answer-box">
          <textarea
            placeholder="Write your expert answer here..."
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
          <button onClick={handleSubmit}>Post Answer</button>
        </div>

        <div className="answers-list">
          {answers.map((item, index) => (
            <div key={index} className="answer-card">
              {item}
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}

export default AnswerQuestions;