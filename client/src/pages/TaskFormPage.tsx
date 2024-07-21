import React, {useEffect} from 'react'
import { useForm } from 'react-hook-form' 
import { createTask, deleteTask, updateTask, getTaskById } from '../api/tasks.api';
import { useNavigate, useParams } from 'react-router-dom';
import { TypeTask } from '../utils/types';
import toast from "react-hot-toast";

//Campos del formulario
type FormData = {
  title: string,
  description: string,
  done?:boolean
}

const TaskFormPage = ():React.ReactNode => {
  const navigate = useNavigate();
  const params = useParams();

  const {
    register,
    handleSubmit,
    formState:{ errors //se va llenando con datos si existe un error
    }, setValue} = useForm<FormData>();

  const onSubmit = handleSubmit(async data =>{
    if (params.id) {
      await updateTask(params.id, data as Omit<TypeTask, 'id'>);

    } else{
      await createTask({...data, done:false});
      toast.success('Tarea creada',{ position:"bottom-right"});
    }
    
    navigate('/tasks');
  });

  useEffect(() => {
    async function loadTask() {
      if (params.id){
        const {data} = await getTaskById(params.id);
        setValue('title', data.title);
        setValue('description', data.description);
        
      }
    }
    loadTask();
  }, [params.id, setValue]);

  return (
    <div>
      <form action="" onSubmit={onSubmit}>
        <input type="text" placeholder='title'  {...register("title", {required: true})} />
        {errors.title && <span>Este campo es requerido</span>}
        <textarea id="" placeholder='Description' {...register("description", {required: true})}></textarea>
        {errors.description && <span>Este campo es requerido</span>}
        <button>Save</button>
      </form>

      { //eliminar
        params.id && <button onClick={async () =>{
          const response = window.confirm('estas seguro?');
          if (response && params.id) {
            await deleteTask(params.id);
            navigate('/tasks');
          }

        }}>Borrar</button>
      }
    </div>
  )
}

export default TaskFormPage