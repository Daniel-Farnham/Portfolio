import './App.css';
import cloudImage from './assets/CloudImage.png';
import IntroductionText from './IntroductionText';
import Menu from './Menu';

function App() {
  return (
   <div className="App">
      <header className="App-header">
        <img className="cloudImage" src={cloudImage} alt="cloudImage"></img>
        <IntroductionText />
        <Menu />
      </header>
    </div>
  );
}

export default App;
