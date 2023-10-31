import React from "react";
import "../styles.css"; 


function HomePage({ startQuiz }) {
  return (
    <div>
      <h1 className="heading">Welcome to the Trivia Quiz Game</h1>
      <button className="button" onClick={startQuiz}>Start Quiz</button>
    </div>
  );
}

export default HomePage;
