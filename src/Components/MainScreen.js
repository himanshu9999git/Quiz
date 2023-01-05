import React, { useContext, useState } from "react";
import { QuizContext } from "../Helpers/Contexts";
import { Ques } from "../Helpers/QuestionBank";

const MainScreen = () => {
  const { gameState, setGameState } = useContext(QuizContext);
  const [optionChosen, setOptionChosen] = useState("");

  const [currQues, setCurrQues] = useState(0);
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
            {" "}
            {Ques[currQues].optionB}
          </button>
          <button
            onClick={() => {
              setOptionChosen("C");
            }}
          >
            {" "}
            {Ques[currQues].optionC}
          </button>
          <button
            onClick={() => {
              setOptionChosen("D");
            }}
          >
            {" "}
            {Ques[currQues].optionD}
          </button>
        </div>
      </div>
    </>
  );
};

export default MainScreen;
