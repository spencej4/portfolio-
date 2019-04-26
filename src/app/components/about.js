import React from 'react'
import './about.css';
import github from '../img/logo-github.png';
import linkedin from '../img/logo-linkedin.png';

class About extends React.Component {
    render(){
        return(
            <div id='about'>
                <div className='about-container'>
                    <img className='spence' src='http://via.placeholder.com/250x250' alt='placeholder'></img>
                    <div className='about-text'>
                        <div className='about-title'><p>Nice to meet you.</p></div>
                        <p>Forward thinking web developer with an eye for design and clean, minimalist UI's. I'm focused and engergized within fast paced environments.
                            I enjoy building, interacting within diverse teams, and delivering on time products. With a background in maintaining airline hardware,
                            complex aeronautics systems, troubleshooting and creating resolutions to problems. I develop thoughtful, efficient apps with the user experience in mind.</p>  
                        <a href='https://github.com/spencej4'  target="blank" className='link-inline'><img  id='github' src={github} alt='github link'></img></a>
                        <a href='https://www.linkedin.com/in/spencej4/'  target="blank" className='link-inline'><img  id='linkedin' src={linkedin} alt='linkedin link'></img></a>
                        <a href="https://drive.google.com/uc?export=download&id=1a_-v2kUvDAmk1ijTdIm4ue1YRsYOO5gO" className='link-inline' download>Resume Download</a>
                    </div>  
                </div>
            </div>
        )
    }
}

export default About