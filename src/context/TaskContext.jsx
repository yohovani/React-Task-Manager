import {createContext} from 'react'
import {useState, useEffect} from 'react'
import {tasks as data} from '../data/task'

export const TaskContext = createContext()

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([])
  function createTask(taskTitle, taskDescription){
    const newTask = {
      title: taskTitle,
      description: taskDescription,
      id: tasks.length

    }
    setTasks([...tasks, newTask])
  }

  function deleteTask(taskId){
    setTasks(tasks.filter(task => task.id != taskId))
  }

  useEffect(() => {
    setTasks(data)

  },[])

  return (
    <TaskContext.Provider value={{
      tasks: tasks,
      createTask: createTask,
      deleteTask: deleteTask
    }}>
        {props.children}
    </TaskContext.Provider>
    
  )
}

