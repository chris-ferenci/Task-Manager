import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom' ;
import "./leftnav.css";
import { MdInbox, MdOutlineToday, MdCalendarToday, MdKeyboardArrowDown, MdPerson, MdKeyboardArrowRight, MdAdd } from "react-icons/md";
import { IconContext } from "react-icons";
import { TaskContext } from '../../TaskContext';

import Inbox from '../../pages/Inbox';
import Today from '../../pages/Today';
import Upcoming from '../../pages/Upcoming';

export default function LeftNav() {


    return(
    <Router>

        <nav id="left-nav">
            <ul className="left-nav-main">

                    <IconContext.Provider value={{ color: "blue" }}>
                        <Link to='/inbox'><li><span className="li-icons"><MdInbox/></span>Inbox<span id="li-task-count" className="li-task-count-style"><p>5</p></span></li></Link>
                    </IconContext.Provider>

                    <IconContext.Provider value={{ color: "green" }}>
                        <Link to='/today'><li><span className="li-icons"><MdOutlineToday/></span>Today<span id="li-task-count" className="li-task-count-style">5</span></li></Link>
                    </IconContext.Provider>
                
                    <IconContext.Provider value={{ color: "purple" }}>
                        <Link to='/upcoming'><li><span className="li-icons"><MdCalendarToday/></span>Upcoming</li></Link>
                    </IconContext.Provider>

                    <li><span className="li-icons"><MdKeyboardArrowDown/></span>Projects</li>

                    {/* <li class="li-today">Today<span id="li-task-count" class="li-task-count-style">5</span></li>
                    <li class="li-upcoming">Upcoming</li>
                    <li class="li-projects">Projects</li> */}
            </ul>

            <ul className="left-nav-projects">

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
        
        <Routes>
            <Route exact path="/" element={ <Navigate to="/inbox" />}></Route>
            <Route exact path='/inbox' element={<Inbox />}></Route>
            <Route exact path='/today' element={<Today />}></Route>
            <Route exact path='/upcoming' element={<Upcoming />}></Route>
        </Routes>

    </Router>

    );
}