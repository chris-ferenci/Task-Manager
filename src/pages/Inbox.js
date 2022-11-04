import { toBeInTheDocument } from '@testing-library/jest-dom/dist/matchers';
import React, {useState, createContext} from 'react';
import './inbox.css'

import Todo from '../components/ToDo/Todo';
import TodoForm from '../components/ToDo/ToDoForm';

export default function Inbox(){

    const [ todos, setTodos ] = useState(
        [{ text: "Task 1",
        isCompleted: false,
        status: "today" }, 
        { text: "Task 2",
        isCompleted: false,
        status: "today" }, 
        { text: "Task 3",
        isCompleted: false,
        status: "upcoming" }, 
        { text: "Task 4",
        isCompleted: false,
        status: "today" }]
    );

    const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
      };

    const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
    };

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
      };

    // const handleToggle = (id) => {
    //     let mapped = tasksList.map(task => {
    //       return task.id == id ? { ...task, complete: !task.complete } : { ...task};
    //     });
    //     setTasksList(mapped);
    //   }

    return(

        <CounterContext.Provider value={{todos, setTodos}}>
            <section id="primary-content">
                <h1>Inbox</h1>
                <p>{todos.length}</p>

                {/* <TasksList tasksList={tasksList} handleToggle={handleToggle}/> */}

                <div className="todo-list">
                    {todos.map((todo, index) => (
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
        </CounterContext.Provider>
    )

}