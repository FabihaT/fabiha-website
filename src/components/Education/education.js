import React from 'react';
import './education.css';

const Education = () => {
    return (
        <section id="main">
            <main className='row'>
                {/* Education section */}
                <section className='col'>
                    <h2 className='title'>Education</h2>
                    <div className='contents'>
                        <div className='box'>
                            <h4>2021 - Present</h4>
                            <h3>BSc in Software Engineering</h3>
                            <p>This is a 4 year program with the option of an additional
                                internship year. As a student, we are exposed to the theoretical
                                foundation and gain specialized knowledge to develop, install, 
                                validate, and maintain software systems. The relevant courses taken
                                and planned to take can be viewed below.
                            </p>
                        </div>
                        <div className='box'>
                            <h4>2019 - 2021</h4>
                            <h3>Nelson Mandela High School Diploma</h3>
                        </div>
                    </div>
                </section>
                {/* Experience section */}
                <section className='col'>
                    <h2 className='title'>Experience</h2>
                    <div className='contents'>
                        <div className='box'>
                            <h4>2020 - Present</h4>
                            <h3>Young Muslims Sisters Canada</h3>
                            <p>I volunteer with this non-profit organization as the Media Chair of the
                                National Board. The technical skills I have used were to develop and maintain
                                their website, with future goals of implementing an e-commerce platform. Other impersonal
                                skills, such as leadership and strong communication, are developed through directing media 
                                projects for my team. Our social media is constantly updated utilizing effective marketing
                                strategies for various events and campaigns.
                            </p>
                        </div>
                        <div className='box'>
                            <h4>2023</h4>
                            <h3>Hack the Change</h3>
                            <p>An annual hackathon presented by Code the Change YYC, a
                                club at the University of Calgary where students in the
                                tech field grow their skills, and gain experience in creating 
                                projects for global, non-profit causes. The theme for this year
                                was how we could empower communities to embrace and make eco-friendly
                                choices. Our team created an interactive educational app where students
                                can engage with lessons about sustainability and daily challenges to
                                earn points based on their everyday eco-friendly actions.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </section>
    )
}

export default Education;