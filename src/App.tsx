import Board from './components/Board/Board.jsx'

import './App.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faX } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { useTicTacToeLogic } from './logic/useTicTacToeLogic.ts'
import NewGameButton from './components/NewGameButton/NewGameButton.tsx'
import React from 'react'
import { GameContextProvider } from './logic/GameContext.tsx'
import { PlayerScore } from './components/PlayerScore/PlayerScore.tsx'

export default function App() {
  const ticTacToeLogic = useTicTacToeLogic()
  const {gameState} = ticTacToeLogic
  
  
  return (
    <main>
      <h1 className='gameTitle'>Jogo da Velha</h1>
      <GameContextProvider>
        <div className='scoreboard'>
          <PlayerScore player="X"></PlayerScore>
          <PlayerScore player="O"></PlayerScore>
        </div>
        <Board/>
        <NewGameButton/>
      </GameContextProvider>
    </main>
  )
}

