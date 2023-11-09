import { useContext } from "react"
import { GameState } from "../ContextFile"
export default function ScoreBoard() {

    const [player, setPlayer, boardState, setBoardState, result, setResult, gameActive, setGameActive, gameMessage, setGameMessage] = useContext(GameState)

    return (<>
        {gameActive || gameMessage == "" ? 
            <div className="scoreboard w-96 bg-slate-300 m-auto flex flex-wrap justify-around items-center py-3">
            <h3 className={`${player === 1 && "bg-green-500"}`}>P1: <span>{result[0]}</span></h3>
            <h3 className={`${player === 2 && "bg-green-500"}`}>P2: <span>{result[1]}</span></h3>
        </div>    : 
        <div className="scoreboard w-96 bg-slate-300 m-auto flex flex-wrap justify-around items-center py-3">{gameMessage}</div>  
    }
    </>
        
        
    )
}

// should build form so players can name themselves