import { Link, NavLink } from "react-router-dom"

export default function NavBar() {

    return (

        <>
            <NavLink className="navbar-brand " to="/">Home</NavLink>
            <NavLink className="navbar-brand " to="/create">New Movie</NavLink>


        </>


    )



}