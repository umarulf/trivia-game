
import React, { useState } from "react";
import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";
import quizData from "./quizData.json";
import "./styles.css"

function App() {
  const [page, setPage] = useState("home");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  

  const startQuiz = () => {
    setPage("quiz");
  };

  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

 

  return (
    <div className="App">
      {page === "home" && <HomePage startQuiz={startQuiz} />}
      {page === "quiz" && (
        <QuizPage 
          question={quizData[currentQuestion]}
          nextQuestion={nextQuestion}
          
        />
      )}
    </div>
  );
}

export default App;