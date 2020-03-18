import React, { Component } from "react";
import './App.css';
import axios from "axios";
 
class TodoList extends Component {

  state={
    person:[]
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
      this.setState({person:res.data});
    });
  }
  render(){
    return(
      <div className="App">
      <ul>
        {this.state.person.map(person => <li key={person.id}>{person.name}</li>)}
        
      </ul>
      </div>
      
    )
  }


}

 
export default TodoList;