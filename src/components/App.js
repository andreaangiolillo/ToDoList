import React from 'react';
import '../App.css';
import ReactLogo from './ReactLogo';
import CheckBox from './CheckBox'

function App() {
  return (
    <div className="MainContainer">

      <ReactLogo />
      <div>
        <CheckBox />
        <CheckBox />
        <CheckBox />
      </div>
    </div>
  );
}

export default App;
