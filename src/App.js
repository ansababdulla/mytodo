import React,{Component} from 'react';
import TodoList from './TodoList';
import './App.css';
import TodoListInput from './TodoListInput';
import TodoListDelete from './TodoListDelete';
import TodoListAdd from './TodoListAdd';


class App extends Component{
//   constructor(props){
//     super(props)
//     this.state={
//         items: []
//     };
//     this.addItem=this.addItem.bind(this);
//     this.deleteItem = this.deleteItem.bind(this);

// }
// deleteItem(key) {
//   var filteredItems = this.state.items.filter(function (item) {
//     return (item.key !== key);
//   });
 
//   this.setState({
//     items: filteredItems
//   });
// }
// addItem(event) {
//   if (this._inputElement.value !== "") {
//     let newDate = new Date()
//     var newItem = {
//       text: this._inputElement.value+"----"+newDate.getDate()+"/"+newDate.getMonth() + 1+"/"+newDate.getFullYear()+"-"
//       +new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds(),
//       key: Date.now()
//     };
  
 
//     this.setState((prevState) => {
//       return { 
//         items: prevState.items.concat(newItem) 
//       };
//     });
   
//     this._inputElement.value = "";
//   }
   
//   console.log(this.state.items);
     
//   event.preventDefault();
// }
  render(){
    return(
  //     <div className="App">
  //     <h2>Your Todo App</h2>
  //     <h4>Enter your Tasks</h4>
  //   <form onSubmit={this.addItem}>
  //   <input ref={(a) => this._inputElement= a }></input>
  //   <br></br>
  //   <br></br>
  //   <button type="submit">Add Task</button>
  //   <TodoListAdd entries={this.state.items} delete={this.deleteItem}/>
  // </form>
  // <div className="App">
        
  //       <TodoList></TodoList>
  //       <TodoListDelete></TodoListDelete>

        
  //       </div>

  <div></div>

    );
  }
}
export default App;