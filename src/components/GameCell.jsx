import { useContext, useEffect } from "react"
import { GameState } from "../ContextFile"
import { FaO, FaX } from "react-icons/fa6"

export default function GameCell( { index } ) {

    const [player, setPlayer, boardState, setBoardState, result, setResult, gameActive, setGameActive, gameMessage, setGameMessage, menuActive, setMenuActive, assignActive, setAssignActive, resetActive, setResetActive, themeActive, setThemeActive] = useContext(GameState)

    const clickHandler = (e) => {
        const cellToAlter = e.target.classList[0]
        if(boardState[cellToAlter] !== null) {
            setGameActive(false)
            setGameMessage("Please choose another cell")
        } else {
            const updatedBoardState = [...boardState]
            updatedBoardState[cellToAlter] = player
            setBoardState(updatedBoardState)
            setPlayer(player === 1 ? 2 : 1)
            setGameActive(true)
        }
    }
    

    return (
        <div className={`${index} game-cell w-20 sm:w-28 h-20 sm:h-28 m-2 bg-slate-400`} onClick={clickHandler}>
            {
               boardState[index] === 1 ? <FaO style={{display: "block"}} /> : boardState[index] === 2 ? <FaX style={{display: "block"}} /> : null

            }
            
        </div>
    )
}