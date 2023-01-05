import React, { useContext, useState } from "react";
import { QuizContext } from "../Helpers/Contexts";

const EndScreen = () => {
  const { score, setScore } = useContext(QuizContext);

  return<>
      <div className="endscreen">EndScreen</div>
    </>
  
};

export default EndScreen;
