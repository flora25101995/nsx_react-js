import React from 'react';
import logo from '../../assets/images/logo.svg';
import './App.css';
import HeaderComp from '../../component//header-component/header-component'
import FooterComp from '../../component/footer-component/footer-component'
import BodyComp from '../../component/body-component/body-component'
import MainRouter from '../../routers'

function App() {
  return (
    <div>
      <div className="App">
      <HeaderComp></HeaderComp>
      <MainRouter></MainRouter>
        {/* <div>
          <BodyComp></BodyComp>
        </div> */}
      <FooterComp></FooterComp>
      </div>
    </div>
  );
}

export default App;