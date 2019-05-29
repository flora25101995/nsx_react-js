import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderComp from './component/header-component/header-component'
import FooterComp from './component/footer-component/footer-component'

function App() {
  return (
    <div>
      <div className="App">
      <HeaderComp></HeaderComp>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      <FooterComp></FooterComp>
      </div>
    </div>
  );
}

export default App;
