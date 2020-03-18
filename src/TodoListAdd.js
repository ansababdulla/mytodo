import React, { Component } from "react";
import './App.css';
 
class TodoListAdd extends Component {
  constructor(props){
    super(props);
    this.state={
      items: []
    };
    this.createTasks=this.createTasks.bind(this);
    this.addItem=this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  


  createTasks(item) {
    return <li key={item.key} onClick={() => this.deleteItem(item.key)}>{item.text}</li>
  }
  
  addItem(event) {
    if (this._inputElement.value !== "") {
      let newDate = new Date()
      var newItem = {
        text: this._inputElement.value+"----"+newDate.getDate()+"/"+newDate.getMonth() + 1+"/"+newDate.getFullYear()+"-"
        +new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds(),
        key: Date.now()
      };
    
   
      this.setState((prevState) => {
        return { 
          items: prevState.items.concat(newItem) 
        };
      });
     
      this._inputElement.value = "";
    }
     
    console.log(this.state.items);
       
    event.preventDefault();
  }

   deleteItem(key) {
   var filteredItems = this.state.items.filter(function (item) {
     return (item.key !== key);
   });

     this.setState({
     items: filteredItems
   });
  }
 
  render() {
    var todoEntries = this.state.items;
    var listItems = todoEntries.map(this.createTasks);
 
    return (
      <div className="App">
              <h2>Your Todo App</h2>
      <h4>Enter your Tasks</h4>
        <form onSubmit={this.addItem}>
     <input ref={(a) => this._inputElement= a }></input>
     <br></br>
     <br></br>
     <button type="submit">Add Task</button>
   
   </form>
       
      <ol className="App">
          {listItems} 
      </ol>
      </div>
      
      
    );
  }
};
 
export default TodoListAdd;