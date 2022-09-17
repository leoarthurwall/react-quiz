import "./index.css";
import questions from "./questions";
import { useState } from "react";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  return (
    <div className="App">
      <div className="quiz-container">
        <div className="left-container">
          <h1 className="question-number">Question {currentQuestion + 1}<span className="total-questions">/{questions.length}</span></h1>
          <h3 className="question">{questions[currentQuestion].questionText}</h3>
        </div>
        <div className="right-container">
        {questions[currentQuestion].answerOptions.map((answerOption) => <button className="answer">{answerOption.answerText}</button>)}
        </div>
      </div>
    </div>
  );
}

export default App;
