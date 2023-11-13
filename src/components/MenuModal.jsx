import { FaX } from "react-icons/fa6"
import { useContext } from "react"
import { GameState } from "../ContextFile"
import Button from "./Button"

export default function MenuModal() {

    const [player, setPlayer, boardState, setBoardState, result, setResult, gameActive, setGameActive, gameMessage, setGameMessage, menuActive, setMenuActive, assignActive, setAssignActive, resetActive, setResetActive, themeActive, setThemeActive, playerNames, setPlayerNames, gameTheme, setGameTheme]= useContext(GameState)
    
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
        <div className="menu-modal-overlay bg-darkblue opacity-95 text-orange fixed top-0 w-full h-full">
            <div className="menu-modal">
                <div className="menu-modal-content">
                    <header className="flex justify-end p-5">
                        <Button btnTitle={<FaX />} btnFunction={() => setMenuActive(false)} /> 
                    </header>
                    <main className="flex flex-col items-center">
                        <h1 className="font-bold text-3xl sm:text-5xl mt-5 mb-3">Menu</h1>
                        <ul className="flex flex-col items-center">
                            <li className="font-semibold text-xl sm:text-2xl my-2 sm:my-3 hover:cursor-pointer transition-colors hover:text-yellow" onClick={assignFunc}>Assign Players</li>
                            <li className="font-semibold text-xl sm:text-2xl my-2 sm:my-3 hover:cursor-pointer transition-colors hover:text-yellow" onClick={themeFunc}>Select Theme</li>
                            <li className="font-semibold text-xl sm:text-2xl my-2 sm:my-3 hover:cursor-pointer transition-colors hover:text-yellow" onClick={resetFunc}>Reset</li>
                            
                        </ul>
                    </main>
                </div>
            </div>
        </div>
    )
}