import axios from "axios";
import { TypeTask } from "../utils/types";

const taskApi = axios.create({
    baseURL: 'http://localhost:8000/tasks/api/v1/tasks/'
})

export const getAllTasks = () => taskApi.get('/');
export const getTaskById = (id:string) => taskApi.get(`/${id}`);
export const createTask = (task:Omit<TypeTask, 'id'>) => taskApi.post('/', task);
export const deleteTask = (id:string) => taskApi.delete(`/${id}`);
export const updateTask = (id:string, task:Omit<TypeTask, 'id'>) => taskApi.put(`/${id}/`, task);
