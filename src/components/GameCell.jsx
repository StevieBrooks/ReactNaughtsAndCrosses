import { useContext } from "react"
import { GameState } from "../ContextFile"
import { FaO, FaX } from "react-icons/fa6"

export default function GameCell( { index } ) {

    const [player, setPlayer, boardState, setBoardState, result, setResult] = useContext(GameState)

    const winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

    const clickHandler = (e) => {
        const cellToAlter = e.target.classList[0]
        const updatedBoardState = [...boardState]
        updatedBoardState[cellToAlter] = player
        setBoardState(updatedBoardState)
        setPlayer(player === 1 ? 2 : 1)
        calculateWinner()
    }

    const calculateWinner = () => {
        return winningCombos.forEach(item => {
            const check1 = item[0]
            const check2 = item[1]
            const check3 = item[2]
            if(boardState[check1] === 1 && boardState[check2] === 1 && boardState[check3] === 1) {
                console.log("player 1 wins")
            } else if(boardState[check1] === 2 && boardState[check2] === 2 && boardState[check3] === 2) {
                console.log("player 2 wins")
            }
        })
    }

    return (
        <div className={`${index} game-cell w-28 h-28 m-2 bg-slate-400`} onClick={clickHandler}>
            {
               boardState[index] === 1 ? <FaO style={{display: "block"}} /> : boardState[index] === 2 ? <FaX style={{display: "block"}} /> : null

            }
            
        </div>
    )
}