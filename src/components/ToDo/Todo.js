import React from "react";
import './todo.css';
import { createContext, useContext } from "react";
import { useInRouterContext } from "react-router-dom";

import { TodoContext } from "../../App";


const Todo = ({ todo, index, completeTodo, removeTodo }) => {

  // const [ inboxTodos, setInboxTodos ] = useContext(TodoContext);

  const value = useContext(TodoContext); 

    return (

      <div className="todo-list-item">
        <li className="cb-priority-low">
        
        {/* <input type="checkbox" checked/>
        <label></label> */}

          <div
            className="todo"
            style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
          >
            <div>
              <button className="btn-checkbox-round" onClick={() => completeTodo(index)}></button>
            </div>
            
            {todo.text}
            
            <div>
              <button onClick={() => removeTodo(index)}>x</button>
            </div>

          </div>

        </li>
      </div>


    );
  }

  export default Todo;