import { useState } from 'react'
import initialsTasks from './assets/tasks.json';
import './App.css';
import Form from './components/Form/Form';
import TaskList from './components/TaskList/TaskList/TaskList';
// import Task from './components/Task/Task';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

function App() {
    const [tasks, setTasks] = useState(initialsTasks);
   
    const addTask = (newTask) => {
      setTasks((prevTasks) => {
        return [... prevTasks, newTask]
      })
    };
  return (
    <ErrorBoundary>
    <div className='container'>
      <Form onAdd={addTask}/>
      <TaskList tasks={tasks}/>
    
    </div>
    </ErrorBoundary>
  )
}

export default App
