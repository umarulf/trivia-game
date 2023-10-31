import React, { useState } from "react";

function QuizPage({ question, nextQuestion }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const exitQuiz = () => {
    window.location.reload();
  };

  const isCorrect = selectedOption === question.correctAnswer;

  const correctStyle = { color: "green" };
  const incorrectStyle = { color: "red" };

  return (
    <div>
      <h2  className="question">{question.question}</h2>
      <ul>
        {question.options.map((option, index) => (
          <li 
            key={index}
            style={{
              ...selectedOption === option
                ? isCorrect
                  ? correctStyle
                  : incorrectStyle
                : {}
            }}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </li>
        ))}
      </ul>
     
      <button className="nextButton" onClick={nextQuestion}>Next</button>
      <button className="exitButton" onClick={exitQuiz}>
        Exit
      </button>
    </div>
  );
}

export default QuizPage;
