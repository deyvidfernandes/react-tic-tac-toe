import { useGameContext } from "../../logic/GameContext"
import TurnDisplay from "../TurnDisplay/TurnDisplay"
import NewGameButton from "../NewGameButton/NewGameButton.tsx"

const BoardFooter = () => {
   const {gameState} = useGameContext()
   
   return gameState.isGameRunning ? <TurnDisplay/> : <NewGameButton/>
}

export default BoardFooter