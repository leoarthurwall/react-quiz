import "./index.css";
import questions from "./questions";
import { useState } from "react";

//challenges
//1. add a reset button
//2. view previous scores

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [finalScore, setFinalScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleQuestionClick = (isCorrect) => {
    const currentScore = score + 1;
    if (isCorrect === true) {
      setScore(currentScore);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setFinalScore(true);
    }
  };

  const handleResetButton = () => {
    setCurrentQuestion(0);
    setFinalScore(false);
    setScore(0)
  }
  
  return (
    <div className="App">
      <div className="quiz-container">
        {finalScore ? (
          <div className="final-score-container">
            <h2 className="final-score">
              You scored {score} out of {questions.length}
            </h2>
            <button className="reset-button" onClick={handleResetButton}>
              Retry
            </button>
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
                <button
                  className="answer-button"
                  onClick={() => handleQuestionClick(answerOption.isCorrect)}
                >
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
