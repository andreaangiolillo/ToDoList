import React from 'react';
import '../App.css';
import CheckBox from './CheckBox';
import NavigationBar from './NavigationBar';
import todosData from '../data/testData.js';

const todoList = todosData.map(item => (<CheckBox key={item.id} item={item} />));

function App() {
  return (
    <div className="MainContainer" className="todo-list">
      <NavigationBar />
      <div>
        {todoList}
      </div>
    </div>
  );
}

export default App;
