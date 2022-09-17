import React from 'react'
import Training from '../Assets/training.svg'
import Itcon from '../Assets/itcon.svg'
import Webdev from '../Assets/webdev.svg'
import Dmark from '../Assets/dmark.svg'
import Notes from '../Assets/notes.svg'
import Mapp from '../Assets/mapp.svg'

const Services = () => {
    return (
        <div className='services'>
            <h1>Services I Render</h1>
            <p>If you are looking to hire an expert or you are looking for the right place<br /> to collaborate on projects, you will find me proficient and fitting in the following areas.</p>
            <div className='services_container'>
                <div className='each_service'>
                    <img src={Training} alt='Training' />
                    <h4>Training</h4>
                    <p>Training they say turns trash to treasure. I design and help implement specific training curriculum for individuals and or corporate organizations. </p>
                </div>
                <div className='each_service'>
                    <img src={Itcon} alt='IT Consult' />
                    <h4>I.T Consulting</h4>
                    <p>Training they say turns trash to treasure. I design and help implement specific training curriculum for individuals and or corporate organizations. </p>
                </div>
                <div className='each_service'>
                    <img src={Webdev} alt='Web Dev' />
                    <h4>Responsive Web Development</h4>
                    <p>Training they say turns trash to treasure. I design and help implement specific training curriculum for individuals and or corporate organizations. </p>
                </div>
                <div className='each_service'>
                    <img src={Dmark} alt='Digital Marketing' />
                    <h4>Digital Marketing</h4>
                    <p>Training they say turns trash to treasure. I design and help implement specific training curriculum for individuals and or corporate organizations. </p>
                </div>
                <div className='each_service'>
                    <img src={Notes} alt='notes' />
                    <h4>Technical Writing</h4>
                    <p>Training they say turns trash to treasure. I design and help implement specific training curriculum for individuals and or corporate organizations. </p>
                </div>
                <div className='each_service'>
                    <img src={Mapp} alt='Mobile App' />
                    <h4>Mobile App Development</h4>
                    <p>Training they say turns trash to treasure. I design and help implement specific training curriculum for individuals and or corporate organizations. </p>
                </div>
            </div>
        </div>
    )
}

export default Services