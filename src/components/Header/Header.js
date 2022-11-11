import React, {useState} from 'react';
import "./header.css";
import {MdMenu, MdCheckCircle} from "react-icons/md"

import LeftNav from '../LeftNav/LeftNav';

import QuickFind from '../QuickFind/QuickFind';

const Header = () => {
    const [showNav, setShowNav] = useState(false);
    const handleNav = () => setShowNav(true);

    return(
        <header id="header">
            <nav id="header-grid" className="container">
                <div id="toggle" className="menu-toggle" onClick={handleNav}>
                    <MdMenu /> {showNav ? <LeftNav/> : null}
                </div>

                <QuickFind />

                <div id="tasks" className="task-count">
                    <p>30/5</p>
                    <MdCheckCircle />
                </div>
            </nav>
        </header>
    );
}

export default Header;