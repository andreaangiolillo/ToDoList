import React from 'react';
import '../App.css';
import CheckBox from './CheckBox';
import NavigationBar from './NavigationBar';
import todosData from '../data/testData.js';


class App extends React.Component{
  constructor(){
    super();
    this.handleOnClick = this.handleOnClick.bind(this);

    this.state={
      toDoList: todosData
    }

  }


  handleOnClick(id){
    this.setState(oldState => {
      const newToDoList = oldState.toDoList.map(
        function(item){
            if(item.id === id){
              item.completed = !item.completed;
            }
            return item;
        })
      return {todoList: newToDoList};
      })
    }


  render(){
    const toDoItem= this.state.toDoList.map(item => (<CheckBox key={item.id} item={item} handleOnClick={this.handleOnClick}/>))
    return(
      <div className="MainContainer" className="todo-list">
        <NavigationBar />
        <div>
          {toDoItem}
        </div>
      </div>
    )
  }

}

export default App;
