import "./App.css"
import { useState, useEffect } from "react"
import GameBoard from "./components/GameBoard"
import { GameState } from "./ContextFile"

export default function App() {

    const [player, setPlayer] = useState(1)
    const [boardState, setBoardState] = useState(Array(9).fill(null))
    const [result, setResult] = useState([0, 0])
    const [gameActive, setGameActive] = useState(false)
    const [gameMessage, setGameMessage] = useState("Naughts & Crosses")
    const [menuActive, setMenuActive] = useState(false)
    const [assignActive, setAssignActive] = useState(false)
    const [resetActive, setResetActive] = useState(false)
    const [themeActive, setThemeActive] = useState(false)
    const [playerNames, setPlayerNames] = useState(["P1", "P2"])
    const [gameTheme, setGameTheme] = useState("basic")

    useEffect(() => {
            document.body.style.backgroundImage = `url(${getThemeImage(gameTheme)})`
            document.body.style.backgroundSize = "cover"
            document.body.style.backgroundRepeat = "no-repeat"
            document.body.style.backgroundPosition = "center"
    }, [gameTheme])

    const getThemeImage = (theme) => {
        switch(theme) {
            case "basic":
                return require("./images/basicBG.jpg");
                break;
            case "daynight":
                return require("./images/dayNightBG.jpg");
                break;
            case "unitedcity":
                return require("./images/footyBG.jpg");
                break;
            case "catsdogs":
                return require("./images/catsDogsBG.jpg");
                break;
            
        }
    }

    gameMessage.length > 0 && setTimeout(function() {
        setGameMessage("")
    }, 3000)

    return (<>
        <GameState.Provider value={[player, setPlayer, boardState, setBoardState, result, setResult, gameActive, setGameActive, gameMessage, setGameMessage, menuActive, setMenuActive, assignActive, setAssignActive, resetActive, setResetActive, themeActive, setThemeActive, playerNames, setPlayerNames, gameTheme, setGameTheme]}>
            <GameBoard />
        </GameState.Provider>
    </>)
}

