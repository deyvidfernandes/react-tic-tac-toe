import { useGameContext } from "../../logic/GameContext"
import  "./style.scss"

const TurnDisplay = () => {
   const {gameState} = useGameContext()

   return (
      <p id='turnDisplay' className={gameState.turn}>Vez do {gameState.turn}</p>
   )
}

export default TurnDisplay