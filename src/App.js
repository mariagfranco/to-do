import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask, updateTask} from './features/Tasks'

function App() {
  
  const [ task, setTask ] = useState('');

  const tasksList = useSelector((state) => state.tasks.value)
  const dispatch = useDispatch();

  return(  
  <div className="App">
    <div className="addTask">
      <input type="text" placeholder="Add task" onChange={(event) => setTask(event.target.value)}/>
      <button onClick={() => {dispatch(addTask({id: tasksList[tasksList.length - 1].id + 1, task, done: false}))}}>Creat Task</button>
    </div>
    <div className="displayTasks">
      {tasksList.map((task) => {
        return (
        <div>
          <h1>{task.task}</h1>
          <button onClick={() => {dispatch(updateTask({id: task.id , done: task.done}))}}>Done</button>
          <button onClick={() => {dispatch(deleteTask({id: task.id}))}}>Remove</button>
        </div>)
      })}
    </div>
  </div>
  )
}

export default App;