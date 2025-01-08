import { Suspense } from "react"
import { Route, Routes, Link } from "react-router-dom"
import "./index.scss"
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async"
import { MainPageAsync } from "./pages/MainPage/MainPage.async"

export default function App() {
  return (
    <div className="app">
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
