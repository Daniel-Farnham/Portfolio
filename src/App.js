import React from 'react';
import './App.css';
import cloudImage from './assets/CloudImage.png';
import IntroductionText from './IntroductionText';
import Menu from './Menu';

function App() {
  return (
   <div className="App">
      <header className="App-header">
        <div className="clouds"> 
          <img className="cloudImage" src={cloudImage} alt="cloudImage"></img>
          <img className="cloudImage_1" src={cloudImage} alt="cloudImage"></img>
        </div>
        <IntroductionText textType={"introduction"} textContent={"Hi there, my name is Daniel."} />
        <Menu />
      </header>
    </div>
  );
}

export default App;
