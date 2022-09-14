import React from 'react'
import Twitter from '../Assets/twitter.svg'
import Linkedin from '../Assets/linkedin.svg'

const Navbar = () => {
    return (
        <div >
            <nav className='Navbar'>
                <div>
                    <h3>Igbalaye Olajide<span>.</span></h3>
                </div>
                <ul className='nav_link'>
                    <li><a href="{}">About Me</a></li>
                    <li><a href="{}">Services</a></li>
                    <li><a href="{}">Projects</a></li>
                    <li><a href="{}">Contact Me</a></li>
                </ul>
                <div className='social'>
                    <img src={Linkedin} alt="linkedin" />
                    <img src={Twitter} alt="twitter" />
                </div>
            </nav>

        </div>
    )
}

export default Navbar