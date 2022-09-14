import React from 'react'
import Twitter from '../Assets/twitter.svg'
import Linkedin from '../Assets/linkedin.svg'
import Email from '../Assets/email.svg'
import Phone from '../Assets/phone.svg'


const Contact = () => {
    return (
        <div class='contact_split'>
            <div className='left'>
                <h2>Get In Touch</h2>
                <p>You can connect with me through my <br />social media handles.</p>

                <div className='social'>
                    <img src={Linkedin} alt="linkedin" />
                    <img src={Twitter} alt="twitter" />
                </div>
                <div>
                    <div className='email'>
                        <div className='email_icon'>
                            <img src={Email} alt="" />
                        </div>
                        <div className='htag'>
                            <h4>clickcom007@yahoo.com</h4>
                            <p>Send Me A Mail</p>
                        </div>
                    </div>
                    <div className='phone_no'>
                        <div className='phone_icon'>
                            <img src={Phone} alt="" />
                        </div>
                        <div className='number'>
                            <h4>+234703-1098-097</h4>
                            <p>Let's Talk</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='right'>
                <div className='hhead'>
                    <p>Need A Service?</p>
                    <h3>Send A Message</h3>
                </div>
                <div className='form'>
                    <div className='Eform'>
                        <p>Enter Fullname</p>
                        <input type="text" name="name" placeholder=""
                        />
                    </div>
                    <div className='Eform'>
                        <p>Enter Email Address</p>
                        <input type="text" name="name" placeholder=""
                        />
                    </div>
                    <div className='Eform'>
                        <p>Write A Message</p>
                        <input type="text" name="name" placeholder=""
                        />
                    </div>

                    <button>Send Message</button>
                </div>
            </div>

        </div>
    )
}

export default Contact