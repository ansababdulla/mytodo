import React, { Component } from "react";
import './App.css';
import axios from "axios";
 
class TodoListDelete extends Component {

  state={
    name:[]
  }
handleChange=event=>{
    
    this.setState({id:event.target.value});
}; 
handleSubmit=event=>{
    event.preventDefault();


    axios.delete('https://jsonplaceholder.typicode.com/users/${this.state.id}').then(res=>{
        console.log(res);
        console.log(res.data);
        
    });
};
  render(){
    return(
        <div className="App">
        
     <form onSubmit={this.handleSubmit}>
    
         <label>
             TodoListID:
             <input type="number" name="id" onChange={this.handleChange}></input>
             <button type="submit">delete</button>

         </label>
     </form>
     </div>
    )
  }


}

 
export default TodoListDelete;