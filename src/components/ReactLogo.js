import React from 'react';
import logo from '../logo.svg';
import '../css/ReactLogo.css';

function ReactLogo(){
  return (

    <div className="row" >
      <div className="col-md-2 col-sm-2" >
          <img src={logo} className="App-logo" alt="logo"/>
      </div>
      <div className="col-md-3 col-sm-5">
          <h1>TO DO LIST</h1>
      </div>
    </div>

  )
}

export default ReactLogo;
