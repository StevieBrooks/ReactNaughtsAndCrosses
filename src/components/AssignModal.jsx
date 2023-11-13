import { FaX } from "react-icons/fa6"
import { useContext, useState } from "react"
import { GameState } from "../ContextFile"
import Button from "./Button"

export default function AssignModal() {

    const [player, setPlayer, boardState, setBoardState, result, setResult, gameActive, setGameActive, gameMessage, setGameMessage, menuActive, setMenuActive, assignActive, setAssignActive, resetActive, setResetActive, themeActive, setThemeActive, playerNames, setPlayerNames, gameTheme, setGameTheme]= useContext(GameState)

    const [playerOne, setPlayerOne] = useState()
    const [playerTwo, setPlayerTwo] = useState()

    const assignPlayersFunc = (e) => {
        e.preventDefault()
        setPlayerNames([playerOne || "P1", playerTwo || "P2"])
        setAssignActive(false)
    }

    return (
        <div className="assign-modal-overlay bg-black text-white fixed top-0 w-full h-full">
            <div className="assign-modal">
                <div className="assign-modal-content">
                    <header>
                        <h1>Assign Players</h1>
                        <Button btnTitle={<FaX />} btnFunction={() => setAssignActive(false)} /> 
                    </header>
                    <main>
                        <form onSubmit={assignPlayersFunc}>
                            <input type="text" className="text-gray-600" onChange={(e) => setPlayerOne(e.target.value)} placeholder="Player 1" />
                            <input type="text" className="text-gray-600" onChange={(e) => setPlayerTwo(e.target.value)} placeholder="Player 2" />
                            <Button btnTitle="Submit" btnType="submit" />
                        </form>
                    </main>
                </div>
            </div>
        </div>
    )
}

// this could be tricky, come back later