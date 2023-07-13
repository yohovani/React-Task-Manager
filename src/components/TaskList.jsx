
import TaskCard from './TaskCard'
import { TaskContext } from '../context/TaskContext'
import { useContext } from "react"

export default function TaskList() {
  const {tasks} = useContext(TaskContext) 
    if (tasks.length == 0){
        return <div><h1 className='text-white text-4xl text-center py-5'>No hay tareas</h1></div>
    }

  return (
    <div className='grid grid-cols-4 gap-2 p-8'>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task}/>
      ))}
    </div>
  )
}
