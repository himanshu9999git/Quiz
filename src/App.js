import "./App.css";
import EndScreen from "./Components/EndScreen";
import MainScreen from "./Components/MainScreen";
import StartScreen from "./Components/StartScreen";
import React, { useState } from "react";
import { QuizContext } from "./Helpers/Contexts";

function App() {
  const [gameState, setGameState] = useState("Start");
  const [score, setScore] = useState(0);

  return (
    <>
      <div className="App">
        <h1>Quiz App</h1>
        <QuizContext.Provider
          value={{ gameState, setGameState, score, setScore }}
        >
          {gameState === "Start" && <StartScreen />}
          {gameState === "Main" && <MainScreen />}
          {gameState === "End" && <EndScreen />}
        </QuizContext.Provider>
      </div>
    </>
  );
}

export default App;
