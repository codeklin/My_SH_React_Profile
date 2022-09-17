import React from 'react'

import Twitter from '../Assets/twitterw.svg'
import Linkedin from '../Assets/linkedinw.svg'
import Email from '../Assets/mailw.svg'

const Footer = () => {
    return (
        <div className='footer'>
            <h1>Igbalaye Olajide<span>.</span></h1>
            <div className='social'>
                <img src={Linkedin} alt="linkedinw" />
                <img src={Twitter} alt="twitter" />
                <img src={Email} alt="email" />
            </div>
            <div className='footer_small'>
                <small> Copyright &copy; 2022 | Gigsdev </small>
            </div>

        </div>
    )
}

export default Footer