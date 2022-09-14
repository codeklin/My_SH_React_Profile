import React from 'react'
import Jide from '../Assets/jide.png'
import Twitter from '../Assets/twitter.svg'
import Linkedin from '../Assets/linkedin.svg'

const Hero = () => {
    return (
        <div className='Hero'>
            <div className='left_hero'>
                <p>HI THERE</p>
                <h4>I AM IGBALAYE OLAJIDE </h4>
                <h1>Expert Software Engineer, Writer and Mentor.</h1>

                <div className='social'>
                    <img src={Linkedin} alt="linkedin" />
                    <img src={Twitter} alt="twitter" />
                </div>
            </div>

            <div className='right_hero'>

                <img src={Jide} alt="jide" />
            </div>
        </div>
    )
}

export default Hero