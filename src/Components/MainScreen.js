import React, { useContext, useState } from "react";
import { QuizContext } from "../Helpers/Contexts";
import { Ques } from "../Helpers/QuestionBank";
import '../App.css'

const MainScreen = () => {
  const { gameState, setGameState } = useContext(QuizContext);
  const { score, setScore } = useContext(QuizContext);
  const [optionChosen, setOptionChosen] = useState("");
  const [currQues, setCurrQues] = useState(0);

  const nextQuestion = () => {
    if (Ques[currQues].answer == optionChosen) {
      setScore(score + 1);
    }

    setCurrQues(currQues + 1);
  };

  const finishQuiz = () => {
    if (Ques[currQues].answer == optionChosen) {
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
    </>
  );
};

export default MainScreen;
