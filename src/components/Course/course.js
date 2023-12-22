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
                    <h4>Content 1</h4>
                    <hr/>
                    <p></p>
                </div>
                <div className={toggleState === 2 ? 'info active-info':'info'}>
                    <h4>Content 2</h4>
                    <hr/>
                    <p></p>
                </div>
                <div className={toggleState === 3 ? 'info active-info':'info'}>
                    <h4>Content 3</h4>
                    <hr/>
                    <p></p>
                </div>
            </div>
        </section>
    )
}

export default Course;