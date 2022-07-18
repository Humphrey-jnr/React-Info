import React from "react";
import logo from "../images/logo192.png";


const Nav = () => {
    return(
        <header className="header">
            <div>
                <img alt="logo" src={logo}/>
                <h3>ReactFacts</h3>
            </div>
            <h4>React Course - Project 1</h4>

        </header>
    )
}


export default Nav;