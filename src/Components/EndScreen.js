import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import { Ques } from "../Helpers/QuestionBank";
import "../App.css";

const EndScreen = () => {
  const { score, setScore, setGameState } = useContext(QuizContext);

  const restartQuiz = () => {
    setScore(0);
    setGameState("Start");
  };

  return (
    <>
      <div className="end">
        <h1>Quiz Finished</h1>
        <h1>
          {score} / {Ques.length}
        </h1>
        <button className="btn" onClick={restartQuiz}>
          <h3>Restart Quiz</h3>
        </button>
      </div>
    </>
  );
};

export default EndScreen;
