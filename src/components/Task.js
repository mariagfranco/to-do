import "../../src/App.css";
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, updateTask } from "../features/Tasks";
import { Checkbox, IconButton   } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Tasks = (props, tab) => {
  

  const tasksList = useSelector((state) => state.tasks.value)
  const dispatch = useDispatch();

  return(  
  <div className="App">
    <div className="displayTasks">
      {tasksList.map((task) => {
        return (
        <div className="task-card">    
            {task.done.toString() === props.done ? <>
            <Checkbox checked={task.done === true} onClick={() => {dispatch(updateTask({id: task.id , done: task.done}))}}/>
            {task.task}
            <IconButton  onClick={() => {dispatch(deleteTask({id: task.id}))}}><DeleteOutlineIcon /></IconButton >
            </> : 
            props.tab === 0 ? <>
            <Checkbox checked={task.done === true} onClick={() => {dispatch(updateTask({id: task.id , done: task.done}))}}/>
            <p>{task.task}</p>
            <IconButton  onClick={() => {dispatch(deleteTask({id: task.id}))}}><DeleteOutlineIcon /></IconButton >
            </>: 
            null}  
        </div>)
      })}
    </div>
  </div>
  )
}

export default Tasks;