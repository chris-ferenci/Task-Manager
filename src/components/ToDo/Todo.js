import React from "react";
import './todo.css';
import { createContext, useContext } from "react";
import { useInRouterContext } from "react-router-dom";

import { TodoContext } from "../../App";


const Todo = ({ }) => {

  const { inboxTodos, setInboxTodos } = useContext(TodoContext);

  // const [ inboxTodos, setInboxTodos ] = useContext(TodoContext);

    return (

      <div className="todo-list-item">
        <li className="cb-priority-low">
        
        {/* <input type="checkbox" checked/>
        <label></label> */}

          <div
            className="todo"
          >
           <p style={{ textDecoration: inboxTodos.isCompleted ? "line-through" : "" }}>{inboxTodos.text}</p> 
          </div>

            <div>
              <button className="btn-checkbox-round" ></button>
              {/* onClick={() => completeTodo(index)} */}
            </div>
            
            

          

        </li>
      </div>


    );
  }

  export default Todo;