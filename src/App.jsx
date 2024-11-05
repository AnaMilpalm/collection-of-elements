import { useState } from 'react'
import initialsTasks from './assets/tasks.json';
import './App.css';
import Form from './components/Form/Form';
import TaskList from './components/TaskList/TaskList/TaskList';
// import Task from './components/Task/Task';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Filter from './components/Filter/Filter';

function App() {
    const [tasks, setTasks] = useState(initialsTasks);
    const [filter, setFilter] = useState('');

    const addTask = (newTask) => {
      setTasks((prevTasks) => {
        return [... prevTasks, newTask]
      })
    };

    const deleteTask = (taskId) => {
      setTasks((prevTasks) => {
        return prevTasks.filter((task) => task.id !== taskId)
      })
    }; 

    const visibleTasks = tasks.filter((task) => task.text.toLowerCase().includes(filter.toLowerCase()));

  return (
    <ErrorBoundary>
    <div className='container'>
      <Form onAdd={addTask}/>
      <Filter value={filter} onFilter={setFilter}/>
      <TaskList tasks={visibleTasks} onDelete={deleteTask}/>
    
    </div>
    </ErrorBoundary>
  )
}

export default App;
