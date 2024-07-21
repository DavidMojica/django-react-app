import React from 'react';
import { TypeTask } from '../utils/types';
import { useNavigate } from 'react-router-dom';

const TaskCard = ({ task }: {task:TypeTask}):React.JSX.Element => {
    const navigate = useNavigate();

  return (
    <div key={task.id} style={{background:"black"}}
        onClick={()=>{
            navigate('/tasks/'+task.id);
        }}
    >
        <h3>{task.title}</h3>
        <h3>{task.description}</h3>
        <p>{task.done ? "Completado" : "Incompletado"}</p>
    </div>
  )
}

export default TaskCard