import { FaX } from "react-icons/fa6"
import { useContext } from "react"
import { GameState } from "../ContextFile"
import Button from "./Button"

export default function ResetModal() {

    const [player, setPlayer, boardState, setBoardState, result, setResult, gameActive, setGameActive, gameMessage, setGameMessage, menuActive, setMenuActive, assignActive, setAssignActive, resetActive, setResetActive, themeActive, setThemeActive, playerNames, setPlayerNames, gameTheme, setGameTheme]= useContext(GameState)

    const resetThis = () => {
        setBoardState(Array(9).fill(null))
        setPlayer(1)
        setResetActive(false)
    }

    const resetAll = () => {
        setBoardState(Array(9).fill(null))
        setResult([0, 0])
        setPlayer(1)
        setPlayerNames(["P1", "P2"])
        setResetActive(false)
    }

    return (
        <div className="reset-modal-overlay bg-black text-white fixed top-0 w-full h-full">
            <div className="reset-modal">
                <div className="reset-modal-content">
                    <header>
                        <h1>Reset this game or all?</h1>
                        <Button btnTitle={<FaX />} btnFunction={() => setResetActive(false)} /> 
                    </header>
                    <main>
                        <Button btnTitle="This game" btnFunction={() => resetThis()} />
                        <Button btnTitle="All games" btnFunction={() => resetAll()} />
                    </main>
                </div>
            </div>
        </div>
    )
}