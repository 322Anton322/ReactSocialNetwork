import React from "react";
import  navModule from "./Nav.module.css";
import {NavLink} from "react-router-dom"


const Navbar = () =>{
    return(
        <nav className={navModule.nav}>
        <div className={navModule.item}>
          <NavLink to="/profile" className = { navData => navData.isActive ? navModule.active : navModule.item }>Profile</NavLink>
        </div>
        <div className={navModule.item}>
          <NavLink to="/dialogs" className={ navData => navData.isActive ? navModule.active : navModule.item }>Messages</NavLink>
        </div>
        <div className={navModule.item}>
          <NavLink to="/news" className={ navData => navData.isActive ? navModule.active : navModule.item }>News</NavLink>
        </div>
        <div className={navModule.item}>
          <NavLink to="/music" className={ navData => navData.isActive ? navModule.active : navModule.item }>Music</NavLink>
        </div>
        <div className={navModule.item}>
          <NavLink to="/settings" className={ navData => navData.isActive ? navModule.active : navModule.item }>Settings</NavLink>
        </div>
      </nav>
    )
}


export default Navbar;