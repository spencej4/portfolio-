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
                    <p>Lorem ipsum dolor amet banh mi seitan asymmetrical cred flannel. 
                        Selfies locavore mlkshk, sustainable chicharrones selvage tilde. Selvage beard fashion axe, 
                        adaptogen forage yr whatever wayfarers twee XOXO lo-fi air plant cray. Intelligentsia typewriter 
                        street art beard direct trade farm-to-table la croix, copper mug offal retro. Organic stumptown 
                        ugh, blue bottle la croix quinoa mumblecore. Squid godard biodiesel direct trade, humblebrag 
                        chambray snackwave knausgaard activated charcoal</p>  
                    <a href='https://github.com/spencej4'  target="blank" className='link-inline'><img class='icon-inline' id='github' src={github} alt='github link'></img></a>
                    <a href='https://www.linkedin.com/in/spencej4/'  target="blank" className='link-inline'><img class='icon-inline' id='github' src={linkedin} alt='linkedin link'></img></a>
                    <a href="link/to/your/download/file" className='link-inline' download>Resume Download</a>
                </div>  
                        {/* <a href='https://jsfiddle.net/user/Redshift_846/fiddles/' target="_blank" className='link-inline'><img class='icon-inline'
                                id='jsfiddle' src='assets/images/jsfiddle.png'></img></a> */}
                </div>
            </div>
        )
    }
}

export default About