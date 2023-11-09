import { useContext, useState } from "react"
import { GameState } from "../ContextFile"
import GameCell from "./GameCell"
import ScoreBoard from "./ScoreBoard"
import DashBoard from "./DashBoard"

export default function GameBoard() {

    const [player, setPlayer, boardState, setBoardState, result, setResult, gameActive, setGameActive, gameMessage, setGameMessage] = useContext(GameState)

    return (

        <div className="game-container">
            <ScoreBoard />

            <div className="game-board w-96 h-96 bg-slate-600 m-auto flex flex-wrap justify-center items-center">
                {boardState.map((cell, index) => (
                    <GameCell key={index} index={index} />
                ))}
            </div>

            <DashBoard />

        </div>

        

    )
}

