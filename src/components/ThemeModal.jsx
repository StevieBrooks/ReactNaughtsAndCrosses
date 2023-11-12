import { FaX } from "react-icons/fa6"
import { useContext } from "react"
import { GameState } from "../ContextFile"
import Button from "./Button"

export default function ThemeModal() {

    const [player, setPlayer, boardState, setBoardState, result, setResult, gameActive, setGameActive, gameMessage, setGameMessage, menuActive, setMenuActive, assignActive, setAssignActive, resetActive, setResetActive, themeActive, setThemeActive, playerNames, setPlayerNames] = useContext(GameState)


    return (
        <div className="theme-modal-overlay bg-black text-white fixed top-0 w-full h-full">
            <div className="theme-modal">
                <div className="theme-modal-content">
                    <header>
                        <h1>Select Theme</h1>
                        <Button btnTitle={<FaX />} btnFunction={() => setThemeActive(false)} /> 
                    </header>
                    <main>
           
                    </main>
                </div>
            </div>
        </div>
    )
}