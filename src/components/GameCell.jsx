import { useContext, useEffect } from "react"
import { GameState } from "../ContextFile"
import { FaO, FaX } from "react-icons/fa6"
import sun from "../images/sun.png"
import moon from "../images/moon.png"
import unitedShirt from "../images/unitedShirt.png"
import cityShirt from "../images/cityShirt.png"
import cat from "../images/cat.png"
import dog from "../images/dog.png"

export default function GameCell( { index } ) {

    const [player, setPlayer, boardState, setBoardState, result, setResult, gameActive, setGameActive, gameMessage, setGameMessage, menuActive, setMenuActive, assignActive, setAssignActive, resetActive, setResetActive, themeActive, setThemeActive, playerNames, setPlayerNames, gameTheme, setGameTheme]= useContext(GameState)

    const clickHandler = (e) => {
        const cellToAlter = e.target.classList[0]
        if(boardState[cellToAlter] !== null) {
            setGameActive(false)
            setGameMessage("Please choose another cell")
        } else {
            const updatedBoardState = [...boardState]
            updatedBoardState[cellToAlter] = player
            setBoardState(updatedBoardState)
            setPlayer(player === 1 ? 2 : 1)
            setGameActive(true)
        }
    }

    // const oneCells = () => {
    //     switch(gameTheme) {
    //         case "basic":
    //             return <FaO style={{display: "block"}} />;
    //             break;
    //         case "daynight":
    //             return sun;
    //             break;
    //     }
    // } COME BACK TO THIS LATER, NEED TO CHANGE ICONS DEPENDING ON THEME
    

    return (
        <div className={`${index} game-cell w-20 sm:w-28 h-20 sm:h-28 m-2 bg-lightblue text-darkblue flex justify-center items-center rounded-md transition-transform hover:-translate-y-0.5`} onClick={clickHandler}>
            {
               boardState[index] === 1 ? <FaO style={{display: "block"}} /> : boardState[index] === 2 ? <FaX style={{display: "block"}} /> : null

            }
            
        </div>
    )
}