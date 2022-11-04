import React from 'react';
import Tasks from './Tasks';
 
 
const TasksList = ({tasksList, handleToggle}) => {
   return (
       <div>
           {tasksList.map(task => {
               return (
                   <Tasks task={task} handleToggle={handleToggle}/>
               )
           })}
       </div>
   );
};
 
export default TasksList;