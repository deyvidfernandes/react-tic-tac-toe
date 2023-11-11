import React from "react";
import PropTypes from "prop-types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faX } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import "./style.scss"


const Square = (key, player, isSquareEmpty, onclick) => {
   

   const cursorType = isSquareEmpty ? "clickable" : undefined
   return (
      <td key={key} onClick={onclick} className={cursorType}>
         {player === 'X' && <FontAwesomeIcon icon={faX} className="red" />}
         {player === 'O' && <FontAwesomeIcon icon={faCircle} className="blue"/>}
      </td>
   )
}

Square.propTypes = {
   key: PropTypes.string,
   player: PropTypes.string,
   player: PropTypes.func,
}

export default Square