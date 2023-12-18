import React, { useState, useEffect } from "react";
import "./header.css";
import bgImg from "../../assets/profile.jpg"

const Header = () => {
    const fullText = "  A Full-Stack Developer";
    const [typedText, setTypedText] = useState("");

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index < fullText.length) {
                setTypedText((typed) => typed + fullText.charAt(index));
                index++;
            } else {
                clearInterval(timer); // Stop the timer when the full text is displayed
            }
        }, 200); // The speed of typing, in milliseconds

        // Clean up the interval on unmount
        return () => clearInterval(timer);
    }, [fullText]);

    return (
        <section id="head">
            <div className="headContent">
                <span className="headText">Hello,</span>
                <span>I'm <span style={{ color: "#997007" }}>Fabiha Tuheen</span></span>
                <span>{typedText}</span>
                <p className="headText" style={{ fontSize: "medium" }}>I am passionate about bringing optimized, maintainable, creative, and user-friendly software application and web designs to life.</p>
            </div>
            <img src={bgImg} alt="profile" className="bgImg" />
        </section>
    )
}

export default Header;