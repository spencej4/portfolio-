import React from 'react'
import './tech.css'

class Tech extends React.Component{
  render(){
    return(
      <div id='tech'>
        <div className='tech-title'>Technologies</div>
        <div className="icon-container">
          <div className="icon">React</div>
          <div className="icon">NodeJS</div>
          <div className="icon">Express</div>
          <div className="icon">Javascript</div>
          <div className="icon">MySQL</div>
          <div className="icon">MongoDB</div>
          <div className="icon">HTML</div>
          <div className="icon">CSS</div>
          <div className="icon">JQuery</div>
          </div>
      </div> 
    )
  }
}
export default Tech
