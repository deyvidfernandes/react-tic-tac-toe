import React from 'react'
import NewGameButton from './components/NewGameButton/NewGameButton.tsx'
import PlayerScore from './components/PlayerScore/PlayerScore.tsx'
import { GameContextProvider } from './logic/GameContext.tsx'
import Board from './components/Board/Board.jsx'
import './App.scss'
import TurnDisplay from './components/TurnDisplay/TurnDisplay.jsx'
import BoardFooter from './components/BoardFooter/BoardFooter.jsx'


export default function App() {
  return (
    <>
      <header>
        <h1 id='gameTitle'>Jogo da Velha</h1>
      </header>
      <main>
        <GameContextProvider>
          <div className='scoreboard'>
            <PlayerScore player="X"/>
            <PlayerScore player="O"/>
          </div>
          <Board/>
          <BoardFooter/>
        </GameContextProvider>
      </main>
    </>
  )
}

