import React from 'react';
import Home from './components/home';
import Navbar from './components/navbar';
import Tech from './components/tech';
import Work from './components/work';
import Contact from './components/contact'

class App extends React.Component{
  render(){
    return(
      <div>
        <Navbar />
        <Home />
        <Tech />
        <Work />
        {/* <Tech /> */}
        <Contact />
      </div>
    )
  }
}
export default App
