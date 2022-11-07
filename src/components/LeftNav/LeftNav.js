import React, { useContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom' ;
import "./leftnav.css";
import { MdInbox, MdOutlineToday, MdCalendarToday, MdKeyboardArrowDown, MdPerson, MdKeyboardArrowRight, MdAdd } from "react-icons/md";
import { IconContext } from "react-icons";

export default function LeftNav() {

    const [isActive, setActive] = useState(false);

    return(
    

        <nav id="left-nav">
            <ul className="left-nav-main">

                    <IconContext.Provider value={{ color: "#00A8DD", size: "24px" }}>
                        <Link to='/inbox'><li><span className="li-icons"><MdInbox/></span>Inbox<span id="li-task-count" className="li-task-count-style"><p>5</p></span></li></Link>
                    </IconContext.Provider>

                    <IconContext.Provider value={{ color: "#47DD00", size: "24px"  }}>
                        <Link to='/today'><li><span className="li-icons"><MdOutlineToday/></span>Today<span id="li-task-count" className="li-task-count-style">5</span></li></Link>
                    </IconContext.Provider>
                
                    <IconContext.Provider value={{ color: "#9600DD", size: "24px"  }}>
                        <Link to='/upcoming'><li><span className="li-icons"><MdCalendarToday/></span>Upcoming</li></Link>
                    </IconContext.Provider>

                    <li><span className="li-icons"><MdKeyboardArrowDown/></span>Projects</li>

                    {/* <li class="li-today">Today<span id="li-task-count" class="li-task-count-style">5</span></li>
                    <li class="li-upcoming">Upcoming</li>
                    <li class="li-projects">Projects</li> */}
            </ul>

            <ul>
                <li><span className="li-icons"><MdKeyboardArrowDown/></span><span className="project-dot"></span>Work
                    <ul id="toggle-inner">
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