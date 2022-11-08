import logo from './logo.svg';
import './index.css';
import './App.css';
import { Routes, Route, Navigate} from "react-router-dom";
import { useState, createContext } from 'react';

//components
import Header from './components/Header/Header';
import LeftNav from './components/LeftNav/LeftNav';

//  pages
import Inbox from './pages/Inbox';
import Today from './pages/Today';
import Upcoming from './pages/Upcoming';
import Todo from './components/ToDo/Todo';

export const TodoContext = createContext();

function App() {

    const [ inboxTodos, setInboxTodos ] = useState(
      [{ text: "Task 1",
      isCompleted: false,
      status: "today" }, 
      { text: "Task 2",
      isCompleted: false,
      status: "today" }, 
      { text: "Task 3",
      isCompleted: false,
      status: "upcoming" }, 
      { text: "Task 4",
      isCompleted: false,
      status: "today" }]
  );

  const addTodo = text => {
    const newTodos = [inboxTodos, { text }];
    setInboxTodos(newTodos);
  };

  const completeTodo = index => {
      const newTodos = [inboxTodos];
      newTodos[index].isCompleted = true;
      setInboxTodos(newTodos);
  };

  const removeTodo = index => {
      const newTodos = [inboxTodos];
      newTodos.splice(index, 1);
      setInboxTodos(newTodos);
    };

  return (

    <TodoContext.Provider value = {{inboxTodos, setInboxTodos}}>
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
