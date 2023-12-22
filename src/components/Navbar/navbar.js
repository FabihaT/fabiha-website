import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png"
import gitImg from "../../assets/github-logo.png"
import menu from "../../assets/menu.png"
import { Link } from "react-scroll";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className="navbar">
            <img
                src={logo}
                alt="logo"
                className="logo"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            />
            <div className="mainMenu">
                <Link activeClass='active' to="skills" spy={true} smooth={true} offset={-50} duration={500} className="mainMenuItem">About</Link>
                <Link activeClass='active' to="row" spy={true} smooth={true} offset={-50} duration={500} className="mainMenuItem">Education</Link>
                <Link activeClass='active' to="courses" spy={true} smooth={true} offset={-80} duration={500} className="mainMenuItem">Courses</Link>
                <Link activeClass='active' to="work" spy={true} smooth={true} offset={-50} duration={500} className="mainMenuItem">Projects</Link>
                <Link activeClass='active' to="contact" spy={true} smooth={true} offset={-50} duration={500} className="mainMenuItem">Contact</Link>
            </div>
            <button className="mainMenuBtn">
                <a href="https://github.com/FabihaT" target="_blank" rel="noopener noreferrer" className="mainMenuBtn">
                    <img src={gitImg} alt="github" className="mainMenuImg"/> My Github
                </a>
            </button>
            <img
                src={menu}
                alt="Menu"
                className="sideMenu"
                onClick={()=>setShowMenu(!showMenu)}
            />
            <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
                <Link activeClass='active' to="skills" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
                <Link activeClass='active' to="row" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Education</Link>
                <Link activeClass='active' to="courses" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Courses</Link>
                <Link activeClass='active' to="work" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Projects</Link>
                <Link activeClass='active' to="contact" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar