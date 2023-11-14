import { useContext, useState, useEffect } from "react"
import { GameState } from "../ContextFile"
import GameCell from "./GameCell"
import ScoreBoard from "./ScoreBoard"
import DashBoard from "./DashBoard"
import MenuModal from "./MenuModal"
import ResetModal from "./ResetModal"
import AssignModal from "./AssignModal"
import ThemeModal from "./ThemeModal"

export default function GameBoard() {

    const [player, setPlayer, boardState, setBoardState, result, setResult, gameActive, setGameActive, gameMessage, setGameMessage, menuActive, setMenuActive, assignActive, setAssignActive, resetActive, setResetActive, themeActive, setThemeActive, playerNames, setPlayerNames, gameTheme, setGameTheme]= useContext(GameState)

    const winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

    useEffect(() => {

        let isWinner = false
        for (let combo of winningCombos) {

            const check1 = combo[0]
            const check2 = combo[1]
            const check3 = combo[2]

            if(boardState[check1] === 1 && boardState[check2] === 1 && boardState[check3] === 1) {
                isWinner = true
                setGameActive(false)
                setGameMessage(`${playerNames[0]} wins!`)
                const updatedResult = [...result]
                updatedResult[0]++
                setResult(updatedResult)
                setPlayer(1)
                setBoardState(Array(9).fill(null))
                break;
            } else if(boardState[check1] === 2 && boardState[check2] === 2 && boardState[check3] === 2) {
                isWinner = true
                setGameActive(false)
                setGameMessage(`${playerNames[1]} wins!`)
                const updatedResult = [...result]
                updatedResult[1]++
                setResult(updatedResult)
                setBoardState(Array(9).fill(null))
                setPlayer(1)
                break;
            } 
        }

        if (!isWinner && boardState.every(item => item !== null)) {
            setGameActive(false);
            setGameMessage("It's a draw!");
            setBoardState(Array(9).fill(null));
            setPlayer(1);
        } 

    }, [boardState])

    const bgStyling = (theme) => {
        console.log(theme)
        switch(theme) {
            case "basic":
                return "bg-darkblue";
                break;
            case "daynight":
                return "bg-dn5";
                break;
            case "unitedcity":
                return "bg-uc4";
                break;
            case "catsdogs":
                return "bg-cd5";
                break;
        }
    }


    return (

        <div className="game-container relative top-5 m-auto">
            <ScoreBoard />

            <div className={`game-board w-72 sm:w-96 h-72 sm:h-96 m-auto flex flex-wrap justify-center items-center ${bgStyling(gameTheme)}`}>
                {boardState.map((cell, index) => (
                    <GameCell key={index} index={index} />
                ))}
            </div>

            <DashBoard />
            {menuActive && <MenuModal />}
            {assignActive && <AssignModal />}
            {resetActive && <ResetModal />}
            {themeActive && <ThemeModal />}

        </div>

        

    )
}

