import "./index.css";
import questions from "./questions";
import { useState } from "react";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [finalScore, setFinalScore] = useState(true);

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
        {finalScore ? (
          <div className="final-score-container">
            <h2>You scored 1 out of {questions.length}</h2>
          </div>
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
}

export default App;
