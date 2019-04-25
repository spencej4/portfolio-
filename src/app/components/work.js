import React from 'react'
import './tech.css'

// this loads too slowly
// switch to htmls links to imgur instead
import  squixel from '../img/squixel.jpeg';
import oxo from '../img/oxo.jpeg';
import e4s from '../img/e4s.jpeg';
import celestial_battles from '../img/celestial-battles.JPG';

class Work extends React.Component{
  render(){
    return(
      <div id="work" className="Portfolio">
        <div className='work-item'>
                <div className='card'>
                <img className='work-item-image reflect' src={oxo} alt='portfolio item'></img>
                <div className='work-copy'>
                    <p className='work-title'>
                        OXO
                    </p>
                    <p className='work-description'>
                        OXO is your dynamic gaming app, utilizing custom back-end database. Allowing users to create tournament brackets and participate in real-time game play,
                        with scores and leaderboards.
                    </p>
                    <p className='technologies-used-title'>
                        Technologies Used
                    </p>
                    <div className='tech-container'>
                        <p className='technologies-used-text'>
                            MongoDB   
                        </p>
                        <p className='technologies-used-text'>
                            React  
                        </p>
                        <p className='technologies-used-text'>
                            NodeJS  
                        </p>
                        <p className='technologies-used-text'>
                            Express
                        </p>
                        <p className='technologies-used-text'>
                            JavaScript
                        </p>
                    </div>
                    <div className='cta-container'>
                        <div className='cta'><a href='https://guarded-retreat-45215.herokuapp.com/' target="blank">Demo</a></div>
                    </div>
                    <div className='cta-container'>
                        <div className='cta'><a href='https://github.com/spencej4/unit-4-game' target="blank" className='github-repo'>Github</a></div>
                    </div>
                </div>
                </div>
        </div>
        <div className='work-item'>
                <div className='card'>
                    <img className='work-item-image reflect right' src={e4s} alt='portfolio item'></img>
                    <div className='work-copy '>
                        <p className='work-title'>
                            E4S
                        </p>
                        <p className='work-description'>
                            E4S is my personal Instagram. You won't find any library dependencies here. Made the old fashioned way. 
                        </p>
                        <p className='technologies-used-title'>
                            Technologies Used
                        </p>
                        <div className='tech-container'>
                            <p className='technologies-used-text'>
                                HTML5   
                            </p>
                            <p className='technologies-used-text'>
                                CSS3   
                            </p>
                            <p className='technologies-used-text'>
                                JavaScript   
                            </p>
                            <p className='technologies-used-text'>
                                JQuery
                            </p>
                        </div>
                        <div className='cta-container'>
                            <div className='cta'><a href='https://spencej4.github.io/E_4S/' target="blank">Demo</a></div>
                        </div>
                        <div className='cta-container'>
                            <div className='cta'><a href='https://github.com/spencej4/E_4S' target="blank" className='github-repo'>Github</a></div>
                        </div>
                    </div>
            </div>
        </div>
        <div className='work-item'>
                <div className='card'>
                    <img className='work-item-image reflect' src={squixel} alt='portfolio item'></img>
                    <div className='work-copy'>
                        <p className='work-title'>
                            Squixel 
                        </p>
                        <p className='work-description'>
                            Squixel is your new portal to professional grade, Instagram-worthy photographs. Search, and save your favorite
                            photos to your own user database.
                        </p>
                        
                        <p className='technologies-used-title'>
                            Technologies Used
                        </p>
                        <div className='tech-container'>
                            <p className='technologies-used-text'>
                                NodeJS   
                            </p>
                            <p className='technologies-used-text'>
                                Express  
                            </p>
                            <p className='technologies-used-text'>
                                React  
                            </p>
                            <p className='technologies-used-text'>
                                JavaScript
                            </p>
                        </div>
                        <div className='cta-container'>
                            <div className='cta'><a href='https://uw-js-capstone.firebaseapp.com/' target="blank">Demo</a></div>
                        </div>
                        <div className='cta-container'>
                            <div className='cta'><a href='https://github.com/spencej4/Squixel' target="blank" className='github-repo'>Github</a></div>
                        </div>
                    </div>
                </div>
          </div>
          <div className='work-item'>
                <div className='card'>
                <img className='work-item-image reflect right' src={celestial_battles} alt='portfolio item'></img>
                    <div className='work-copy '>
                        <p className='work-title'>
                            Celestial Battles
                        </p>
                        <p className='work-description'>
                            Dynamic gaming app, utilizing custom back-end database.
                        </p>
                        <p className='technologies-used-title'>
                            Technologies Used
                        </p>
                        <div className='tech-container'>
                            <p className='technologies-used-text'>
                                JavaScript   
                            </p>
                            <p className='technologies-used-text'>
                                HTML5  
                            </p>
                            <p className='technologies-used-text'>
                                CSS3  
                            </p>
                            <p className='technologies-used-text'>
                                Lightspeed
                            </p>
                        </div>
                        <div className='cta-container'>
                            <div className='cta'><a href='https://spencej4.github.io/Celestial-Battles/' target="blank">Demo</a></div>
                        </div>
                        <div className='cta-container'>
                            <div className='cta'><a href='https://github.com/spencej4/Celestial-Battles' target="blank" className='github-repo'>Github</a></div>
                        </div>
                    </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Work