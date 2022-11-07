import logo from './logo.svg';
import './index.css';
import './App.css';
import { Routes, Route, Navigate} from "react-router-dom";
import { useState } from 'react';

//components
import Header from './components/Header/Header';
import LeftNav from './components/LeftNav/LeftNav';

//  pages
import Inbox from './pages/Inbox';
import Today from './pages/Today';
import Upcoming from './pages/Upcoming';


function App() {

  return (
    
      <div id="main-container">
          <Header/>
          <LeftNav />
          <Routes>
              <Route exact path="/" element={ <Navigate to="/inbox" />}></Route>
              <Route exact path='/inbox' element= {<Inbox />}></Route>
              <Route exact path='/today' element={<Today />}></Route>
              <Route exact path='/upcoming' element={<Upcoming />}></Route>
          </Routes>
      </div>
  );
}

export default App;
