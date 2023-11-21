import { createContext, useContext } from "react"
import { useTicTacToeLogic, useTicTacToeLogic_returnType } from "./useTicTacToeLogic"
import React from "react"
import { TIC_TAC_TOE_INITIAL_STATE } from "./constants"



export const gameContext = createContext<useTicTacToeLogic_returnType | undefined>(undefined)

export const useGameContext = () : useTicTacToeLogic_returnType => {
   return useContext(gameContext)!
}

export const GameContextProvider = ({children}) => {
   const ticTacToeLogic = useTicTacToeLogic()
   return <gameContext.Provider value={ticTacToeLogic}>{children}</gameContext.Provider>
}