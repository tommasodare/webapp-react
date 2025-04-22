import { Outlet } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext.jsx";

export default function DefaultLayout() {

    const { isLoading } = useContext(GlobalContext)

    if (isLoading) {

        return (

            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="spinner-border">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>

        )

    }

    return (

        <>

            <Header></Header>
            <main>
                <Outlet />
            </main>
            <Footer></Footer>

        </>
    )


}