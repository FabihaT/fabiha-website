import React, { useState } from 'react';
import './portfolio.css';
import Obituary from "../../assets/obituary.png";
import Flight from "../../assets/flight.png";
import NoteApp from "../../assets/notes.png";
import Wordle from "../../assets/wordle.png";
import EWR from "../../assets/ewr.png";
import Art from "../../assets/artdb.png";
import Website from "../../assets/ymwebsite.png";

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState('Team');
    const [hovered, setHovered] = useState(null);

    // Array of project information
    const projects = [
        { id: 1, type: 'Team',src: Obituary, alt: 'Obituary', title: 'The Last Show', gitLink: 'https://github.com/FabihaT/obituary-generator-project', demoLink:'https://yuja.ucalgary.ca/V/Video?v=980353&node=5199276&a=19618598&autoplay=1', desc: 'A full-stack obituary system desgined with React and TailwindCSS for a sleek front-end interface and DynamoDB backend provided by AWS. Included features are a seamless integration of AI, cloud computing, and modern web development. Users can generate obituary descriptions with OpenAI GPT-3, apply text to speech using Amazon Polly, and persist data with DynamoDB. A serverless functionality is maintained with AWS Lambda functions.' },
        { id: 2, type: 'Team',src: Flight, alt: 'Flight', title: 'Flight Reservation System', gitLink: 'https://github.com/FabihaT/flight-reservation-system', demoLink:'https://yuja.ucalgary.ca/V/Video?v=980651&node=5200776&a=167282193&autoplay=1', desc: 'A full-stack flight reservation system utilizing GUI for the front-end interface, and a MySQL database for the back-end. It requires users to register for an account to manage bookings. Upon booking, a digital receipt is emailed to the user. The system also caters to flight attendants and airline agents with specialized access for viewing passengers and client booking requests, respectively. Administrators maintain overall control of the system with the ability to update all aspects of flight operations.' },
        { id: 3, type: 'Personal',src: NoteApp, alt: 'Note App', title: 'SwiftNote', gitLink: 'https://github.com/FabihaT/note-app', demoLink:'https://yuja.ucalgary.ca/V/Video?v=980258&node=5198788&a=39513988&autoplay=1', desc: 'This is a simple and easy to use note-taking app which utilizes languages such as HTML, CSS, JavaScript, and React. Users can use many features like creating new notes, editing, saving and persisting in local storage, deleting, and simple searching to filter notes.' },
        { id: 4, type: 'Personal',src: Wordle, alt: 'Wordle', title: 'Wordle Game', gitLink: 'https://github.com/FabihaT/wordle-game', demoLink:'https://yuja.ucalgary.ca/V/Video?v=980251&node=5198759&a=38656761&autoplay=1', desc: 'A word-guessing game where players have five chances to uncover a hidden five-letter word by guessing different combinations, receiving feedback after each attempt. Wordle is developed using a combination of HTML, CSS, and JavaScript. The game leverages event listeners to capture player input and dynamically update the game board. The inclusion of asynchronous behaviors simulates the interaction with APIs, creating a responsive and engaging gaming environment.' },
        { id: 5, type: 'Team',src: EWR, alt: 'EWR', title: 'Animal Rescue System', gitLink: 'https://github.com/FabihaT/vet-reservation-project', demoLink:'https://yuja.ucalgary.ca/V/Video?v=980237&node=5198650&a=12049844&autoplay=1', desc: 'A Java software application for Example Wildlife Rescue (EWR), which specializes in animals like coyotes, foxes, porcupines, beavers, and raccoons. The application uses object-oriented design and a Graphical User Interface to generate a daily task list for volunteers to efficiently care for the animals in various areas and treatments, addressing EWR\'s need to automate their current manual and error-prone scheduling process. JUnit testing is applied to test the software functionality.' },
        { id: 6, type: 'Team',src: Art, alt: 'Art', title: 'Art Museum System', gitLink: 'https://github.com/FabihaT/art-museum-project', demoLink:'https://yuja.ucalgary.ca/V/Video?v=980242&node=5198729&a=184738648&autoplay=1', desc: 'A Python application designed to manage and interact with an art-themed MySQL database. The flow was designed with a simple and interactive command-line interface for two primary users: admins and guests. As a guest, you can browse information from a selection of tables stored in the art database. As an admin, you must login with MySQL credentials and select a table to modify. Key admin functions are inserting, updating, and deleting data.' },
        { id: 7, type: 'Personal',src: Website, alt: 'Website', title: 'YM Sisters Website', link:'https://ymsisters.org/', desc: 'The main website for Young Muslim Sisters, a non-profit organization. This website is designed using a WordPress framework with additional HTML/CSS and JavaScript elements to create a responsive, maintainable, and user-friendly site.' }
    ];
    // Function to handle category change
    const changeCategory = (category) => {
        setActiveCategory(category);
    };

    // Filtered projects based on the active category
    const filteredProjects = projects.filter(project => project.type === activeCategory);

    return (
        <section id='work'>
            <h2 className='workTitle'>My Portfolio</h2>
            <div className='workDesc'>
                These are some of my featured Team and Personal projects which include short overviews of the project with Source Code and Demo links.<br/>
                This is a collection of personal and team projects 
                highlighting the various technical skills and software design strategies I learned throughout my degree. 
                This is, of course, an ongoing portfolio as I hope to gain experience working on industry software development projects on
                a wider scale! Check out my Github link for more projects.
            </div>
            <div className='categoryButtons'>
                <button 
                    onClick={() => changeCategory('Team')} 
                    className={`categoryButton ${activeCategory === 'Team' ? 'active' : ''}`}
                >
                    <h3>Team</h3>
                </button>
                <button 
                    onClick={() => changeCategory('Personal')} 
                    className={`categoryButton ${activeCategory === 'Personal' ? 'active' : ''}`}
                >
                    <h3>Personal</h3>
                </button>
            </div>
            <div className='workCards'>
                {filteredProjects.map((project) => (
                    <div 
                        key={project.id}
                        className="workCard"
                        style={{ position: 'relative', transition: 'transform 0.5s ease-in-out' }}
                        onMouseEnter={() => setHovered(project.id)}
                        onMouseLeave={() => setHovered(null)}
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