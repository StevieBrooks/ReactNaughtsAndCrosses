import Button from "./Button"
import { useContext, useState } from "react"
import { GameState } from "../ContextFile"
import ResetModal from "./ResetModal"

export default function DashBoard() {

    const [player, setPlayer, boardState, setBoardState, result, setResult, gameActive, setGameActive, gameMessage, setGameMessage, menuActive, setMenuActive, assignActive, setAssignActive, resetActive, setResetActive, themeActive, setThemeActive] = useContext(GameState)

    const menuFunc = () => {
        setMenuActive(true)
    }

    return (

        <div className="dashboard w-72 sm:w-96 m-auto bg-slate-300 flex justify-center py-3">
            {/* <Button btnTitle="Reset" btnFunction={resetFunc} /> */}
            <Button btnTitle="Menu" btnFunction={menuFunc} />
        </div>
    
    )
}

