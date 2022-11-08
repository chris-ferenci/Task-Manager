import React, {useContext} from 'react';
import './todoform.css';


import { TodoContext } from '../../App';



export default function TodoForm({ addTodo }) {
    // const placeholder = "Click to add a task"

    const task = useContext(TodoContext); 

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