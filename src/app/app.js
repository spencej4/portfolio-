import React from 'react';
import Home from './components/home';
import Navbar from './components/navbar';
import Tech from './components/tech';
import Work from './components/work';
import About from './components/about'

class App extends React.Component{
  render(){
    return(
      <div>
        <Navbar />
        <Home />
        <Work />
        <Tech />
        <About />
      </div>
    )
  }
}
export default App
