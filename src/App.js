import './App.css';
import Header from './components/header/header/header'
import GuessButton from './components/result/guessButton';
import ColorsChoose from './components/colorsChoose/colorsChoose';
import OneAttemptLine from './components/oneLine/oneAttemptLine/oneAttemptLine';
import ListAttempt from './components/listAttempts/listAttempts/listAttempts';
import { Container, Box } from '@material-ui/core';
import ErrorMessage from './components/errorMessage/errorMessage';
import ButtonExport from './components/buttonExports/buttonExport';
import StartGame from './components/startAndChooseLevel/startGame/startGame';
import { useState } from 'react';
import Game from './components/game/game';

function App() {
  const [chooseLevel,setChooseLevel]=useState(false)
  return (
    <Box>
      <Container className='container_body'>
      <h1>mastermind</h1>
      {chooseLevel?<Game></Game>:<StartGame changeChooseLevelToTrue={()=>setChooseLevel(true)}/>}
              </Container>
    </Box>
    
  );
}

export default App;
