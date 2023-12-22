import React, { useState } from 'react';
import './course.css';

const Course = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section id='courses'>
            <h2 className='courseTitle'>Courses</h2>
            <div className='course-tabs'>
                <div className={toggleState === 1 ? 'tabs active-tabs':'tabs'} onClick={() => toggleTab(1)}>2nd Year</div>
                <div className={toggleState === 2 ? 'tabs active-tabs':'tabs'} onClick={() => toggleTab(2)}>3rd Year</div>
                <div className={toggleState === 3 ? 'tabs active-tabs':'tabs'} onClick={() => toggleTab(3)}>4th Year</div>
            </div>
            <div className='content-tabs'>
                <div className={toggleState === 1 ? 'info active-info':'info'}>
                    <h4>ENSF 300</h4>
                    <hr/>
                    <p>Introduction to professional skills practices within software engineering. Development using Git and Github
                    to learn team management, resiliency and debugging skills, command line navigation, revision control. Foundations 
                    of database management systems. Types of data models, relational and entity-relationship models, integrity 
                    constraints, normalization, Structured Query Language (SQL).
                    </p>
                    <h4>ENSF 337</h4>
                    <hr/>
                    <p>Key features of the C programming language. Pointers, memory models and memory management. Manipulation of text 
                        files and binary files. Introduction to recursion. Introduction to a modern object-oriented language. Development 
                        of basic program design skills with small projects.</p>
                    <h4>ENSF 381</h4>
                    <hr/>
                    <p>Fullstack software development including front-end and back-end design and development, 
                        relevant libraries and framework, principles of devOps and cloud integration, in the context of agile software development. 
                        Development using HTML/CSS, JavaScript, React, Node JS, and Amazon Web Services (AWS).</p>
                    <h4>ENSF 380</h4>
                    <hr/>
                    <p>Fundamental object-oriented software design and development topics in Java. Object-oriented analysis, 
                        design and development. Inheritance, polymorphism, and application of common data structures. Best 
                        practices for tools for testing, debugging, and documentation.</p>
                    <h4>ENSF 338</h4>
                    <hr/>
                    <p>Introduction to foundational data structures such as stacks, queues, lists, heaps, hash tables, trees, and graphs. 
                        Learning sorting and searching algorithms, and complexity analysis. Software development of libraries utilizing
                        these algorithms.</p>
                    <h4>ENDG 319</h4>
                    <hr/>
                    <p>Introduction to data analysis using Python, focusing on practical applications in engineering. Covers data presentation, 
                        hypothesis testing, and fundamental machine learning techniques such as linear regression and classification. 
                        Emphasizes real-world engineering problems and solutions.</p>
                    <h4>ENCM 369</h4>
                    <hr/>
                    <p>Overview of computer architecture including CPU, memory, and I/O devices. Focus on instruction sets, RISC-V assembly language, 
                        floating-point representation, address translation, virtual memory, and system interfacing with emphasis on interrupts and multitasking.</p>
                </div>
                <div className={toggleState === 2 ? 'info active-info':'info'}>
                    <h4>ENSF 480</h4>
                    <hr/>
                    <p>Systematic methods for designing large-scale, quality software. Concepts covered such as abstraction, 
                        modularity, and software modelling. Emphasis on individual skills in C++ and Java and team work in software design and development.</p>
                    <h4>ENSF 462</h4>
                    <hr/>
                    <p>Fundamental principles of computer networks including layered protocol stacks, socket programming, and programming frameworks for developing 
                        secure distributed systems. Introduction to principles of software-defined networks.</p>
                    <h4>ENSF 461</h4>
                    <hr/>
                    <p>Fundamental principles of operating systems and shells. Virtual memory and input/output, processes, threads and CPU scheduling, and persistent storage. 
                        Concurrent programming techniques to address inter-process communication and synchronization. Discussion of security elements of operating systems.</p>
                    <h4>ENSF 460</h4>
                    <hr/>
                    <p>Embedded real-time applications and operations. Computer architecture, microcontrollers and their instruction sets. 
                        Control and interfacing for robotics applications using common input/output devices, debugging and other software 
                        engineering practices.</p>
                    <h4>ENSF 444</h4>
                    <hr/>
                    <p>Techniques for extracting, cleaning, and visualizing data from engineering applications. Basic numerical computation techniques underlying learning 
                        algorithms. Emphasis on leveraging existing software libraries and frameworks to solve problems in various engineering disciplines.</p>
                    <h4>ENSF 400</h4>
                    <hr/>
                    <p>Continuation of professional skills within the field of software engineering. Application of common tools for efficient 
                        software practice, cloud, continuous integration, and deployment. Introduction to innovation and ethics in design and 
                        entrepreneurial mindset.</p>
                    <h4>SENG 438</h4>
                    <hr/>
                    <p>Concepts, methods, techniques, processes, and tools for software testing. The principles, processes, and applications of software reliability and 
                        software quality assurance.</p>
                    <h4>SENG 401</h4>
                    <hr/>
                    <p>Software architectures and design for non-functional software properties. Introduction to program comprehension skills 
                        including analysis of existing architectures.</p>
                </div>
                <div className={toggleState === 3 ? 'info active-info':'info'}>
                    <h4>TBD</h4>
                    <hr/>
                    <p></p>
                    <h4>TBD</h4>
                    <hr/>
                    <p></p>
                    <h4>TBD</h4>
                    <hr/>
                    <p></p>
                    <h4>TBD</h4>
                    <hr/>
                    <p></p>
                    <h4>TBD</h4>
                    <hr/>
                    <p></p>
                    <h4>TBD</h4>
                    <hr/>
                    <p></p>
                    <h4>TBD</h4>
                    <hr/>
                    <p></p>
                    <h4>TBD</h4>
                    <hr/>
                    <p></p>
                </div>
            </div>
        </section>
    )
}

export default Course;