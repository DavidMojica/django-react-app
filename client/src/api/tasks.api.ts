import axios from "axios";

const site_url:string = "http://localhost:8000/";
let api_name:string | undefined = undefined;

export const getAllTasks = () => {
    api_name = "tasks/api/v1/tasks/";
    return axios.get(`${site_url}${api_name}`);
}