import { useContext } from "react"
import { GameState } from "../ContextFile"
import { FaO, FaX } from "react-icons/fa6"

export default function GameCell( { index } ) {

    const [player, setPlayer, boardState, setBoardState, result, setResult] = useContext(GameState)

    const clickHandler = (e) => {
        const cellToAlter = e.target.classList[0]
        const updatedBoardState = [...boardState]
        updatedBoardState[cellToAlter] = player
        setBoardState(updatedBoardState)

        setPlayer(player === 1 ? 2 : 1)
        console.log(player)
    }

    return (
        <div className={`${index} game-cell w-28 h-28 m-2 bg-slate-400`} onClick={clickHandler}>
            {
               boardState[index] === 1 ? <FaO style={{display: "block"}} /> : boardState[index] === 2 ? <FaX style={{display: "block"}} /> : null

            }
            
        </div>
    )
}