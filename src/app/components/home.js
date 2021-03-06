import React from 'react'
import './components.css';
import ProgressiveImage from "./progressiveImage";
import home_image_low from '../img/home-image-low.jpeg';
import home_image from '../img/home-image.jpeg';
const smoothScroll = require('smoothscroll')


class Home extends React.Component {
  next=()=>{
    smoothScroll(window.innerHeight)
  }
  render(){
    return (
      <div className="home" >
        <ProgressiveImage
            className={"cover"}
            alt={"a lake surrounded by tree-covered hills"}
            overlaySrc={
              home_image_low
            }
            src={
              home_image
            }
        />
        {/* originally not commented out */}
        {/* <div className="skew"></div> */}
        <div className="home-text">
          <div className="hero-title"><p className='logo-font'>Spencer Jack</p></div>
          <p className="pop-pop">Developer. Problem Solver.</p>
        </div>
        <div onClick={this.next} className="next"></div>
      </div>
    )
  }
}


export default Home
