import React from "react";
import "./header.css";
import bgImg from "../../assets/profile.png"

const Header = () => {
    return (
        <section id="head">
            <div className="headContent">
                <span className="headText">Hello,</span>
                <span>I'm <span style={{ color: "#997007" }}>Fabiha Tuheen</span> <br/>A Full-Stack Developer</span>
                <p className="headText" style={{ fontSize: "medium" }}>I am skilled in developing ...</p>
            </div>
            <img src={bgImg} alt="profile" className="bgImg" />
        </section>
    )
}

export default Header;