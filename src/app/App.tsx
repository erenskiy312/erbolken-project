import { Suspense, useContext, useState } from "react"
import { Route, Routes, Link } from "react-router-dom"
import "./styles/index.scss"
import { AboutPageAsync } from "pages/AboutPage/ui/AboutPage.async"
import { MainPageAsync } from "pages/MainPage/ui/MainPage.async"
import { useTheme } from "./providers/ThemeProvider"
import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"
import { classNames } from "shared/lib/classNames/classNames"

export default function App() {
    const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames("app", {}, [theme])}>
        <button onClick={toggleTheme}>THEME</button>
        <Link to={"/"}>Главная</Link>
        <Link to={"/about"}>О сайте</Link>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path={"/about"} element={<AboutPage/>}/>
                <Route path={"/"} element={<MainPage/>}/>
            </Routes>
      </Suspense>
    </div>
  )
}
