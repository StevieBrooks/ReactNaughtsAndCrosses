import { FaX } from "react-icons/fa6"
import { useContext, useState } from "react"
import { GameState } from "../ContextFile"
import Button from "./Button"

export default function ThemeModal() {

    const [player, setPlayer, boardState, setBoardState, result, setResult, gameActive, setGameActive, gameMessage, setGameMessage, menuActive, setMenuActive, assignActive, setAssignActive, resetActive, setResetActive, themeActive, setThemeActive, playerNames, setPlayerNames, gameTheme, setGameTheme]= useContext(GameState)

    const [themeChoice, setThemeChoice] = useState("")

    const themeSelect = (e) => {
        e.preventDefault()
        setGameTheme(themeChoice)
        setThemeActive(false)
    }


    return (
        <div className="theme-modal-overlay bg-black text-white fixed top-0 w-full h-full">
            <div className="theme-modal">
                <div className="theme-modal-content">
                    <header>
                        <h1>Select Theme</h1>
                        <Button btnTitle={<FaX />} btnFunction={() => setThemeActive(false)} /> 
                    </header>
                    <main>

                        <form onSubmit={themeSelect}>

                            <label htmlFor="basic">Basic
                                <input type="radio" name="themeButton" id="basic" onChange={(e) => setThemeChoice(e.target.id)} defaultChecked />
                            </label>
                            
                            <label htmlFor="daynight">Day / Night
                                <input type="radio" name="themeButton" id="daynight" onChange={(e) => setThemeChoice(e.target.id)}  />
                            </label>

                            <label htmlFor="unitedcity">United / City
                                <input type="radio" name="themeButton" id="unitedcity" onChange={(e) => setThemeChoice(e.target.id)}  />
                            </label>

                            <label htmlFor="catsdogs">Cats / Dogs
                                <input type="radio" name="themeButton" id="catsdogs" onChange={(e) => setThemeChoice(e.target.id)}  />
                            </label>

                            <Button btnType="submit" btnTitle="Submit" />

                        </form>

                    </main>
                </div>
            </div>
        </div>
    )
}