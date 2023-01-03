import './App.css';
import EndScreen from './Components/EndScreen';
import MainScreen from './Components/MainScreen';
import StartScreen from './Components/StartScreen';
import React, { useState } from "react";

function App() {
  const [gameState, setGameState] = useState("Start")
  return <>
    <h1>Quiz App</h1>
    {gamestate === "Start" && <StartScreen/>}
    {gamestate === "Main" && <MainScreen/>}
    {gamestate === "End" && <EndScreen/>}
  </>
}

export default App;
