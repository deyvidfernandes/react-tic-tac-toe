import { useReducer, useState } from 'react'
import Board from './components/Board/Board.jsx'

import './App.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faX } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { useTicTacToeLogic } from './logic/useTicTacToeLogic.ts'
import NewGameButton from './components/NewGameButton/NewGameButton.jsx'




function App() {
  const ticTacToeLogic = useTicTacToeLogic()
  const {xWinCount, oWinCount, isGameRunning} = ticTacToeLogic

  return (
    <main>
      <h1 className='gameTitle'>Jogo da Velha</h1>
      <div className='leaderboard'>
        <div className='x'>
          <FontAwesomeIcon icon={faX}/>
          <span>{xWinCount}</span>
        </div>

        <div className='o'>
          <FontAwesomeIcon icon={faCircle}/>
          <span>{oWinCount}</span>
        </div>
      </div>

      {Board(ticTacToeLogic, isGameRunning)}
      
      {!isGameRunning ? NewGameButton(ticTacToeLogic) : null}
    </main>
  )
}

export default App
