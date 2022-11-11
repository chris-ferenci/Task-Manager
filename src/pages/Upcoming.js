import React, { useContext } from 'react';
import { EditText,  } from 'react-edit-text';

import { TodoContext } from '../App';

export default function Upcoming(){


    const { upcomingTodos, setUpcomingTodos } = useContext(TodoContext);

    // States
    const [ value, setValue ] = React.useState("Add a task");
    
    const handleText = (e) => setValue(e.target.value);


    // strikethrough
    const handleDone = (todo) => {
        // addTodo(todos.filter((i) => i !== todo));
        const newArray = [...upcomingTodos];
        const match = newArray.find((i, index) => {
          return i.text === todo.text;
        });
    
        // console.log("WAS STATE MUTATED", inboxTodos);
    
        match.isCompleted = true;
        setUpcomingTodos(newArray);
      };


    const handleSubmit = (e) => {
        e.preventDefault();
        // e.target.reset();
        if (!value) return;
        setUpcomingTodos((prevTodo) => [...prevTodo, { text: value, isCompleted: false, status: "today"  }]);
        setValue("Add a task");
    };

    return(
        <section id="primary-content">
            <div className="todo-container">

        <h1>Upcoming</h1>

            {upcomingTodos.length == 0 ? (
                //Check if state is empty or full
                <p>No tasks here. Add a task to get started</p>

            ) : (
                upcomingTodos.map((todo, index) => {
                    return (
                    <div className="todo-list">
 
                        <li className="todo-list-item" key={todo.id}> 

                            <button className="btn-checkbox-round"  onClick={() => handleDone(todo)} ></button>

                            <span className={todo.isCompleted ? "isDone" : "in-progress"}>
                                <EditText
                                    name="editText"
                                    defaultValue={todo.text}
                                    style={{color: "#2e2e2e", paddingLeft: "10px", fontSize: "1.3rem", outline:"none", border:"none"}}
                                />
                            </span>

                        </li> 

                    </div>
                    

                    );
                })
            )}

            <form onSubmit={handleSubmit} autoComplete="off">
                <input type="text" id="newTodo" className="todo-form" value={value} onClick= {e => setValue("")} onChange={handleText} />
                {/* <button type="submit">Add</button> */}
            </form>

            </div> 
            {/* End Todo Container */}
        </section>
    )

}
