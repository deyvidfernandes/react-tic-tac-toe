import "./style.scss"
import { useEndGameLine } from "./useEndGameLine";
import { useGameContext } from "../../logic/GameContext.tsx";


const EndGameLine = () => {
   const {gameState} = useGameContext()
   const endGameData = gameState.endGameData

   const [crossAnimationClass, offsetClass] = useEndGameLine(endGameData.winCase, endGameData.offset, endGameData.isInverse)
   console.log(endGameData.winCase)
   return (
   <div id="endGameLineWrapper" className={crossAnimationClass}>
      <div id="endGameLine" className={offsetClass + " " + (endGameData.winner == "X" ? "red" : "blue")}></div>
   </div>
   )
}

export default EndGameLine