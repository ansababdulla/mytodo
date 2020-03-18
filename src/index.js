import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import TodoListInput from './TodoListInput';
import TodoListDelete from './TodoListDelete';
import TodoList from './TodoList';
import * as serviceWorker from './serviceWorker';
import TodoListAdd from './TodoListAdd';


  const routing = (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/input">Input</Link>
          </li>
          <li>
            <Link to="/read">read</Link>
          </li>
          <li>
            <Link to="/delete">delete</Link>
          </li>
          <li>
            <Link to="/add">add</Link>
          </li>
        </ul>
        <Route exact path="/" component={App} />
        <Route path="/add" component={TodoListAdd} />
        <Route path="/input" component={TodoListInput} />
        <Route path="/read" component={TodoList} />
        <Route path="/delete" component={TodoListDelete} />
      </div>
    </Router>
  )


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
