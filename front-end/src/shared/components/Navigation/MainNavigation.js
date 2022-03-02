import React,{useState} from "react";
import { Link } from "react-router-dom";

import NavLink from "./NavLinks";
import SideDrawer from "./SideDrawer";
import MainHeader from "./MainHeader";
import './MainNavigation.css';
import BackDrop from "../UIElements/Backdrop";

const MainNavigation = props => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);
    const openDrawerHandler = () =>{
        setDrawerIsOpen(true);
    };
    const closeDrawerHandler =()=>{
        setDrawerIsOpen(false);
    }
    return (
        <React.Fragment>
            {drawerIsOpen && <BackDrop onClick={openDrawerHandler}/> }
            <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
                <nav className="main-navigation__drawer-nav">
                <NavLink />
                </nav>
            </SideDrawer>
            <MainHeader>
                <button className="main-navigation__menu-btn" onClick={openDrawerHandler}>
                    <span />
                    <span />
                    <span />
                </button>
                <h1 className="main-navigation_title"> <Link to="/">Your Places</Link></h1>
                <nav className="main-navigation__header-nav">
                <NavLink />
                </nav>
            </MainHeader>
        </React.Fragment>
        )
        
};

export default MainNavigation;