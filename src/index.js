import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom' ;
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// components
import Header from './components/Header/Header'
import LeftNav from './components/LeftNav/LeftNav'

//pages

import Inbox from './pages/Inbox';
import Today from './pages/Today';
import Upcoming from './pages/Upcoming';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header/>

    <div id="main-container">

      <Router>
        
       <LeftNav />

        <Routes>
            <Route exact path="/" element={ <Navigate to="/inbox" />}></Route>
            <Route exact path='/inbox' element={<Inbox />}></Route>
            <Route exact path='/today' element={<Today />}></Route>
            <Route exact path='/upcoming' element={<Upcoming />}></Route>
        </Routes>


      </Router>
      {/* <TasksMain/> */}
    </div>
  
  </>
);

// If you want to start measuring performance in your app, pass a function  
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
