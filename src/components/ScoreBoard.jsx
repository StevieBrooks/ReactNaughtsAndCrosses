import { useContext } from "react"
import { GameState } from "../ContextFile"
export default function ScoreBoard() {

    const [player, setPlayer, boardState, setBoardState, result, setResult, gameActive, setGameActive, gameMessage, setGameMessage, menuActive, setMenuActive, assignActive, setAssignActive, resetActive, setResetActive, themeActive, setThemeActive, playerNames, setPlayerNames, gameTheme, setGameTheme]= useContext(GameState)

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

    return (<>
        {gameActive || gameMessage == "" ? 

            <div className={`scoreboard w-72 sm:w-96 text-2xl font-bold m-auto flex flex-wrap justify-around items-center py-3 rounded-t-md ${bgStyling(gameTheme)} ${textStyling(gameTheme)}`}>

            <h3 className={`${player === 1 && "bg-green-500"}`}>{playerNames[0]}: <span>{result[0]}</span></h3>

            <h3 className={`${player === 2 && "bg-green-500"}`}>{playerNames[1]}: <span>{result[1]}</span></h3>

        </div>   
                 : 

        <div className={`scoreboard w-72 sm:w-96 text-2xl font-bold m-auto flex flex-wrap justify-around items-center py-3 rounded-t-md ${bgStyling(gameTheme)} ${textStyling(gameTheme)}`}>{gameMessage}</div>  

    }
    </>
        
        
    )
}

// NEED TO SORT OUT H3 CLASSNAMES TO HIGHLIGHT PLAYER TURN