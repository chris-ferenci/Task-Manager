import React from 'react';
import './todoform.css';

import { MdAdd } from "react-icons/md";
import { IconContext } from "react-icons";

export default function TodoForm({ addTodo }) {
    // const placeholder = "Click to add a task"

    const [value, setValue] = React.useState("Add a task");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("Add a task");
    };
  
    return (
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={value}
          onClick= {e => setValue("")}
          onChange={e => setValue(e.target.value)}
        />
      </form>
    );
  }