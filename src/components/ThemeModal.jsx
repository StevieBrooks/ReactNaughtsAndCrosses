import { FaX, FaLeftLong } from "react-icons/fa6"
import { useContext, useState } from "react"
import { GameState } from "../ContextFile"
import Button from "./Button"

export default function ThemeModal() {

    const [player, setPlayer, boardState, setBoardState, result, setResult, gameActive, setGameActive, gameMessage, setGameMessage, menuActive, setMenuActive, assignActive, setAssignActive, resetActive, setResetActive, themeActive, setThemeActive, playerNames, setPlayerNames, gameTheme, setGameTheme]= useContext(GameState)

    const [themeChoice, setThemeChoice] = useState("")

    const goBack = () => {
        setThemeActive(false)
        setMenuActive(true)
    }

    const themeSelect = (e) => {
        e.preventDefault()
        setGameTheme(themeChoice)
        setThemeActive(false)
    }


    return (
        <div className="theme-modal-overlay bg-darkblue opacity-95 text-orange fixed top-0 w-full h-full">
            <div className="theme-modal">
                <div className="theme-modal-content">
                    <header className="flex justify-between p-5">
                        <Button btnTitle={<FaLeftLong size={28} />} btnFunction={goBack} />
                        <Button btnTitle={<FaX size={28} />} btnFunction={() => setThemeActive(false)} /> 
                    </header>

                    <main className="flex flex-col items-center">

                        <h1 className="font-bold text-3xl sm:text-5xl my-5">Select Theme</h1>

                        <form className="flex flex-col text-2xl" onSubmit={themeSelect}>

                            <label htmlFor="basic" className="flex justify-between my-3 hover:cursor-pointer">Basic
                                <input className="hover:cursor-pointer" type="radio" name="themeButton" id="basic" onChange={(e) => setThemeChoice(e.target.id)} defaultChecked />
                            </label>
                            
                            <label htmlFor="daynight" className="flex justify-between my-3 hover:cursor-pointer">Day / Night
                                <input className="hover:cursor-pointer" type="radio" name="themeButton" id="daynight" onChange={(e) => setThemeChoice(e.target.id)}  />
                            </label>

                            <label htmlFor="unitedcity" className="flex justify-between my-3 hover:cursor-pointer">United / City
                                <input className="hover:cursor-pointer" className="ms-5" type="radio" name="themeButton" id="unitedcity" onChange={(e) => setThemeChoice(e.target.id)}  />
                            </label>

                            <label htmlFor="catsdogs" className="flex justify-between my-3 hover:cursor-pointer">Cats / Dogs
                                <input className="hover:cursor-pointer" type="radio" name="themeButton" id="catsdogs" onChange={(e) => setThemeChoice(e.target.id)}  />
                            </label>

                            <Button btnType="submit" btnTitle="Submit" />

                        </form>

                    </main>
                </div>
            </div>
        </div>
    )
}