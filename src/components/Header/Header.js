import React, {useState, useContext, useEffect} from 'react';
import "./header.css";
import {MdMenu, MdCheckCircle} from "react-icons/md"
import { useLocation } from 'react-router-dom'

// components
import LeftNav from '../LeftNav/LeftNav';
import QuickFind from '../QuickFind/QuickFind';

// context
import { TodoContext } from '../../App';

const Header = () => {
    
    const [showNav, setShowNav] = useState(false);
    const handleNav = () => setShowNav(true);

    const {inboxTodos, todayTodos, upcomingTodos} = useContext(TodoContext);

    const [curTaskCount, setCurTaskCount] = useState([])
    const [ totalTaskCount, setTotalTaskCount ] = useState([])

    const location = useLocation();

    // set current page header count
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
    })


    return(
        <header id="header">
            <nav id="header-grid" className="container">
                <div id="toggle" className="menu-toggle" onClick={handleNav}>
                    <MdMenu /> {showNav ? <LeftNav/> : null}
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
    );
}

export default Header;