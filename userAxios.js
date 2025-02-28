import axios from "axios";
const API_BASE_URL = 'mongodb://0.0.0.0:27017/'
const TASK_ENDPOINT = '/api/users'


// POST | Create a task
export const createTask = (userObject) => {
    const response = axios
                      .post(API_BASE_URL+ TASK_ENDPOINT, userObject)
                      .then(res => res.data)
                      .catch(error => error)
  
    return response
  }