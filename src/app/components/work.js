import React from 'react'
import './tech.css'
import  squixel from '../img/squixel.jpeg';
import oxo from '../img/oxo.jpeg';
import e4s from '../img/e4s.jpeg';

class Work extends React.Component{
  render(){
    return(
      <div id="work" className="Portfolio">
        <div className='work-item'>
                <div className='card'>
                <img className='work-item-image reflect' src={oxo} alt='portfolio item'></img>
                <div className='work-copy'>
                    <p className='work-title'>
                        OXO - 1
                    </p>
                    <p className='work-description'>
                        OXO is your dynamic gaming app, utilizing custom back-end database. Allowing users to create tournament brackets and participate in real-time game play,
                        with scores and leaderboards.
                    </p>
                    <p className='technologies-used-title'>
                        Technologies Used
                    </p>
                    <p className='technologies-used-text'>
                        MongoDB JavaScript React
                    </p>
                    <a href='https://guarded-retreat-45215.herokuapp.com//' target="blank">Demo</a>
                    <a href='https://github.com/spencej4/unit-4-game' target="blank" className='github-repo'>Github Repo</a>
                </div>
                </div>
        </div>
        <div className='work-item'>
                <div className='card'>
                    <img className='work-item-image reflect right' src={e4s} alt='portfolio item'></img>
                    <div className='work-copy '>
                        <p className='work-title'>
                            Temp - 2
                        </p>
                        <p className='work-description'>
                            Butcher try-hard waistcoat distillery. Drinking vinegar chartreuse umami live-edge, tattooed church-key tbh semiotics salvia. Microdosing fixie kitsch hell of semiotics pabst ugh. Butcher you probably haven't heard of them humblebrag pickled meh vaporware.
                        </p>
                        <p className='technologies-used-title'>
                            Technologies Used
                        </p>
                        <p className='technologies-used-text'>
                            MongoDB JavaScript React
                        </p>
                        <a href='https://guarded-retreat-45215.herokuapp.com//' target="blank">Demo</a>
                        <a href='https://github.com/spencej4/unit-4-game' target="blank" className='github-repo'>Github Repo</a>
                    </div>
            </div>
        </div>
        <div class='work-item'>
                <div class='card'>
                    <img class='work-item-image reflect' src={squixel} alt='portfolio item'></img>
                    <div class='work-copy'>
                        <p class='work-title'>
                            Squixel - 3
                        </p>
                        <p class='work-description'>
                            Squixel is your new portal to professional grade, Instagram-worthy photographs. Search, and save your favorite
                            photos to your own user database.
                        </p>
                        <p className='technologies-used-title'>
                            Technologies Used
                        </p>
                        <p className='technologies-used-text'>
                            MongoDB JavaScript React
                        </p>
                        <a href='https://uw-js-capstone.firebaseapp.com/' target="blank">Demo</a>
                        <a href='https://github.com/spencej4/Squixel' target="blank" class='github-repo'>Github Repo</a>
                    </div>
                </div>
          </div>
          <div className='work-item'>
                <div className='card'>
                <img class='work-item-image reflect right' src='https://images.unsplash.com/photo-1484788984921-03950022c9ef?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjI4NTMwfQ' alt='portfolio item'></img>
                    <div className='work-copy '>
                        <p className='work-title'>
                            Temp - 4
                        </p>
                        <p className='work-description'>
                            Butcher try-hard waistcoat distillery. Drinking vinegar chartreuse umami live-edge, tattooed church-key tbh semiotics salvia. Microdosing fixie kitsch hell of semiotics pabst ugh. Butcher you probably haven't heard of them humblebrag pickled meh vaporware.
                        </p>
                        <p className='technologies-used-title'>
                            Technologies Used
                        </p>
                        <p className='technologies-used-text'>
                            MongoDB JavaScript React
                        </p>
                        <a href='https://guarded-retreat-45215.herokuapp.com//' target="blank">Demo</a>
                        <a href='https://github.com/spencej4/unit-4-game' target="blank" className='github-repo'>Github Repo</a>
                    </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Work