import React, { useEffect } from 'react';
import { getAllTasks } from '../api/tasks.api';

const TaskList = ():React.JSX.Element => {
    useEffect(()=> {

        const loadTaks = async() =>{
            const res = await getAllTasks();
            console.log(res);
        }

        loadTaks();
        console.log("loaded!");
    });


  return (
    <div>TaskList</div>
  )
}

export default TaskList