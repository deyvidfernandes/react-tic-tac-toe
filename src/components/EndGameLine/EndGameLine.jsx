import "./style.scss"
import { useEndGameLine } from "./useEndGameLine";


const EndGameLine = (props) => {
   const [crossAnimationClass, offsetClass] = useEndGameLine(props.winCase, props.offset, props.isInverse)

   return (
   <div id="endGameLineWrapper" className={crossAnimationClass}>
      <div id="endGameLine" className={offsetClass + " " + (props.winner == "X" ? "red" : "blue")}></div>
   </div>
   )
}

export default EndGameLine