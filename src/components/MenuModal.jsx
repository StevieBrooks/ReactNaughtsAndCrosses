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

    const textStyling = (theme) => {
        switch(theme) {
            case "basic":
                return "text-orange";
                break;
            case "daynight":
                return "text-dn1";
                break;
            case "unitedcity":
                return "text-uc2";
                break;
            case "catsdogs":
                return "text-cd1";
                break;
        }
    }

    const hoverTextStyling = (theme) => {
        switch(theme) {
            case "basic":
                return "hover:text-yellow";
                break;
            case "daynight":
                return "hover:text-dn2";
                break;
            case "unitedcity":
                return "hover:text-uc3";
                break;
            case "catsdogs":
                return "hover:text-cd4";
                break;
        }
    }

    return (
        <div className={`menu-modal-overlay opacity-95 fixed top-0 w-full h-full ${bgStyling(gameTheme)} ${textStyling(gameTheme)}`}>
            <div className="menu-modal">
                <div className="menu-modal-content">
                    <header className="flex justify-end p-5">
                        <Button btnTitle={<FaX size={28} />} btnFunction={() => setMenuActive(false)} /> 
                    </header>
                    <main className="flex flex-col items-center">
                        <h1 className="font-bold text-3xl sm:text-5xl mt-5 mb-3">Menu</h1>
                        <ul className="flex flex-col items-center">
                            <li className={`font-semibold text-xl sm:text-2xl my-2 sm:my-3 hover:cursor-pointer transition-colors ${hoverTextStyling(gameTheme)}`} onClick={assignFunc}>Assign Players</li>
                            <li className={`font-semibold text-xl sm:text-2xl my-2 sm:my-3 hover:cursor-pointer transition-colors ${hoverTextStyling(gameTheme)}`} onClick={themeFunc}>Select Theme</li>
                            <li className={`font-semibold text-xl sm:text-2xl my-2 sm:my-3 hover:cursor-pointer transition-colors ${hoverTextStyling(gameTheme)}`} onClick={resetFunc}>Reset</li>
                            
                        </ul>
                    </main>
                </div>
            </div>
        </div>
    )
}

/**
  will need this for sorting out bg opacity
  https://stackoverflow.com/questions/5770341/i-do-not-want-to-inherit-the-child-opacity-from-the-parent-in-css
 */