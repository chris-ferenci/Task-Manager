import { toBeInTheDocument } from '@testing-library/jest-dom/dist/matchers';
import React, {useState, useContext, createContext } from 'react';
import './inbox.css'

import LeftNav from '../components/LeftNav/LeftNav';
import Todo from '../components/ToDo/Todo';
import TodoForm from '../components/ToDo/ToDoForm';

import { TodoContext } from '../App';

const Inbox = ({  }) => {

    const [ inboxTodos, setInboxTodos, addTodo, completeTodo, removeTodo ] = useContext(TodoContext);

    // const [ todos, setTodos ] = useState(
    //     [{ text: "Task 1",
    //     isCompleted: false,
    //     status: "today" }, 
    //     { text: "Task 2",
    //     isCompleted: false,
    //     status: "today" }, 
    //     { text: "Task 3",
    //     isCompleted: false,
    //     status: "upcoming" }, 
    //     { text: "Task 4",
    //     isCompleted: false,
    //     status: "today" }]
    // );

    // const addTodo = text => {
    //     const newTodos = [...inboxTodos, { text }];
    //     setInboxTodos(newTodos);
    //   };

    // const completeTodo = index => {
    //     const newTodos = [...inboxTodos];
    //     newTodos[index].isCompleted = true;
    //     setInboxTodos(newTodos);
    // };

    // const removeTodo = index => {
    //     const newTodos = [...inboxTodos];
    //     newTodos.splice(index, 1);
    //     setInboxTodos(newTodos);
    //   };



    return(

            <section id="primary-content">
                <h1>Inbox</h1>


                {/* <TasksList tasksList={tasksList} handleToggle={handleToggle}/> */}

                <div className="todo-list">
                    {inboxTodos.map((todo, index) => (
                    <Todo
                        key={index}
                        index={index}
                        todo={todo}
                        completeTodo={completeTodo}
                        removeTodo={removeTodo}
                    />
                    ))}
                    <TodoForm addTodo={addTodo} />
                </div>

            </section>

    )

};

export default Inbox;