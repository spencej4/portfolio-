import React from 'react'
import './tech.css'

class Work extends React.Component{
  render(){
    return(
      <div id="work" className="Portfolio">
        <div className="row row1">
          <div id="vote" className="port-item">
            <div className="port-over">
              <div className="port-link">
                <a target="blank" href="https://fierce-chamber-91384.herokuapp.com/"><h1>Voting App Demo</h1></a>

              </div>
            </div>
          </div>

          <div id="simon" className="port-item">
            <div className="port-over">
              <div className="port-link">
                <a target="blank" href="https://codepen.io/DReflex/full/qrBGOZ/"><h1>Simon Game</h1></a>
              </div>
            </div>
          </div>

        </div>
        
        <div className="row row2 xscol">
          <div id="book" className="port-item">
            <div className="port-over">
              <div className="port-link">
                <a target="blank" href="https://book-ish-club.herokuapp.com/"><h1>Book Club</h1></a>
              </div>
            </div>
          </div>


          <div id="club" className="port-item">
            <div className="port-over">
              <div className="port-link">
                <a target="blank" href="https://iiinightlifeiii.herokuapp.com/"><h1>Nightlife App</h1></a>
              </div>
            </div>
          </div>
        </div>

        <div className="certC">
          <div id="front" className="cert">
            <div className="text">
              <h1>Front End</h1>
              <p>400+ Hours of coursework</p>
              <p>10 Frontend Projects</p>
              <p>37 Javascript algorithm's</p>
              <p>Working with HTML, CSS, JS, jQuery, Bootstrap</p>
              <p><a target="blank" href="https://www.freecodecamp.org/dreflex/front-end-certification">Verify this certification</a></p>
            </div>
          </div>

          <div id="back" className="cert">
            <div className="text">
              <h1>Back End</h1>
              <p>400+ Hours of coursework</p>
              <p>5 API Projects</p>
              <p>5 Fullstack Projects</p>
              <p>Working with Git, Node.js, Express, MongoDB, React-Redux</p>
              <p><a target="blank" href="https://www.freecodecamp.org/dreflex/back-end-certification">Verify this certification</a></p>
            </div>
          </div>
        </div>


      </div>
    )
  }
}

export default Work
