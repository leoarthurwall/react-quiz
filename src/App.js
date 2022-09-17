import "./index.css";
import questions from "./questions";

function App() {
  return (
    <div className="App">
      <div className="quiz-container">
        <div className="left-container">
          <h1 className="question-number">Question 1<span className="total-questions">/4</span></h1>
          <h3 className="question">What is the capital of france?</h3>
        </div>
        <div className="right-container">
          <button className="answer">London</button>
          <button className="answer">New York</button>
          <button className="answer">Paris</button>
          <button className="answer">Madrid</button>
        </div>
      </div>
    </div>
  );
}

export default App;
