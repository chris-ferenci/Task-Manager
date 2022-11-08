import { toBeInTheDocument } from '@testing-library/jest-dom/dist/matchers';
import React, {useContext } from 'react';
import './inbox.css'
import '../components/ToDo/todo.css'

// import Todo from '../components/ToDo/Todo';
import TodoForm from '../components/ToDo/ToDoForm';

import { TodoContext } from '../App';
const Inbox = () => { 

    // const [ inboxTodos, setInboxTodos, addTodo, completeTodo, removeTodo ] = useContext(TodoContext);

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
    //     const newTodos = [task.inboxTodos, { text }];
    //     task.setInboxTodos(newTodos);
    //   };

    // const completeTodo = index => {
    //     const newTodos = [task.inboxTodos];
    //     newTodos[index].isCompleted = true;
    //     task.setInboxTodos(newTodos);
    // };

    // const removeTodo = index => {
    //     const newTodos = [task.inboxTodos];
    //     newTodos.splice(index, 1);
    //     task.setInboxTodos(newTodos);
    //   };

    const { inboxTodos, setInboxTodos } = useContext(TodoContext);

    return(

        <section id="primary-content">
            <h1>Inbox</h1>

            {inboxTodos.length == 0 ? (
                //Check if state is empty or full
                <p>No tasks here. Add a task to get started</p>
            ) : (
                inboxTodos.map((todo) => {
                    return (

                    <div className="todo-list">
                        <div className="todo-list-item">
                         <li className="cb-priority-low"> 

                            <div className='todo'>
                                <div id={todo.id} className="flex" style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
                                    <p >{todo.text}</p>
                                    <div>
                                        <button className="btn-checkbox-round" ></button>
                                        {/* onClick={() => completeTodo(index)} */}

                                        
                                    </div>
                                </div>
                            </div>   

                         </li>
                        </div>
                    </div>

                    );
                })
            )}


        </section>

    );

};

export default Inbox;