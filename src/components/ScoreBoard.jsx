import { useContext } from "react"
import { GameState } from "../ContextFile"
export default function ScoreBoard() {

    const [player, setPlayer, boardState, setBoardState, result, setResult, gameActive, setGameActive, gameMessage, setGameMessage, menuActive, setMenuActive, assignActive, setAssignActive, resetActive, setResetActive, themeActive, setThemeActive, playerNames, setPlayerNames, gameTheme, setGameTheme]= useContext(GameState)

    return (<>
        {gameActive || gameMessage == "" ? 
            <div className="scoreboard w-72 sm:w-96 bg-darkblue text-yellow m-auto flex flex-wrap justify-around items-center py-3">
            <h3 className={`${player === 1 && "bg-green-500"}`}>{playerNames[0]}: <span>{result[0]}</span></h3>
            <h3 className={`${player === 2 && "bg-green-500"}`}>{playerNames[1]}: <span>{result[1]}</span></h3>
        </div>    : 
        <div className="scoreboard w-72 sm:w-96 bg-darkblue text-yellow m-auto flex flex-wrap justify-around items-center py-3">{gameMessage}</div>  
    }
    </>
        
        
    )
}

// need new state for player names, then use at H3 innerHTML and for setting gameMessage