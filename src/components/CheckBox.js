import React from 'react';


class CheckBox extends React.Component{

  constructor(props){
    super(props);
    this.state={
      key: props.item.id,
      item : props.item,
      handleOnClick: props.handleOnClick
    }
  }


  render(){
    const completedStyle="completed";
    const onGoing="onGoing";
    return (
      <div className='todo-item'>
        <input
          type="checkbox"
          checked={this.state.item.completed}
          onChange={() => this.state.handleOnClick(this.state.item.id)}/>
        <input
          className={this.state.item.completed ? completedStyle : onGoing}
          type="text"
          defaultValue={this.state.item.text}
          size="35"/>
      </div>
    )
  }
}

export default CheckBox;
