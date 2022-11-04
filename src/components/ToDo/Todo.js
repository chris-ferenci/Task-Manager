import React from "react";
import './todo.css';

export default function Todo({ todo, index, completeTodo, removeTodo }) {
    return (

    <li class="cb-priority-low">
    <input type="checkbox" checked id="li3" />
    <label for="li3"></label>
      <div
        className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
        {todo.text}
        <div>
          <button onClick={() => completeTodo(index)}>Complete</button>
          <button onClick={() => removeTodo(index)}>x</button>
        </div>
      </div>
    </li>


    );
  }