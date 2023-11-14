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
        if(gameTheme === "basic") {
            document.body.style.backgroundColor = "#fb8500"
        } else {
            document.body.style.backgroundImage = `url(${getThemeImage(gameTheme)})`
            document.body.style.backgroundSize = "cover"
            document.body.style.backgroundRepeat = "no-repeat"
            document.body.style.backgroundPosition = "center"
        }
    }, [gameTheme])

    const getThemeImage = (theme) => {
        switch(theme) {
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

/**BUGS
 - when resetting all games, theme is not set back to basic for bg - reset modal
 - the 'basic' radio button is deffo causing bugs. if user doesn't actually select it themselves on theme select, then can't see basic icons
 */

/*IDEAS
 - add dropdown to change theme
 - form so players can punch in their own names for scoreboard
 - reset one game or entire match
 - extra points for actiing quickly
 - commy picks random player to go first
*/

/*
    Set Up Your React Project:
Start by creating a new React project using a tool like Create React App or your preferred setup.

Component Structure:
Define the component structure for your Tic-Tac-Toe game. You'll likely need components for the game board, individual cells, and the game status.

State Management with useContext:
Create a context that will hold the game state. This context can include information about the current player, the state of the game board, and the game result (e.g., who won or if it's a draw).

Initialize the Game State:
In your context provider, set up the initial state for the game, including an empty board and the starting player (e.g., "X" or "O").

Implement Game Logic:
Write the logic for the game. This includes handling player moves, checking for a win or a draw, and updating the game state accordingly. Make use of the context to manage this state.

Render the Game Board:
Create the game board component that renders the Tic-Tac-Toe grid. Each cell can be a separate component. Use the state from your context to determine what each cell should display (e.g., "X" or "O").

Handle Player Moves:
Implement a function that allows players to make moves when they click on an empty cell. This function should update the game state.

Check for a Win or Draw:
Create a function that checks the game board for a win condition (three in a row for a player) or a draw condition (no more empty cells). Update the game state accordingly.

Display Game Status:
Create a component to display the game status. Show messages like "Player X's turn," "Player O wins," or "It's a draw" based on the game state.

Restart the Game:
Add a button or a feature that allows players to restart the game once it's over. Reset the game state to the initial state.

Styling:
Style your Tic-Tac-Toe game to make it visually appealing. You can use CSS or a UI library like Material-UI to enhance the user interface.

Testing:
Test your game by playing it to make sure the logic works correctly. Check for any edge cases and handle them appropriately.

Refinements and Additional Features:
As you become more comfortable with the basics, consider adding features like keeping track of the score, allowing players to enter their names, or implementing an AI opponent for single-player mode.
*/