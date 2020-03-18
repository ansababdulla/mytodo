import React, { Component } from "react";
import './App.css';
import axios from "axios";
 
class TodoListInput extends Component {

  state={
    name:[]
  }
handleChange=event=>{
    
    this.setState({name:event.target.value});
}; 
handleSubmit=event=>{
    event.preventDefault();

    const user={
        name:this.state.name
    }
    axios.post('https://jsonplaceholder.typicode.com/users',{user}).then(res=>{
        console.log(res);
        console.log(res.data);
        
    });
};
  render(){
    return(
        <div className="App">
     <form onSubmit={this.handleSubmit}>
         <label>
             TodoList:
             <input type="text" name="name" onChange={this.handleChange}></input>
             <button type="submit">Add</button>
         </label>
     </form>
     </div>
    )
  }


}

 
export default TodoListInput;