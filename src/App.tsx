import React from 'react'
import NewGameButton from './components/NewGameButton/NewGameButton.tsx'
import PlayerScore from './components/PlayerScore/PlayerScore.tsx'
import { GameContextProvider } from './logic/GameContext.tsx'
import './App.scss'
import Board from './components/Board/Board.jsx'


export default function App() {
  return (
    <main>
      <h1 className='gameTitle'>Jogo da Velha</h1>
      <GameContextProvider>
        <div className='scoreboard'>
          <PlayerScore player="X"/>
          <PlayerScore player="O"/>
        </div>
        <Board/>
        <NewGameButton/>
      </GameContextProvider>
    </main>
  )
}

