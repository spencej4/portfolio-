import React from 'react'
import './components.css';
const smoothScroll = require('smoothscroll')


class Home extends React.Component {
  next=()=>{
    smoothScroll(window.innerHeight)
  }
  render(){
    return (
      <div className="home" >
        <div className="skew"></div>
        <div className="home-text">
          <div className="hero-title"><p className='logo-font'>Spencer Jack</p></div>
          <p className="pop-pop">developed with passion</p>
        </div>
        <div onClick={this.next} className="next"></div>
      </div>
    )
  }
}


export default Home
