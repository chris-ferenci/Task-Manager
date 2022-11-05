import React from "react";
import './todo.css';
import { createContext } from "react";
import { useInRouterContext } from "react-router-dom";


export default function Todo({ todo, index, completeTodo, removeTodo }) {

    const TaskContext = createContext([todo, index, completeTodo, removeTodo]);

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