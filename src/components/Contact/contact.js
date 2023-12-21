import React from 'react';
import './contact.css';
import Gmail from '../../assets/gmail.png';
import Outlook from '../../assets/outlook.png';
import LinkedIn from '../../assets/LinkedIn.png';

const Contact = () => {
    return (
        <section id='contact'>
            <h2 className='contactTitle'>Contact</h2>
            <span className='contactDesc'>
                As I'm working through my undergraduate education, I would love to discuss any research/internship oppurtunities. 
                My primary points of contact are through email or by phone at <b>(+1)403-903-5540</b>. 
                Feel free to fill the form or reach out via my platforms below!
            </span>
            <form className='contactForm'>
                <input type='text' className='name' placeholder='Your Name' />
                <input type='email' className='email' placeholder='Your Email' />
                <textarea name='message' className='msg' rows='5' placeholder='Your Name' />
                <button type='submit' value='send' className='submitBtn'>Submit</button>
                <div className='links'>
                    <img src={Gmail} alt='gmail' className='link' />
                    <img src={Outlook} alt='outlook' className='link' />
                    <img src={LinkedIn} alt='LinkedIn' className='link' />
                </div>
            </form>
        </section>
    )
};

export default Contact;