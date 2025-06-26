import React from 'react';

const Question = ({ question, onAnswer, questionNumber, totalQuestions }) => {
  return (
    <div className="question-container">
      <div className="progress">
        Question {questionNumber} of {totalQuestions}
      </div>
      <h3>{question.question}</h3>
      <div className="options">
        {question.options.map((option, index) => (
          <button 
            key={index} 
            onClick={() => onAnswer(option)}
            className="option-btn"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
