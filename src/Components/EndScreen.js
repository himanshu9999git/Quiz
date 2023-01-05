import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import { Ques } from "../Helpers/QuestionBank";

const EndScreen = () => {
  const { score, setScore, setGameState } = useContext(QuizContext);

  const restartQuiz = () => {
    setScore(0);
    setGameState("Start");
  }

  return (
    <>
      <div className="endscreen">
        <h1>Quiz Finished</h1>
        <h1>
          {score} / {Ques.length}
        </h1>
        <button onClick={restartQuiz}>Restart Quiz</button>
      </div>
    </>
  );
};

export default EndScreen;
