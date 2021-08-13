import axios from 'axios'
import { Task, TaskFromApi } from '../types'

const { VITE_HOST: baseUrl } = import.meta.env

export const getAllTask = (token: string) => {
  return fetchTaskAxios(token).then(mapFormApiToItems)
}

// eslint-disable-next-line no-unused-vars
const fetchCountry = (): Promise<Array<Task>> => {
  return fetch(baseUrl + 'api/task').then((res) => res.json())
}

const fetchTaskAxios = async (token: string): Promise<Array<TaskFromApi>> => {
  const response = await axios.get(baseUrl + 'api/task', { headers: { Authorization: `Bearer ${token}` } })
  return response.data
}

const mapFormApiToItems = (apiRes: Array<TaskFromApi>): Array<Task> => {
  return apiRes.map(taskFromApi => {
    const { id, content: task, date, important: completed } = taskFromApi
    return { id, task, date, completed }
  })
}
