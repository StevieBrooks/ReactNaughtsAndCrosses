import { FaX, FaLeftLong } from "react-icons/fa6"
import { useContext, useState } from "react"
import { GameState } from "../ContextFile"
import Button from "./Button"

export default function AssignModal() {

    const [player, setPlayer, boardState, setBoardState, result, setResult, gameActive, setGameActive, gameMessage, setGameMessage, menuActive, setMenuActive, assignActive, setAssignActive, resetActive, setResetActive, themeActive, setThemeActive, playerNames, setPlayerNames, gameTheme, setGameTheme]= useContext(GameState)

    const [playerOne, setPlayerOne] = useState()
    const [playerTwo, setPlayerTwo] = useState()

    const goBack = () => {
        setAssignActive(false)
        setMenuActive(true)
    }

    const assignPlayersFunc = (e) => {
        e.preventDefault()
        setPlayerNames([playerOne || "P1", playerTwo || "P2"])
        setAssignActive(false)
    }

    return (
        <div className="assign-modal-overlay bg-darkblue opacity-95 text-orange fixed top-0 w-full h-full">
            <div className="assign-modal">
                <div className="assign-modal-content">
                    <header className="flex justify-between p-5">
                        <Button btnTitle={<FaLeftLong size={28} />} btnFunction={goBack} />
                        <Button btnTitle={<FaX size={28} />} btnFunction={() => setAssignActive(false)} /> 
                    </header>
                    <main className="flex flex-col items-center">
                        <h1 className="font-bold text-3xl sm:text-5xl my-5">Assign Players</h1>
                        <form className="flex flex-col mt-5" onSubmit={assignPlayersFunc}>
                            <input type="text" className="text-lightblue bg-darkblue border border-orange rounded-md my-2 px-2 py-1" onChange={(e) => setPlayerOne(e.target.value)} placeholder="Player 1" />
                            <input type="text" className="text-lightblue bg-darkblue border border-orange rounded-md my-2 px-2 py-1" onChange={(e) => setPlayerTwo(e.target.value)} placeholder="Player 2" />
                            <Button btnTitle="Submit" btnType="submit" />
                        </form>
                    </main>
                </div>
            </div>
        </div>
    )
}

// this could be tricky, come back later