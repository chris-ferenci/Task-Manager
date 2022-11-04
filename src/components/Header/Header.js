import React, {useState} from 'react';
import "./header.css";
import {MdMenu, MdCheckCircle} from "react-icons/md"

import LeftNav from '../LeftNav/LeftNav';

import QuickFind from '../QuickFind/QuickFind';

const Header = () => {
    const [showNav, setShowNav] = useState(false);
    const onClick = () => setShowNav(true);

    return(
        <header id="header">
            <nav id="header-grid" class="container">
                <div id="toggle" class="menu-toggle" onClick={onClick}>
                    <MdMenu /> {showNav ? <LeftNav/> : null}
                </div>

                <QuickFind />

                <div id="tasks" class="task-count">
                    <p>30/5</p>
                    <MdCheckCircle />
                </div>
            </nav>
        </header>
    );
}

export default Header;