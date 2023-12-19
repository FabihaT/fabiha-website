import React from "react";
import "./about.css";
import WebDesign from "../../assets/webdev.png";
import AppDesign from "../../assets/softwaredev.png"
import DevOps from "../../assets/devop.png";
import DataSci from "../../assets/dataanalytic.png";

const About = () => {
    return (
        <section id="skills">
            <h2 className="skillTitle">About Me</h2>
            <span className="skillDesc">
                I am a 3rd year student at the University of Calgary majoring in Software Engineering. I was intrigued  
                in app and web design and development since high school and I love to continuously improve my technical skills through team 
                and personal projects. I look forward to professional opportunities in Software Engineering where I can enhance my current 
                skills, learn new ones, and work in a fun and dynamic engineering environment.
            </span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillImg" />
                    <div className="skillBarText">
                        <h2>Web Design</h2>
                        <p><b>Front-End:</b> JavaScript, HTML/CSS, React, Material-UI</p>
                        <p><b>Back-End:</b> Node.js, SpringBoot, SQL</p>
                        <p><b>Frameworks:</b> WordPress</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className="skillImg" />
                    <div className="skillBarText">
                        <h2>App Design</h2>
                        <p><b>Languages:</b> Python, Java, C/C++, SQL</p>
                        <p><b>Frameworks:</b> Kivy, Java Swing</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={DataSci} alt="DataSci" className="skillImg" />
                    <div className="skillBarText">
                        <h2>Data Science and Analytics</h2>
                        <p><b>Languages:</b> Python</p>
                        <p><b>Libraries:</b> Numpy, Matplotlib, Pandas</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={DevOps} alt="DevOps" className="skillImg" />
                    <div className="skillBarText">
                        <h2>Developer Tools</h2>
                        <p>VS Code, Visual Studio, Eclipse, Google Cloud Platform, Amazon Web Services</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About