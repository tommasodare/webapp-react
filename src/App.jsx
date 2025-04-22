import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout.jsx"
import HomePage from "./pages/HomePage.jsx"
import MoviePage from "./pages/MoviePage.jsx"
import GlobalContext from "./contexts/GlobalContext.jsx"

export default function App() {

  return (

    <>

      <GlobalContext.Provider>

        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route path="/" Component={HomePage} />
              <Route path="/:id" Component={MoviePage} />
            </Route>
          </Routes>
        </BrowserRouter>

      </GlobalContext.Provider>


    </>

  )

}
