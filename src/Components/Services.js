import React from 'react'
import Windows from '../Assets/windows.svg'

const Services = () => {
    return (
        <div className='services'>
            <h1>Services I Render</h1>
            <p>If you are looking to hire an expert or you are looking for the right place<br /> to collaborate on projects, you will find me proficient and fitting in the following areas.</p>
            <div className='services_container'>
                <div className='each_service'>
                    <img src={Windows} alt='windows' />
                    <h4>Training</h4>
                    <p>Training they say turns trash to treasure. I design and help implement specific training curriculum for individuals and or corporate organizations. </p>
                </div>
                <div className='each_service'>
                    <img src={Windows} alt='' />
                    <h4>I.T Consulting</h4>
                    <p>Training they say turns trash to treasure. I design and help implement specific training curriculum for individuals and or corporate organizations. </p>
                </div>
                <div className='each_service'>
                    <img src={Windows} alt='' />
                    <h4>Responsive Web Development</h4>
                    <p>Training they say turns trash to treasure. I design and help implement specific training curriculum for individuals and or corporate organizations. </p>
                </div>
                <div className='each_service'>
                    <img src={Windows} alt='' />
                    <h4>Digital Marketing</h4>
                    <p>Training they say turns trash to treasure. I design and help implement specific training curriculum for individuals and or corporate organizations. </p>
                </div>
                <div className='each_service'>
                    <img src={Windows} alt='' />
                    <h4>Technical Writing</h4>
                    <p>Training they say turns trash to treasure. I design and help implement specific training curriculum for individuals and or corporate organizations. </p>
                </div>
                <div className='each_service'>
                    <img src={Windows} alt='' />
                    <h4>Mobile App Development</h4>
                    <p>Training they say turns trash to treasure. I design and help implement specific training curriculum for individuals and or corporate organizations. </p>
                </div>
            </div>
        </div>
    )
}

export default Services