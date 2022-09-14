import React from 'react'
import Twitter from '../Assets/twitter.svg'
import Linkedin from '../Assets/linkedin.svg'

const Navbar = () => {
    return (
        <div className='nav_container'>
            <nav className='links'>
                <div className='logo_link'>
                    <h3>Igbalaye Olajide<span>.</span></h3>
                </div>
                <div className='links-wrapper'>
                    <p>
                        <a href="#About">About Me</a>
                    </p>
                    <p>
                        <a href="#Skills">Skills</a>
                    </p>
                    <p>
                        <a href="#Services">Services</a>
                    </p>

                    <p>
                        <a href="#Contact">Contact Me</a>
                    </p>
                </div>
                <div className='social'>
                    <img src={Linkedin} alt="linkedin" />
                    <img src={Twitter} alt="twitter" />
                </div>
            </nav>

        </div>
    )
}

export default Navbar