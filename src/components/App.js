import React from 'react';
import '../App.css';
import CheckBox from './CheckBox';
import NavigationBar from './NavigationBar';
import todosData from '../data/testData.js';


class App extends React.Component{
  constructor(){
    super();
    this.state={
      todoList: todosData.map(item => (<CheckBox key={item.id} item={item} />))
    }
  }

  render(){
    return(
      <div className="MainContainer" className="todo-list">
        <NavigationBar />
        <div>
          {this.state.todoList}
        </div>
      </div>
    )
  }
}

export default App;
