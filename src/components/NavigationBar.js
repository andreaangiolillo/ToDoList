import React from 'react';
import logo from '../logo.svg';

function NavigationBar(){
  return(
    <div>
      <nav className='navbar navbar-expand-md navbar-dark bg-dark sticky-top'>
        <div className='container-fluid'>

          <a className='navbar-brand' href='#'>
            <img src={logo} className="App-logo" alt="logo" height='100px'/>
          </a>

          <button className='navbar-toggler' type='button' data-toggle='collapse' data-target="#navbarText" aria-controls='navbarText' aria-expanded="false" aria-label="Toggle navigation">
            <span className='navbar-toggler-icon'/>
          </button>
          <div className='collapse navbar-collapse' id='navbarText'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item active'>
                <a className='nav-link' href='#'>To do list</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>About</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

  )
}

export default NavigationBar;
