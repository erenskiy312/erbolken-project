import { Suspense, useContext, useState } from "react"
import { Route, Routes, Link } from "react-router-dom"
import "./styles/index.scss"
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async"
import { MainPageAsync } from "./pages/MainPage/MainPage.async"
import { ThemeContext } from "./theme/ThemeContext"

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}

export default function App() {

    const {theme, setTheme} = useContext(ThemeContext)

    const toggleTheme = () => {
        setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)
    }


  return (
    <div className={`app ${theme}`}>
        <button onClick={toggleTheme}>THEME</button>
        <Link to={"/"}>Главная</Link>
        <Link to={"/about"}>О сайте</Link>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path={"/about"} element={<AboutPageAsync/>}/>
                <Route path={"/"} element={<MainPageAsync/>}/>
            </Routes>
      </Suspense>
    </div>
  )
}
