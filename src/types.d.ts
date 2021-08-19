export interface Task{
    id:string
    task:string
    date:string
    completed:boolean
}

export interface TaskFromApi {
  id: string
  content: string
  date: string
  important: boolean
}
export type TaskToSend = Omit<TaskFromApi, 'id' | 'date'>;
