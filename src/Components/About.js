import React from 'react'
import Twitter from '../Assets/twitter.svg'
import Linkedin from '../Assets/linkedin.svg'

const About = () => {
    return (
        <div className='about_side'>
            <h1>About Me</h1>
            <p>I am Igbalaye Olajide.
                I am an Expert Software Engineer.
                I am passionate about solving Africa poverty problem through the use of technology.
                My intention is to first get trained and train other people that will become great problem solvers and leaders of tomorrow.
            </p>
            <div className='social'>
                <img src={Linkedin} alt="linkedin" />
                <img src={Twitter} alt="twitter" />
            </div>
        </div>

    )
}

export default About