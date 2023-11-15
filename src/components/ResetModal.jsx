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
        setGameTheme("basic")
        setResetActive(false)
    }

    const bgStyling = (theme) => {
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
        <div className={`reset-modal-overlay opacity-95 fixed top-0 w-full h-full ${bgStyling(gameTheme)} ${textStyling(gameTheme)}`}>
            <div className="reset-modal">
                <div className="reset-modal-content">
                    <header className="flex justify-between p-5">
                        <Button btnTitle={<FaLeftLong size={28} />} btnFunction={goBack} />
                        <Button btnTitle={<FaX size={28} />} btnFunction={() => setResetActive(false)} /> 
                    </header>

                    <main className="flex flex-col items-center">
                        <h1 className="font-bold text-3xl sm:text-5xl my-5">Reset</h1>
                        <ul>
                            <li className="text-lg sm:text-2xl mb-3 hover:cursor-pointer hover:underline" onClick={() => resetThis()}>This game</li>
                            <li className="text-lg sm:text-2xl mb-3 hover:cursor-pointer hover:underline" onClick={() => resetAll()}>All games</li>
                        </ul>
                    </main>
                </div>
            </div>
        </div>
    )
}

// might use form with radio buttons for this instead...for consistency