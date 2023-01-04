import React, { useContext } from 'react';
import { QuizContext } from '../Helpers/Contexts';

const MainScreen = () =>
{
    
    const {gameState, setGameState} = useContext(QuizContext);
    return<>
        <button onClick={changeState}>Main Screen</button>
    </>
}

export default MainScreen;