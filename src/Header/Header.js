import React from 'react';
import "./header.css";

export default function Header(){
    return(
        <header>
            <nav id="header-grid" class="container">
                <div id="toggle" class="menu-toggle">
                    <div class="material-icons">menu</div>

                    <form class="form-block">
                        <input type="text" id="fsearch" placeholder="Quick Find"/>
                    </form>
                </div>

                <div id="tasks" class="task-count">
                    <p>30/5</p>
                    <span class="material-icons">check_circle</span>
                </div>
            </nav>
        </header>
    );
}