import { useContext } from "react"
import { GameState } from "../ContextFile"
export default function ScoreBoard() {

    const [player, setPlayer, boardState, setBoardState, result, setResult] = useContext(GameState)

    return (

        <div className="scoreboard w-96 bg-slate-300 m-auto flex flex-wrap justify-around items-center">
            <h3 className={`${player === 1 && "bg-green-500"}`}>P1: <span>00</span></h3>
            <h3 className={`${player === 2 && "bg-green-500"}`}>P2: <span>00</span></h3>
        </div>
    )
}

// should build form so players can name themselves