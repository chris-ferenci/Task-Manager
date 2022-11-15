import './index.css';
import './App.css';
import { Routes, Route, Navigate} from "react-router-dom";
import { useState, createContext } from 'react';

// components
import Header from './components/Header/Header';
import LeftNav from './components/LeftNav/LeftNav';

//  pages
import Inbox from './pages/Inbox';
import Today from './pages/Today';
import Upcoming from './pages/Upcoming';

export const TodoContext = createContext();

function App() {

  //Set todo States
  const [ inboxTodos, setInboxTodos ] = useState([]);
  const [ inboxNewText, setInboxNewText ] = useState([]);
  const [ todayTodos, setTodayTodos ] = useState([]);
  const [ todayNewText, setTodayNewText ] = useState([]);
  const [ upcomingTodos, setUpcomingTodos ] = useState([]);
  const [ upcomingNewText, setUpcomingNewText ] = useState([]);

  return (

    <TodoContext.Provider value = {{inboxTodos, setInboxTodos, inboxNewText, setInboxNewText,
    todayTodos, setTodayTodos, todayNewText, setTodayNewText, upcomingTodos, setUpcomingTodos, upcomingNewText, setUpcomingNewText}}>
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
    </TodoContext.Provider>
  );
}

export default App;
