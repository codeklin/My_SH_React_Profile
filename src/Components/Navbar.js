import React, { useState } from 'react'
import Twitter from '../Assets/twitter.svg'
import Linkedin from '../Assets/linkedin.svg'
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri'
//import { WindowSharp } from '@mui/icons-material';

const Menu = () => (
    <>
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
    </>
);
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    /* const about_me = useRef(null)
     const skills = useRef(null)
     const services = useRef(null)
     const contact = useRef(null)
 
     const scrollToSection = (elementRef) => {
         Window.scrollTo({
             top: elementRef.current.offsetTop,
             behavior: 'smooth'
         })
     }*/

    return (
        <div className='nav_container'>
            <nav className='links'>
                <div className='logo_link'>
                    <h3>Igbalaye Olajide<span>.</span></h3>
                </div>
                <div className='links-wrapper'>
                    <Menu />
                </div>
                <div className='nav-btn'>
                    <button type='button'>Hire Me</button>
                </div>
                <div className='social'>
                    <img src={Linkedin} href="https://linkedin.com" target="_blank" alt="linkedin" />
                    <img src={Twitter} href="https://twitter.com" target="_blank" alt="twitter" />
                </div>
                <div className='nav-menu'>
                    {toggleMenu
                        ? (
                            <RiCloseLine
                                color="#333333"
                                size={27}
                                onClick={() => setToggleMenu(false)}
                            />
                        ) : (
                            <RiMenu3Line
                                color="#333333"
                                size={27}
                                onClick={() => setToggleMenu(true)}
                            />
                        )}
                    {toggleMenu && (

                        <div className='nav-menu-wrapper'>
                            <div className='nav-menu-wrapper-links'>
                                <Menu />
                                <div className='nav-menu-wrapper-button'>
                                    <button as='a' href='https://twitter.com/jidelence' type='button'>Hire Me</button>
                                </div>
                            </div>
                        </div>

                    )}

                </div>

            </nav>

        </div>
    )
}

export default Navbar