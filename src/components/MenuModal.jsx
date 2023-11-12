import { FaX } from "react-icons/fa6"
import { useContext } from "react"
import { GameState } from "../ContextFile"
import Button from "./Button"

export default function MenuModal() {

    const [player, setPlayer, boardState, setBoardState, result, setResult, gameActive, setGameActive, gameMessage, setGameMessage, menuActive, setMenuActive, assignActive, setAssignActive, resetActive, setResetActive, themeActive, setThemeActive, playerNames, setPlayerNames] = useContext(GameState)
    
    const assignFunc = () => {
        setAssignActive(true)
        setMenuActive(false)
    }

    const resetFunc = () => {
        setResetActive(true)
        setMenuActive(false)
    }

    const themeFunc = () => {
        setThemeActive(true)
        setMenuActive(false)
    }

    return (
        <div className="menu-modal-overlay bg-black text-white fixed top-0 w-full h-full">
            <div className="menu-modal">
                <div className="menu-modal-content">
                    <header>
                        <h1>Menu</h1>
                        <Button btnTitle={<FaX />} btnFunction={() => setMenuActive(false)} /> 
                    </header>
                    <main>
                        <ul>
                            <li onClick={assignFunc}>Assign Players</li>
                            <li onClick={resetFunc}>Reset</li>
                            <li onClick={themeFunc}>Theme</li>
                        </ul>
                    </main>
                </div>
            </div>
        </div>
    )
}