import { useContext, useEffect } from "react"
import { GameState } from "../ContextFile"
import { FaO, FaX } from "react-icons/fa6"

export default function GameCell( { index } ) {

    const [player, setPlayer, boardState, setBoardState, result, setResult, gameActive, setGameActive, gameMessage, setGameMessage] = useContext(GameState)

    const winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

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

    useEffect(() => {
        for (let combo of winningCombos) {

            const check1 = combo[0]
            const check2 = combo[1]
            const check3 = combo[2]

            if(boardState[check1] === 1 && boardState[check2] === 1 && boardState[check3] === 1) {
                setGameActive(false)
                setGameMessage("Player 1 wins")
                const updatedResult = [...result]
                updatedResult[0]++
                setResult(updatedResult)
                setTimeout(function() {
                    setBoardState([
                        null, null, null, null, null, null, null, null, null
                    ])
                    setPlayer(1)
                    setGameMessage("")
                }, 3000)

            } else if(boardState[check1] === 2 && boardState[check2] === 2 && boardState[check3] === 2) {
                setGameActive(false)
                setGameMessage("Player 2 wins")
                const updatedResult = [...result]
                updatedResult[1]++
                setResult(updatedResult)
                setTimeout(function() {
                    setBoardState([
                        null, null, null, null, null, null, null, null, null
                    ])
                    setPlayer(1)
                    setGameMessage("")
                }, 3000)

            } else if(boardState.every(item => item !== null)) {
                setGameActive(false)
                setGameMessage("It's a draw")
                setTimeout(function() {
                    setBoardState([
                        null, null, null, null, null, null, null, null, null
                    ])
                    setPlayer(1)
                    setGameMessage("")
                }, 2000)
            }
        }
    }, [boardState])
    

    return (
        <div className={`${index} game-cell w-20 sm:w-28 h-20 sm:h-28 m-2 bg-slate-400`} onClick={clickHandler}>
            {
               boardState[index] === 1 ? <FaO style={{display: "block"}} /> : boardState[index] === 2 ? <FaX style={{display: "block"}} /> : null

            }
            
        </div>
    )
}