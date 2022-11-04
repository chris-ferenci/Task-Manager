import React from 'react';
import "./header.css";
import {MdMenu, MdCheckCircle} from "react-icons/md"

import QuickFind from '../QuickFind/QuickFind';

const Header = () => {
    return(
        <header>
            <nav id="header-grid" class="container">
                <div id="toggle" class="menu-toggle">
                    <MdMenu />

                    <QuickFind />
                </div>

                <div id="tasks" class="task-count">
                    <p>30/5</p>
                    <MdCheckCircle />
                </div>
            </nav>
        </header>
    );
}

export default Header;