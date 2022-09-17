import "./index.css";
import questions from "./questions";

function App() {
  return (
    <div className="App">
      <div className="quiz-container">
        <div className="left-container">
          <h1 className="question-number">Question 1<span className="total-questions">/{questions.length}</span></h1>
          <h3 className="question">{questions[0].questionText}</h3>
        </div>
        <div className="right-container">
        {questions[0].answerOptions.map((answerOption) => <button className="answer">{answerOption.answerText}</button>)}
        </div>
      </div>
    </div>
  );
}

export default App;
