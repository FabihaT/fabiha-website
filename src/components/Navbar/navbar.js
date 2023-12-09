import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png"
import gitImg from "../../assets/github-logo.png"
import { Link } from "react-scroll";

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className="logo"/>
            <div className="mainMenu">
                <Link className="mainMenuItem">About</Link>
                <Link className="mainMenuItem">Education</Link>
                <Link className="mainMenuItem">Projects</Link>
                <Link className="mainMenuItem">Contact</Link>
            </div>
            <button className="mainMenuBtn">
                <img src={gitImg} alt="github" className="mainMenuImg"/> My Github
            </button>
        </nav>
    )
}

export default Navbar