import React from 'react';


class AddElement extends React.Component{

  constructor(props){
    super(props);
    this.state ={
      addItem: props.addItem
    }
  }

  render(){
    return(
      <div className="col-sm-1">
        <button
          type="button"
          onClick={()=> this.state.addItem()}>+</button>
      </div>
    )
  }

}

export default AddElement;
