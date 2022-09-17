import "./index.css";
import questions from "./questions";
import { useState } from "react";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleQuestionClick = () => {
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      alert("you have finished the quiz");
    }
  };
  return (
    <div className="App">
      <div className="quiz-container">
        <div className="left-container">
          <h1 className="question-number">
            Question {currentQuestion + 1}
            <span className="total-questions">/{questions.length}</span>
          </h1>
          <h3 className="question">
            {questions[currentQuestion].questionText}
          </h3>
        </div>
        <div className="right-container">
          {questions[currentQuestion].answerOptions.map((answerOption) => (
            <button className="answer" onClick={handleQuestionClick}>
              {answerOption.answerText}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
