import axios from 'axios'
import { Task, TaskFromApi } from '../types'

const { VITE_HOST: baseUrl } = import.meta.env

export const getAllTask = (token: string) => {
  return fetchTaskAxios(token).then(mapFormApiToItems)
}

export const sendTask = ({ token, task }:any) => {
  return sendTaskAxios({ token, task }).then(mapFormApiToItem)
}

export const updateTask = (task :Task) => {
  return updateTaskAxios(mapToSendApi(task)).then(mapFormApiToItem)
}

// eslint-disable-next-line no-unused-vars
const fetchCountry = (): Promise<Array<Task>> => {
  return fetch(baseUrl + 'api/task').then((res) => res.json())
}

const fetchTaskAxios = async (token: string): Promise<Array<TaskFromApi>> => {
  const response = await axios.get(baseUrl + 'api/task', { headers: { Authorization: `Bearer ${token}` } })
  return response.data
}

const sendTaskAxios = async ({ token, task }:any):Promise<TaskFromApi> => {
  const response = await axios.post(baseUrl + 'api/task', task, {
    headers: { Authorization: `Bearer ${token}` }
  })
  return response.data
}

const updateTaskAxios = async (task: TaskFromApi): Promise<TaskFromApi> => {
  const response = await axios.put(baseUrl + 'api/task/' + task.id, task)
  return response.data
}

// * mapea los valores segun el tipo de dato que llega de una peticion
const mapFormApiToItems = (apiRes: Array<TaskFromApi>): Array<Task> => {
  return apiRes.map(taskFromApi => {
    const { id, content: task, date, important: completed } = taskFromApi
    return { id, task, date, completed }
  })
}

const mapFormApiToItem = (apiRes: TaskFromApi): Task => {
  const { id, content: task, date, important: completed } = apiRes
  return { id, task, date, completed }
}

const mapToSendApi = (apiRes: Task): TaskFromApi => {
  const { id, task: content, date, completed: important } = apiRes
  return { content, date, important, id }
}
