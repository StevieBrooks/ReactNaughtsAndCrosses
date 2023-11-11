import { FaX } from "react-icons/fa6"
import { useContext } from "react"
import { GameState } from "../ContextFile"
import Button from "./Button"

export default function AssignModal() {

    const [player, setPlayer, boardState, setBoardState, result, setResult, gameActive, setGameActive, gameMessage, setGameMessage, menuActive, setMenuActive, assignActive, setAssignActive, resetActive, setResetActive, themeActive, setThemeActive] = useContext(GameState)

    const assignPlayersFunc = () => {

    }

    return (
        <div className="assign-modal-overlay bg-black text-white fixed top-0 w-full h-full">
            <div className="assign-modal">
                <div className="assign-modal-content">
                    <header>
                        <h1>Assign Players</h1>
                        <Button btnTitle={<FaX />} btnFunction={() => setAssignActive(false)} /> 
                    </header>
                    <main>
                        <form onSubmit={assignPlayersFunc}>
                            
                        </form>
                    </main>
                </div>
            </div>
        </div>
    )
}

// this could be tricky, come back later