import React from 'react'
import Html from '../Assets/html.svg'
import ReactLogo from '../Assets/react.svg'
import JS from '../Assets/js.svg'
import Wordpress from '../Assets/wordpress.svg'

const Skills = () => {
    return (
        <div className='skill'>
            <h1>My Skills</h1>
            <p>Here are a few skills I possess.</p>

            <div className='skills_bar'>
                <div className='html_bar'>
                    <div className='bar_img'>
                        <img src={Html} alt="html" />
                    </div>
                    <div className='name_bar'>
                        <h5>HTML</h5>
                        <div className='div_bar'>
                            <div className='html'>90%</div>
                        </div>
                    </div>
                </div>
                <div className='css_bar'>

                    <div className='bar_img'>
                        <img src={Html} alt="html" />
                    </div>
                    <div className='name_bar'>
                        <h5>CSS</h5>
                        <div className='div_bar'>
                            <div className='css'>80%</div>
                        </div>
                    </div>
                </div>
                <div className='html_bar'>

                    <div className='bar_img'>
                        <img src={JS} alt="html" />
                    </div>
                    <div className='name_bar'>
                        <h5>JavaScript</h5>
                        <div className='div_bar'>
                            <div className='javascript'>65%</div>
                        </div>
                    </div>
                </div>
                <div className='reactjs_bar'>
                    <div className='bar_imgR'>
                        <img src={ReactLogo} alt="react" />
                    </div>
                    <div className='name_bar'>
                        <h5>React JS</h5>
                        <div className='div_bar'>
                            <div className='reactjs'>55%</div>
                        </div>
                    </div>

                </div>
                <div className='html_bar'>
                    <div className='bar_img'>
                        <img src={Wordpress} alt="wordpress" />
                    </div>
                    <div className='name_bar'>
                        <h5>HTML</h5>
                        <div className='div_bar'>
                            <div className='wordpress'>95%</div>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    )
}

export default Skills