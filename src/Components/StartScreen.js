import React, { useContext } from 'react'  
import { QuizContext } from '../Helpers/Contexts'  

const StartScreen = () =>
{
    const changeState = () =>{
        setGameState("Main");
    }
    const {gameState, setGameState} = useContext(QuizContext);
    return<>
        <div className="box">
            <button className="btn" onClick={changeState}>
                Start Quiz
            </button>
        </div>
    </>
}

export default StartScreen;