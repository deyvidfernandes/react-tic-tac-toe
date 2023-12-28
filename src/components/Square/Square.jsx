import React, { useContext } from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faX } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'

import "./style.scss"
import { useGameContext } from "../../logic/GameContext.tsx";


const Square = ({x, y}) => {
   const {gameState, handleSquareClick} = useGameContext()
   const thisData = gameState.squares[y][x]

   const isSquareEmpty = !thisData.player
   const cursorType = isSquareEmpty && gameState.isGameRunning ? "clickable" : undefined
   
   return (
      <td onClick={() => handleSquareClick(x, y)} className={cursorType}>
         {thisData.player === 'X' && <FontAwesomeIcon icon={faX} className="red" />}
         {thisData.player === 'O' && <FontAwesomeIcon icon={faCircle} className="blue"/>}
      </td>
   )
}

export default Square