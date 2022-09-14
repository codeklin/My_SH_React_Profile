import React from 'react'

import Twitter from '../Assets/twitter.svg'
import Linkedin from '../Assets/linkedin.svg'
import Email from '../Assets/email.svg'

const Footer = () => {
    return (
        <div className='footer'>
            <h1>Igbalaye Olajide<span>.</span></h1>
            <div className='social'>
                <img className="link" src={Linkedin} alt="linkedin" />
                <img src={Twitter} alt="twitter" />
                <img src={Email} alt="email" />
            </div>
            <div>
                <small> Copyright &copy; 2022 | Gigsdev </small>
            </div>

        </div>
    )
}

export default Footer