import { useContext } from "react";
import { GameState } from "../ContextFile";

export default function Button( { btnTitle, btnFunction, btnType } ) {

    const [player, setPlayer, boardState, setBoardState, result, setResult, gameActive, setGameActive, gameMessage, setGameMessage, menuActive, setMenuActive, assignActive, setAssignActive, resetActive, setResetActive, themeActive, setThemeActive, playerNames, setPlayerNames, gameTheme, setGameTheme]= useContext(GameState)

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

    const borderStyling = (theme) => {
        switch(theme) {
            case "basic":
                return "border border-orange";
                break;
            case "daynight":
                return "border border-dn1";
                break;
            case "unitedcity":
                return "border border-uc2";
                break;
            case "catsdogs":
                return "border border-cd1";
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

    const hoverBorderStyling = (theme) => {
        switch(theme) {
            case "basic":
                return "hover:border-yellow";
                break;
            case "daynight":
                return "hover:border-dn2";
                break;
            case "unitedcity":
                return "hover:border-uc3";
                break;
            case "catsdogs":
                return "hover:border-cd4";
                break;
        }
    }

    return (<>
        <button className={`${btnType === "submit" && `font-bold text-xl rounded-full m-5 py-1 transition-colors ${bgStyling(gameTheme)} ${textStyling(gameTheme)} ${hoverTextStyling(gameTheme)} ${borderStyling(gameTheme)} ${hoverBorderStyling(gameTheme)}`}`} type={btnType} onClick={btnFunction}>{btnTitle}</button>
    </>)
}
