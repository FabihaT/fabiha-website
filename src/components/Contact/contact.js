import React, { useState } from 'react';
import './contact.css';
import Gmail from '../../assets/gmail.png';
import Outlook from '../../assets/outlook.png';
import LinkedIn from '../../assets/LinkedIn.png';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    return (
        <section id='contact'>
            <h2 className='contactTitle'>Contact</h2>
            <span className='contactDesc'>
                As I'm working through my undergraduate education, I would love to discuss any internship opportunities. 
                My primary points of contact are through email or by phone at <b>(+1)403-903-5540</b>. 
                Feel free to fill out the form and direct it to my emails below or reach out via LinkedIn!
            </span>
            <form className='contactForm'>
                <input 
                    type='text' 
                    name='name' 
                    className='name' 
                    placeholder='Your Full Name' 
                    onChange={handleChange} 
                />
                <input 
                    type='text' 
                    name='subject' 
                    className='subject' 
                    placeholder='Subject Line' 
                    onChange={handleChange} 
                />
                <textarea 
                    name='message' 
                    className='msg' 
                    rows='5' 
                    placeholder='Your Message' 
                    onChange={handleChange}
                />
                <div className='links'>
                    <div className="link-container">
                        <a href={`mailto:fabiha.neera@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}%0D%0A%0D%0ARegards,%0D%0A${formData.name}`}>
                            <img src={Gmail} alt='gmail' className='link' />
                        </a>
                        <span className="link-label">Gmail</span>
                    </div>
                    <div className="link-container">
                        <a href={`mailto:fabiha.tuheen@ucalgary.ca?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}%0D%0A%0D%0ARegards,%0D%0A${formData.name}`}>
                            <img src={Outlook} alt='outlook' className='link' />
                        </a>
                        <span className="link-label">Outlook</span>
                    </div>
                    <div className="link-container">
                        <a href="https://www.linkedin.com/in/fabiha-neera-326344141/" target="_blank" rel="noopener noreferrer">
                            <img src={LinkedIn} alt='LinkedIn' className='link' />
                        </a>
                        <span className="link-label">LinkedIn</span>
                    </div>
                </div>
            </form>
        </section>
    );

};

export default Contact;