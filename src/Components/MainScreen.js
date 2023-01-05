import React, { useContext, useState } from "react";
import { QuizContext } from "../Helpers/Contexts";
import { Ques } from "../Helpers/QuestionBank";

const MainScreen = () => {
  const { gameState, setGameState } = useContext(QuizContext);
  const { score, setScore } = useContext(QuizContext);
  const [optionChosen, setOptionChosen] = useState("");
  const [currQues, setCurrQues] = useState(0);
  const [quesState, setQuesState] = useState("Next Question");

  const nextQuestion = () => {
    if (optionChosen == Ques[currQues].answer) {
      setScore(score + 1);
    }

    setCurrQues(currQues + 1);
  };

  const finishQuiz = () => {
    if (optionChosen == Ques[currQues].answer) {
      setScore(score + 1);
    }
    setGameState("End");
  };

  return (
    <>
      <div className="str">
        <h1>{Ques[currQues].prompt}</h1>
        <div className="options">
          <button
            onClick={() => {
              setOptionChosen("A");
            }}
          >
            {Ques[currQues].optionA}
          </button>
          <button
            onClick={() => {
              setOptionChosen("B");
            }}
          >
            {Ques[currQues].optionB}
          </button>
          <button
            onClick={() => {
              setOptionChosen("C");
            }}
          >
            {Ques[currQues].optionC}
          </button>
          <button
            onClick={() => {
              setOptionChosen("D");
            }}
          >
            {Ques[currQues].optionD}
          </button>
        </div>
        <div className="nxtQues">
          {currQues == Ques.length - 1 ? (
            <button onClick={finishQuiz} id="nextQuestion">
              Finish Quiz
            </button>
          ) : (
            <button onClick={nextQuestion} id="nextQuestion">
              Next Question
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default MainScreen;
