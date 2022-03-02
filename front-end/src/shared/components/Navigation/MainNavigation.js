import React from "react";
import { Link } from "react-router-dom";
import NavLink from "./NavLinks";
import SideDrawer from "./SideDrawer";

import MainHeader from "./MainHeader";

import './MainNavigation.css';
import react from "react";

const MainNavigation = props => {
    return (
        <React.Fragment>
            <SideDrawer>
                <nav className="main-navigation__drawer-nav">
                <NavLink />
                </nav>
            </SideDrawer>
            <MainHeader>
                <button className="main-navigation_menu-btn">
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