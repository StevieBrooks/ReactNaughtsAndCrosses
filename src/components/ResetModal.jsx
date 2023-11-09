import { FaX } from "react-icons/fa6"
import { useContext } from "react"
import { GameState } from "../ContextFile"

export default function ResetModal() {

    const [player, setPlayer, boardState, setBoardState, result, setResult, gameActive, setGameActive, gameMessage, setGameMessage, resetActive, setResetActive] = useContext(GameState)

    const resetThis = () => {
        setBoardState([
            null, null, null, null, null, null, null, null, null
        ])
        setPlayer(1)
        setResetActive(false)
    }

    const resetAll = () => {
        setBoardState([
            null, null, null, null, null, null, null, null, null
        ])
        setResult([0, 0])
        setPlayer(1)
        setResetActive(false)
    }

    return (
        <div className="reset-modal-overlay bg-black text-white fixed top-0 w-full h-full">
            <div className="reset-modal">
                <div className="reset-modal-content">
                    <header>
                        <h1>Reset this game or all?</h1>
                        <button><FaX /></button>
                    </header>
                    <main>
                        <button onClick={resetThis}>This game</button>
                        <button onClick={resetAll}>All Games</button>
                    </main>
                </div>
            </div>
        </div>
    )
}