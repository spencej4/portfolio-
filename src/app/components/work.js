import React from 'react'
import './tech.css'

class Work extends React.Component{
  render(){
    return(
      <div id="work" className="Portfolio">
        <div className='work-item'>
            <div className='card'>
                <a href='https://guarded-retreat-45215.herokuapp.com//' target="_blank"></a>
                    <img className='work-item-image' src='assets/images/oxo.png'></img>
                    <div className='work-copy'>
                        <p className='work-title'>
                            OXO - Spencer Jack (Contributor)
                        </p>
                        <p className='work-description'>
                            Dynamic gaming app, utilizing custom back-end database.
                        </p>
                        <a href='https://github.com/spencej4/unit-4-game' target="_blank" className='github-repo'>Github Repo</a>
                    </div>
                
            </div>
        </div>
      </div>
    )
  }
}

export default Work