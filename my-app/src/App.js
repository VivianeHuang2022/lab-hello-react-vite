import './App.css';
import logo from './assets/ironhack-logo-xs.png';
import menuIcon from './assets/menu-top-xs.png';
import icon1 from './assets/icon1.png';
import icon2 from './assets/icon2.png';
import icon3 from './assets/icon3.png';
import icon4 from './assets/icon4.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Ironhack Logo" className="App-logo" />
        <img src={menuIcon} alt="Menu Icon" className="Menu-icon" />
      </header>
      <div className="Hero">
        <h1>Say hello to ReactJS</h1>
        <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
        <button>Awesome!</button>
      </div>
      <div className="Features">
        <div className="Feature">
          <img src={icon1} alt="Declarative Icon" />
          <img src={icon2} alt="Declarative Icon" />
          <img src={icon3} alt="Declarative Icon" />
          <img src={icon4} alt="Declarative Icon" />
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        {/* Repeat for other features */}
      </div>
    </div>
  );
}

export default App;
