import React from 'react';
import '../App.css';
import CheckBox from './CheckBox';
import NavigationBar from './NavigationBar';

function App() {
  return (
    <div className="MainContainer">
      <NavigationBar />
      <div>
        <CheckBox />
        <CheckBox />
        <CheckBox />
      </div>
    </div>
  );
}

export default App;
