import React, { useEffect } from 'react';
import { getAllTasks } from '../api/tasks.api';
import { useState } from 'react';
import { TypeTask } from '../utils/types';
import TaskCard from './TaskCard';

const TaskList = ():React.JSX.Element => {
  const [tasks, setTasks] = useState<TypeTask[]>([]);

    useEffect(()=> {
        const loadTaks = async() =>{
            const res = await getAllTasks();
            setTasks(res.data);
        }

        loadTaks();
        console.log("loaded!");
    }, []); 

  return (
    <div>
      { tasks.map(task => (
        <TaskCard key={task.id} task={ task } />
      )) }

    </div>
  )
}

export default TaskList;