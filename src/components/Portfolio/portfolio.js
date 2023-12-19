import React, { useState } from 'react';
import './portfolio.css';
import Obituary from "../../assets/obituary.png";
import Flight from "../../assets/obituary.png";
import NoteApp from "../../assets/notes.png";
import Wordle from "../../assets/wordle.png";
import EWR from "../../assets/ewr.png";
import Art from "../../assets/artdb.png";
import Website from "../../assets/ymwebsite.png";

const Portfolio = () => {
    // Add state to handle hover
    const [hovered, setHovered] = useState(null);

    // Array of project information
    const projects = [
        { id: 1, src: Obituary, alt: 'Obituary', title: 'The Last Show', gitLink: 'https://github.com/your_username/last_show', demoLink:'', desc: 'A full-stack obituary system desgined with React and TailwindCSS for a sleek front-end interface and DynamoDB backend provided by AWS. Included features are a seamless integration of AI, cloud computing, and modern web development. Users can generate obituary descriptions with OpenAI GPT-3, apply text to speech using Amazon Polly, and persist data with DynamoDB. A serverless functionality is maintained with AWS Lambda functions.' },
        { id: 2, src: Flight, alt: 'Flight', title: 'Flight Reservation System', gitLink: 'https://github.com/FabihaT/note-app', demoLink:'', desc: 'A full-stack flight reservation system utilizing React and JavaScript for the front-end interface, and MySQL database connected with a SpringBoot framework for the back-end.' },
        { id: 3, src: NoteApp, alt: 'Note App', title: 'SwiftNote', gitLink: 'https://github.com/FabihaT/note-app', demoLink:'', desc: 'This is a simple and easy to use note-taking app which utilizes languages such as HTML, CSS, JavaScript, and React. Users can use many features like creating new notes, editing, saving and persisting in local storage, deleting, and simple searching to filter notes.' },
        { id: 4, src: Wordle, alt: 'Wordle', title: 'Wordle Game', gitLink: 'https://github.com/FabihaT/wordle-game', demoLink:'', desc: 'A word-guessing game where players have five chances to uncover a hidden five-letter word by guessing different combinations, receiving feedback after each attempt. Wordle is developed using a combination of HTML, CSS, and JavaScript. The game leverages event listeners to capture player input and dynamically update the game board. The inclusion of asynchronous behaviors simulates the interaction with APIs, creating a responsive and engaging gaming environment.' },
        { id: 5, src: EWR, alt: 'EWR', title: 'Animal Rescue System', gitLink: 'https://github.com/FabihaT/vet-reservation-project', demoLink:'', desc: 'A Java software application for Example Wildlife Rescue (EWR), which specializes in animals like coyotes, foxes, porcupines, beavers, and raccoons. The application uses object-oriented design and a Graphical User Interface to generate a daily task list for volunteers to efficiently care for the animals in various areas and treatments, addressing EWR\'s need to automate their current manual and error-prone scheduling process. JUnit testing is applied to test the software functionality.' },
        { id: 6, src: Art, alt: 'Art', title: 'Art Museum System', gitLink: 'https://github.com/FabihaT/art-museum-project', demoLink:'', desc: 'A Python application designed to manage and interact with an art-themed MySQL database. The flow was designed with a simple and interactive command-line interface for two primary users: admins and guests. As a guest, you can browse information from a selection of tables stored in the art database. As an admin, you must login with MySQL credentials and select a table to modify. Key admin functions are inserting, updating, and deleting data.' },
        { id: 7, src: Website, alt: 'Website', title: 'YM Sisters Website', link:'https://ymsisters.org/', desc: 'The main website for Young Muslim Sisters, a non-profit organization. This website is designed using a WordPress framework with additional HTML/CSS and JavaScript elements to create a responsive, maintainable, and user-friendly site.' }
    ];
    return (
        <section id='work'>
            <h2 className='workTitle'>My Portfolio</h2>
            <div className='workDesc'>
                These are some of my featured projects which include short overviews of the project and Source Code and Demo links.<br/>
                This is a collection of personal and team projects 
                highlighting the various technical skills and software design strategies I learned throughout my degree. 
                This is, of course, an ongoing portfolio as I hope to gain experience working on industry software development projects on
                a wider scale! Check out my Github link for more projects.
            </div>
            <div className='workCards'>
                {projects.map((project) => (
                    <div 
                        key={project.id}
                        className="workCard"
                        onMouseEnter={() => setHovered(project.id)}
                        onMouseLeave={() => setHovered(null)}
                        style={{ position: 'relative' }}
                    >
                        <img src={project.src} alt={project.alt} className='workImg'/>
                        {hovered === project.id && (
                            <div className='descCard'>
                                <h3>{project.title}</h3><br/>
                                <p>{project.desc}</p><br/>
                                <div className='buttonContainer'>
                                    {project.id === 7 ? (
                                        <a 
                                            href={project.link} // Use the specific link for the YM Sisters Website
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className='descButton'
                                        >
                                            View Website
                                        </a>
                                    ) : (
                                        <>
                                            <a 
                                                href={project.gitLink} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className='descButton'
                                            >
                                                Source Code
                                            </a>
                                            <a 
                                                href={project.demoLink} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className='descButton'
                                            >
                                                Demo
                                            </a>
                                        </>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Portfolio;