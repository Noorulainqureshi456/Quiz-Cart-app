import React from 'react';

const Result = ({ score, totalQuestions, onReset }) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  const resultEmoji = percentage >= 70 ? '🎉' : percentage >= 50 ? '🙂' : '😕';
  const resultText = percentage >= 70 ? 'Excellent!' : percentage >= 50 ? 'Good job!' : 'Keep practicing!';

  return (
    <div className="result-container">
      <h3>Quiz Results {resultEmoji}</h3>
      <div className="result-score">
        <div className="score-circle">
          <span className="percentage">{percentage}%</span>
        </div>
      </div>
      <p>{resultText}</p>
      <p className="score-detail">You answered {score} out of {totalQuestions} correctly</p>
      <button onClick={onReset} className="reset-btn">
        Try Again
      </button>
    </div>
  );
};

export default Result;
