import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom' ;
import "./leftnav.css";
import { MdInbox, MdOutlineToday, MdCalendarToday, MdKeyboardArrowDown, MdPerson, MdKeyboardArrowRight, MdAdd } from "react-icons/md";
import { IconContext } from "react-icons";
import { TodoContext } from '../../App';

export default function LeftNav() {

    const [isActive, setActive] = useState(true);

    const handleToggle = () => setActive(!isActive)

    const {inboxTodos, todayTodos, upcomingTodos} = useContext(TodoContext);

    const inboxCompletedCount = inboxTodos.filter(task => task.isCompleted == false)
    const todayCompletedCount = todayTodos.filter(task => task.isCompleted == false)
    const upcomingCompletedCount = upcomingTodos.filter(task => task.isCompleted == false)

    return(
    

        <nav id="left-nav">
            <ul className="left-nav-main">

                    <IconContext.Provider value={{ color: "#00A8DD", size: "24px" }}>
                        <Link to='/inbox'><li><span className="li-icons"><MdInbox/></span>Inbox<span id="li-task-count" className="li-task-count-style"><p>{inboxCompletedCount.length}</p></span></li></Link>
                    </IconContext.Provider>

                    <IconContext.Provider value={{ color: "#47DD00", size: "24px"  }}>
                        <Link to='/today'><li><span className="li-icons"><MdOutlineToday/></span>Today<span id="li-task-count" className="li-task-count-style">{todayCompletedCount.length}</span></li></Link>
                    </IconContext.Provider>
                
                    <IconContext.Provider value={{ color: "#9600DD", size: "24px"  }}>
                        <Link to='/upcoming'><li><span className="li-icons"><MdCalendarToday/></span>Upcoming<span id="li-task-count" className="li-task-count-style">{upcomingCompletedCount.length}</span></li></Link>
                    </IconContext.Provider>

                    <li><span className="li-icons"><MdKeyboardArrowDown/></span>Projects</li>

                    {/* <li class="li-today">Today<span id="li-task-count" class="li-task-count-style">5</span></li>
                    <li class="li-upcoming">Upcoming</li>
                    <li class="li-projects">Projects</li> */}
            </ul>

            <ul>
                <li onClick={handleToggle}><span className="li-icons"><MdKeyboardArrowDown/></span><span className="project-dot"></span>Work
                    <ul className = {isActive? 'toggle-inner-hide' : 'toggle-inner-show'}>
                        <li><span className="project-dot-yellow"></span>New Brand<span id="li-task-count" className="li-task-count-style">5</span></li>
                        <li>Website Update<span id="li-task-count" className="li-task-count-style">5</span></li>
                        <li><span className="li-icons"><MdPerson /></span>Product Roadmap<span id="li-task-count" className="li-task-count-style">5</span></li>
                        <li><span className="li-icons"><MdPerson /></span>Meeting Agenda<span id="li-task-count" className="li-task-count-style">5</span></li>
                    </ul>
                </li>

                <li><span className="li-icons"><MdKeyboardArrowRight /></span><span className="project-dot"></span>Personal<span id="li-task-count" className="li-task-count-style">5</span></li>

                <li><span className="li-icons"><MdAdd /></span><span className="add-project">Add Project</span></li>
                    
            </ul>
        </nav>
        

    );
}