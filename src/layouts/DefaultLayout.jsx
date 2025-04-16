import { Outlet } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";

export default function DefaultLayout() {

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