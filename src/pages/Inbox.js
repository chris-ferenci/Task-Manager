import React, {useContext } from 'react';
import 'react-edit-text/dist/index.css';
import './inbox.css'
import '../components/ToDo/todo.css'
import { EditText } from 'react-edit-text';


import { TodoContext } from '../App';
const Inbox = () => { 

    // contexts
    const { inboxTodos, setInboxTodos } = useContext(TodoContext);

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

        if (match.isCompleted === false){
            match.isCompleted = true;
        } else if (match.isCompleted === true){
            match.isCompleted = false;
        }
        console.log("Is completed:" + match.isCompleted)
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
                    <div key={index} className="todo-list">
 
                        <li className="todo-list-item" key={todo.id}> 

                            <button className="btn-checkbox-round"  onClick={() => handleDone(todo)} ></button>

                            <span className={todo.isCompleted ? "isDone" : "in-progress"}>
                                <EditText 
                                    key={index}
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

        


    );

};

export default Inbox;