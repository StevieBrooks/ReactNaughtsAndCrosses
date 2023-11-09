import Button from "./Button"
import { useContext, useState } from "react"
import { GameState } from "../ContextFile"
import ResetModal from "./ResetModal"

export default function DashBoard() {

    const [player, setPlayer, boardState, setBoardState, result, setResult, gameActive, setGameActive, gameMessage, setGameMessage, resetActive, setResetActive] = useContext(GameState)

    const resetFunc = () => {
        setResetActive(true)
        
        // setBoardState([
        //     null, null, null, null, null, null, null, null, null
        // ])
        // setResult([0, 0])
    }

    return (

        <div className="dashboard w-96 m-auto bg-slate-300 flex justify-center">
            <Button btnTitle="Reset" btnFunction={resetFunc} />
        </div>
    
    )
}

