import React, { useContext } from 'react';
import { QuizContext } from '../Helpers/Contexts';

const MainScreen = () =>
{
    
    const {gameState, setGameState} = useContext(QuizContext);
    return<>
        Main Screen
    </>
}

export default MainScreen;