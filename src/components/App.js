import React from 'react';
import '../App.css';
import CheckBox from './CheckBox';
import NavigationBar from './NavigationBar';
import AddElement from './AddElement';
import todosData from '../data/testData.js';


class App extends React.Component{
  constructor(){
    super();
    this.handleOnClick = this.handleOnClick.bind(this);
    this.addItem = this.addItem.bind(this);

    const nextId = function() {
                const maxId = 1;
                this.state.todosData.forEach(
                    function(item){
                      if (item.id> maxId){
                        maxId = item.id;
                      }
                    })
                return maxId + 1;
              }

    this.state={
      toDoList: todosData,
      nextId : nextId
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

    addItem(){
      console.log("hereeeeee")
      const item =
      {
        id: this.state.nextId,
        text: "",
        completed: false
      }
      const newState = this.state.toDoList.push(item);
      this.setState(function(oldState){
        return {
          todoList : newState,
          nextId : oldState.nextId + 1
        }
      });

    }




  render(){
    const toDoItem= this.state.toDoList.map(
      item => (<CheckBox
                  key={item.id}
                  item={item}
                  handleOnClick={this.handleOnClick}/>)
                )
    return(
      <div className="MainContainer" className="todo-list">
        <div className="row">
          <NavigationBar />
          <AddElement
            addItem={this.addItem}/>
        </div>
        <div>
          {toDoItem}
        </div>
      </div>
    )
  }

}

export default App;
