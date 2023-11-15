import Button from "./Button"
import { useContext, useState } from "react"
import { GameState } from "../ContextFile"
import ResetModal from "./ResetModal"

export default function DashBoard() {

    const [player, setPlayer, boardState, setBoardState, result, setResult, gameActive, setGameActive, gameMessage, setGameMessage, menuActive, setMenuActive, assignActive, setAssignActive, resetActive, setResetActive, themeActive, setThemeActive, playerNames, setPlayerNames, gameTheme, setGameTheme]= useContext(GameState)

    const menuFunc = () => {
        setMenuActive(true)
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

        <div className={`dashboard w-72 sm:w-96 m-auto transition-colors text-2xl font-bold flex justify-center py-3 rounded-b-md pb-5 ${bgStyling(gameTheme)} ${textStyling(gameTheme)} ${hoverTextStyling(gameTheme)}`}>
            <Button btnTitle="Menu" btnFunction={menuFunc} />
        </div>
    
    )
}

