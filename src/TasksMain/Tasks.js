import React from 'react';
import './tasks.css';
 
const Tasks = ({task, handleToggle}) => {

    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

   return (
    <div id={task.id} key={task.id + task.task} name="task" value={task.id} onClick={handleClick} className={task.complete ? "todo strike" : "todo"}>
        {task.task + task.status}
    </div>
   );
};
 
export default Tasks;