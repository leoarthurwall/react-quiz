import "./index.css";
import questions from "./questions";
import { useState } from "react";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [finalScore, setFinalScore] = useState(false);
  const [score, setScore] = useState(0);
  const [recordedScore, setRecordedScore] = useState(0);

  //onClickHandler for the answer buttons
  const handleAnswerClick = (isCorrect) => {
    //if answer clicked matches true, score increments by 1
    const currentScore = score + 1;
    if (isCorrect === true) {
      setScore(currentScore);
    }

    //if answer button is clicked, go to next question if question length isn't reached, otherwise set finalscore to true and render finalscore card
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setFinalScore(true);
    }
  };

  //onClickHandler for the retry button
  const handleResetButton = () => {
    //resets the states back to original settings
    setCurrentQuestion(0);
    setFinalScore(false);
    setScore(0);

    //stores the score as recorded score which can then be used to show previous score.
    setRecordedScore(score);
  };

  return (
    <div className="App">
      <div className="quiz-container">
        {finalScore ? (
          <div className="final-score-container">
            <h1 className="final-score">
              You scored {score} out of {questions.length}
            </h1>
            <p>Previous Score: {recordedScore}</p>
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
                  onClick={() => handleAnswerClick(answerOption.isCorrect)}
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
