import React, {useContext} from "react";
import { Link } from "react-router-dom";
import Auth from "../../../users/pages/Auth";
import { AuthContext } from "../../context/auth-context";


import './NavLinks.css';

const NavLink = props => {

    const auth = useContext(AuthContext);
    console.log(auth);

    return <ul className="nav-links">
        <li>
            <Link to="/users">All Users</Link>
        </li>
        {auth.isLoggedIn && (
        <li>
            <Link to="/u1/places">My Places</Link>
        </li>
        )}
        {auth.isLoggedIn && (
        <li>
            <Link to="/places/new">New Place</Link>
        </li>
        )}
        {!auth.isLoggedIn && (
        <li>
            <Link to="/auth">Authenticate</Link>
        </li>
        )}
    </ul>
}
export default NavLink;