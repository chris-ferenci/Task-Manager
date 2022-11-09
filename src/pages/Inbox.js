import React, {useContext, useState, useEffect } from 'react';
import './inbox.css'
import '../components/ToDo/todo.css'

// import Todo from '../components/ToDo/Todo';
import TodoForm from '../components/ToDo/ToDoForm';

import { TodoContext } from '../App';
const Inbox = () => { 

    // contexts
    const { inboxTodos, setInboxTodos, inboxNewText, setInboxNewText } = useContext(TodoContext);

    // States
    const [ value, setValue ] = React.useState("Add a task");
    
    const handleText = (e) => setValue(e.target.value);


    // strikethrough
    const handleDone = (todo) => {
        // addTodo(todos.filter((i) => i !== todo));
        const newArray = [...inboxTodos];
        const match = newArray.find((i, index) => {
          return i.text === todo.text;
        });
    
        // console.log("WAS STATE MUTATED", inboxTodos);
    
        match.isCompleted = true;
        setInboxTodos(newArray);
      };


    const handleSubmit = (e) => {
        e.preventDefault();
        // e.target.reset();
        if (!value) return;
        setInboxTodos((prevTodo) => [...prevTodo, { text: value, isCompleted: false, status: "today"  }]);
        setValue("Add a task");
    };


    return(

        <section id="primary-content">
            <div className="todo-container">

        <h1>Inbox</h1>

            {inboxTodos.length == 0 ? (
                //Check if state is empty or full
                <p>No tasks here. Add a task to get started</p>

            ) : (
                inboxTodos.map((todo, index) => {
                    return (
                    <div className="todo-list">
 
                        <li className="todo-list-item" key={todo.id}> 

                            <button className="btn-checkbox-round"  onClick={() => handleDone(todo)} ></button>

                            <span className={todo.isCompleted ? "isDone" : "in-progress"}>
                                {todo.text}
                            </span>

                        </li> 

                    </div>

                    

                    );
                })
            )}

            <form className="todo-form" onSubmit={handleSubmit}>
                <input type="text" id="newTodo" className="input" value={value} onClick= {e => setValue("")} onChange={handleText} />
                {/* <button type="submit">Add</button> */}
            </form>

            </div> 
            {/* End Todo Container */}
        </section>

        


    );

};

export default Inbox;