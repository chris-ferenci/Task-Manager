import React, {useState} from 'react';
import Todo from '../components/ToDo/Todo';
import TodoForm from '../components/ToDo/ToDoForm';

export default function Today(){

    const [ todos, setTodos ] = useState(
        [{ text: "Task 1 Different",
        isCompleted: false,
        status: "today" }, 
        { text: "Task 2 Different",
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

    return(
        <section id="primary-content">
            <h1>This is Today</h1>

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

    )

}
