import { useContext, useState } from "react"
import { GameState } from "../ContextFile"
import GameCell from "./GameCell"
import ScoreBoard from "./ScoreBoard"
import DashBoard from "./DashBoard"
import ResetModal from "./ResetModal"

export default function GameBoard() {

    const [player, setPlayer, boardState, setBoardState, result, setResult, gameActive, setGameActive, gameMessage, setGameMessage, resetActive, setResetActive] = useContext(GameState)

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

