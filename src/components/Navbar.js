import React from "react"
import ReactSmall from "../images/react-icon-small.png"

export default function Navbar(props){
    return (
        <nav className={props.darkMode ? "dark" : ""}>
            <img src={ReactSmall} className="nav--logo_icon" alt=""/>
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
            <div className="toggler">
                <p className="toggler--light">Light</p>
                <div className="toggler--slider" onClick={props.toggleDarkMode}>
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )
}