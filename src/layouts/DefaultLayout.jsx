import { Outlet } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext.jsx";
import LoaderComponent from "../components/LoaderComponent.jsx";

export default function DefaultLayout() {

    const { isLoading } = useContext(GlobalContext)


    return (

        <>

            <Header></Header>

            <main>

                {
                    isLoading && (
                        <LoaderComponent></LoaderComponent>
                    )

                }

                <Outlet />

            </main>

            <Footer></Footer>

        </>
    )


}