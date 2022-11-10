import './index.css';
import './App.css';
import { Routes, Route, Navigate} from "react-router-dom";
import { useState, createContext, useEffect } from 'react';

//components
import Header from './components/Header/Header';
import LeftNav from './components/LeftNav/LeftNav';

//  pages
import Inbox from './pages/Inbox';
import Today from './pages/Today';
import Upcoming from './pages/Upcoming';

const jsonItems = require("./data.json");

export const TodoContext = createContext();

function App() {

  const [ inboxTodos, setInboxTodos ] = useState([]);
  const [ inboxNewText, setInboxNewText ] = useState([]);
  const [ isEditing, setIsEditing ] = useState(false)


  useEffect(() => {
    setInboxTodos([{
      "id": 1,
      "text": "Give dog a bath",
      "isCompleted": false,
    }, {
      "id": 2,
      "text": "Do laundry",
      "isCompleted": true,
    }]);
  }, []);

  return (

    <TodoContext.Provider value = {{inboxTodos, setInboxTodos, inboxNewText, setInboxNewText, isEditing, setIsEditing}}>
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
