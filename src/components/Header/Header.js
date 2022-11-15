import React, {useState, useContext, useEffect, createContext} from 'react';
import "./header.css";
import {MdMenu, MdCheckCircle} from "react-icons/md"
import { useLocation } from 'react-router-dom'

// components
import LeftNav from '../LeftNav/LeftNav';
import QuickFind from '../QuickFind/QuickFind';

// context
import { TodoContext } from '../../App';

const Header = () => {

    // show/hide nav
    const [ showNav, setShowNav ] = useState(false);
    const handleNav = () => setShowNav(!showNav)

    // const handleNav = event => {
    //     setShowNav(current => !current)
    // }


    //todo context
    const {inboxTodos, todayTodos, upcomingTodos} = useContext(TodoContext);

     // set current page header count
    const [ curTaskCount, setCurTaskCount ] = useState([])
    const [ totalTaskCount, setTotalTaskCount ] = useState([])
    const location = useLocation();
   
    useEffect(() =>{

        if(location.pathname == "/inbox"){
            setCurTaskCount(inboxTodos)
        } else if (location.pathname =="/today"){
            setCurTaskCount(todayTodos)
        } else if (location.pathname =="/upcoming"){
            setCurTaskCount(upcomingTodos)
        }

    }, [location.pathname, inboxTodos, todayTodos, upcomingTodos ])

    const isCompletedCount = curTaskCount.filter(task => task.isCompleted == false)

    // set total isCompletedCount
    useEffect(() => {
        const newArr = [...inboxTodos, ...todayTodos, ...upcomingTodos]
        const totalCompletedCount = newArr.filter(task => task.isCompleted == false)
        setTotalTaskCount(totalCompletedCount)
    },[inboxTodos,todayTodos,upcomingTodos])


    return(
        <>
        <header id="header">
            <nav id="header-grid" className="container">
                <div id="toggle" className="menu-toggle" onClick={handleNav}>
                    <MdMenu />
                </div>
                <QuickFind />

                <div id="tasks" className="task-count">
                    <p>{totalTaskCount.length}/{isCompletedCount.length}</p>
                    {/* {curTaskCount.filter(task => task.isCompleted == false).map(filteredTask => (
                        <p>{filteredTask.length}</p>
                    ))} */}

                    <MdCheckCircle />
                </div>
            </nav>
        </header>
        <nav className= {showNav ? 'nav-menu active' : "nav-menu"}>
            <LeftNav />
        </nav>
    </>
    );
}

export default Header;