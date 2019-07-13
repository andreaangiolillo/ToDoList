import React from 'react';
import logo from '../logo.svg';

function NavigationBar(){
  return(
    <div className='col-sm-11'>
      <nav className='navbar navbar-expand-md navbar-white sticky-top'>
        <div className='container-fluid'>

          <a className='navbar-brand' href='#'>
            <img src={logo} className="App-logo" alt="logo" height='100px'/>
           To do List
          </a>
        </div>
      </nav>
    </div>

  )
}

export default NavigationBar;
