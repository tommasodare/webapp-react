import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import DefaultLayout from "./layouts/DefaultLayout.jsx"
import HomePage from "./pages/HomePage.jsx"
import MoviePage from "./pages/MoviePage.jsx"
import GlobalContext from "./contexts/GlobalContext.jsx"
import CreateMovie from "../admin/CreateMovie.jsx"

export default function App() {

  const [isLoading, setIsLoading] = useState(true) // se è true sta caricando la pagina

  return (

    <>

      <GlobalContext.Provider value={{ isLoading, setIsLoading }}>

        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route path="/" Component={HomePage} />
              <Route path="/:id" Component={MoviePage} />
              <Route path="/create" Component={CreateMovie} />

            </Route>
          </Routes>
        </BrowserRouter>

      </GlobalContext.Provider>


    </>

  )

}
