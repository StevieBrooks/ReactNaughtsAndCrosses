import { FaX, FaLeftLong } from "react-icons/fa6"
import { useContext } from "react"
import { GameState } from "../ContextFile"
import Button from "./Button"

export default function ResetModal() {

    const [player, setPlayer, boardState, setBoardState, result, setResult, gameActive, setGameActive, gameMessage, setGameMessage, menuActive, setMenuActive, assignActive, setAssignActive, resetActive, setResetActive, themeActive, setThemeActive, playerNames, setPlayerNames, gameTheme, setGameTheme]= useContext(GameState)

    const goBack = () => {
        setResetActive(false)
        setMenuActive(true)
    }

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
        <div className="reset-modal-overlay bg-darkblue opacity-95 text-orange fixed top-0 w-full h-full">
            <div className="reset-modal">
                <div className="reset-modal-content">
                    <header className="flex justify-between p-5">
                        <Button btnTitle={<FaLeftLong size={28} />} btnFunction={goBack} />
                        <Button btnTitle={<FaX size={28} />} btnFunction={() => setResetActive(false)} /> 
                    </header>

                    <main className="flex flex-col items-center">
                        <h1 className="font-bold text-3xl sm:text-5xl my-5">Reset</h1>
                        <Button btnTitle="This game" btnFunction={() => resetThis()} />
                        <Button btnTitle="All games" btnFunction={() => resetAll()} />
                    </main>
                </div>
            </div>
        </div>
    )
}

// need to fix button styling