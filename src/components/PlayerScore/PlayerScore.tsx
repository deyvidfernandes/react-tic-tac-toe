import React from "react"
import { useGameContext } from "../../logic/GameContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-regular-svg-icons"
import { faX } from "@fortawesome/free-solid-svg-icons"

const PlayerScore = ({player}) => {
   const {gameState} = useGameContext()
   const isX = player === "X";

   return (
      <div className={isX ? "x" : "o"}>
         <FontAwesomeIcon icon={isX ? faX : faCircle}/>
         <span>{isX ? gameState.xWinCount : gameState.oWinCount}</span>
      </div>
   )
}

export default PlayerScore