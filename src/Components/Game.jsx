import React, { useState } from 'react';
import StartGame from './StartGame';
import GamePlay from './GamePlay';

const Game = () => {

    const [isGameStarted, setIsGameStarted] = useState(false);

    const toggleGamePlay = () => {
        setIsGameStarted((prev) => !prev)
    };

  return (
    <div>
        {isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}
    </div>
  )
};

export default Game;