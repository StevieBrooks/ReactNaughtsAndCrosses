import { useContext, useState, useEffect } from "react"
import { GameState } from "../ContextFile"
import GameCell from "./GameCell"
import ScoreBoard from "./ScoreBoard"
import DashBoard from "./DashBoard"
import ResetModal from "./ResetModal"

export default function GameBoard() {

    const [player, setPlayer, boardState, setBoardState, result, setResult, gameActive, setGameActive, gameMessage, setGameMessage, resetActive, setResetActive, p1Moves, setP1Moves, p2Moves, setP2Moves] = useContext(GameState)

    const winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

    useEffect(() => {
        console.log(p1Moves)
        console.log(p2Moves)
        let isWinner = false
        for (let combo of winningCombos) {
            // const isWinner = combo.every(cellIndex => p1Moves.includes(cellIndex));
            // console.log(isWinner)

            const check1 = combo[0]
            const check2 = combo[1]
            const check3 = combo[2]

            if(boardState[check1] === 1 && boardState[check2] === 1 && boardState[check3] === 1) {
                isWinner = true
                setGameActive(false)
                setGameMessage("Player 1 wins")
                const updatedResult = [...result]
                updatedResult[0]++
                setResult(updatedResult)
                setBoardState([
                    null, null, null, null, null, null, null, null, null
                ])
                setPlayer(1)
                break;
                // setTimeout(function() {
                //     setGameMessage("")
                // }, 3000)

            } else if(boardState[check1] === 2 && boardState[check2] === 2 && boardState[check3] === 2) {
                isWinner = true
                setGameActive(false)
                setGameMessage("Player 2 wins")
                const updatedResult = [...result]
                updatedResult[1]++
                setResult(updatedResult)
                setBoardState([
                    null, null, null, null, null, null, null, null, null
                ])
                setPlayer(1)
                break;
                // setTimeout(function() {
                //     setGameMessage("")
                // }, 3000)

            } 
        }

        if (!isWinner && boardState.every(item => item !== null)) {
            setGameActive(false);
            setGameMessage("It's a draw");
            setBoardState(Array(9).fill(null));
            setPlayer(1);
        }

    }, [boardState])

    return (

        <div className="game-container relative top-5 m-auto">
            <ScoreBoard />

            <div className="game-board w-72 sm:w-96 h-72 sm:h-96 bg-slate-600 m-auto flex flex-wrap justify-center items-center">
                {boardState.map((cell, index) => (
                    <GameCell key={index} index={index} />
                ))}
            </div>

            <DashBoard />
            {resetActive && <ResetModal />}

        </div>

        

    )
}

