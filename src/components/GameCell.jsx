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
            setGameMessage("This box is taken!")
        } else {
            const updatedBoardState = [...boardState]
            updatedBoardState[cellToAlter] = player
            setBoardState(updatedBoardState)
            setPlayer(player === 1 ? 2 : 1)
            setGameActive(true)
        }
    }

    const iconNeeded = () => {
        if(boardState[index] === 1 && gameTheme === "basic") {
            return <FaO style={{display: "block"}} size={56} color="#023047" />
        } else if(boardState[index] === 2 && gameTheme === "basic") {
            return <FaX style={{display: "block"}} size={56} color="#023047" />
        }
        if(boardState[index] === 1 && gameTheme === "daynight") {
            return <img src={sun}></img>
        } else if(boardState[index] === 2 && gameTheme === "daynight") {
            return <img src={moon}></img>
        }
        if(boardState[index] === 1 && gameTheme === "unitedcity") {
            return <img src={unitedShirt} height="80" width="80"></img>
        } else if(boardState[index] === 2 && gameTheme === "unitedcity") {
            return <img src={cityShirt} height="80" width="80"></img>
        }
        if(boardState[index] === 1 && gameTheme === "catsdogs") {
            return <img src={cat} height="80" width="80"></img>
        } else if(boardState[index] === 2 && gameTheme === "catsdogs") {
            return <img src={dog} height="90" width="90"></img>
        }

    }

    const bgStyling = (theme) => {
        switch(theme) {
            case "basic":
                return "bg-lightblue";
                break;
            case "daynight":
                return "bg-dn3";
                break;
            case "unitedcity":
                return "bg-uc5";
                break;
            case "catsdogs":
                return "bg-cd4";
                break;
        }
    }


    return (
        <div className={`${index} game-cell w-20 sm:w-28 h-20 sm:h-28 m-2 flex justify-center items-center rounded-md transition-transform hover:-translate-y-0.5 hover:cursor-pointer ${bgStyling(gameTheme)}`} onClick={clickHandler}>
            {
                iconNeeded()
            }
            
        </div>
    )
}