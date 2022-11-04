import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './tasksmain.css';
import data from "../data.json";

// components
import Inbox from '../pages/Inbox';
import Today from '../pages/Today';
import Upcoming from '../pages/Upcoming';


import TasksList from './TasksList';

export default function Taskmain() {

    const [ tasksList, setTasksList ] = useState(data);

    const handleToggle = (id) => {
        let mapped = tasksList.map(task => {
          return task.id == id ? { ...task, complete: !task.complete } : { ...task};
        });
        setTasksList(mapped);
      }

    return(
        

            <section id="primary-content">

                <h1>Inbox</h1>

                <TasksList tasksList={tasksList} handleToggle={handleToggle}/>

                {/* <ul class="inbox">

                    <li class="cb-priority-high">
                        <input type="checkbox" checked id="li1" />
                        <label for="li1"></label>
                        <p>Call Mom</p>
                    </li>

                    <li class="cb-priority-low">
                        <input type="checkbox" checked id="li2" />
                        <label for="li2"></label>
                        <p>Buy the new issue of Scientific American</p>
                    </li>

                    <li class="cb-priority-low">
                        <input type="checkbox" checked id="li3" />
                        <label for="li3"></label>
                        <p>Buy the new album by Rake</p>
                    </li>

                    <li class="cb-priority-neutral">
                        <input type="checkbox" checked id="li4" />
                        <label for="li4"></label>
                        <p>Return the textbook to Josie</p>
                    </li>

                    <li class="cb-priority-neutral">
                        <input type="checkbox" checked id="li5" />
                        <label for="li5"></label>
                        <p>Buy a gift card for Dad</p>
                    </li>

                    <IconContext.Provider value={{color: "red"}}>
                        <li id="add-task"><span><MdAdd /></span><p>Add Task</p></li>
                    </IconContext.Provider>

                    <form>
                        <label htmlFor="new-todo-input" className="label__lg">
                            What needs to be done?
                        </label>
                        <input
                        type="text"
                        id="new-todo-input"
                        name="text"
                        value="Add Task"
                        autoComplete="off"
                        />
                        <button type="submit" className="btn btn__primary btn__lg">
                        Add
                        </button>
                    </form>

                </ul> */}

            </section>




    );
}