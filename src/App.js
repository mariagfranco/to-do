import { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { IconButton, Input, TextField } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import Tasks from './components/Task';
import { addTask } from './features/Tasks';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import './App.css';


export default function App() {
  const [ task, setTask ] = useState('');
  const [value, setValue] = useState(0);

  const handleChange = (e, value) => {
    setValue(value);
  };
  const dispatch = useDispatch();

  const tasksList = useSelector((state) => state.tasks.value)

  function newTask () {
    tasksList.length === 0 ? 
      dispatch(addTask({id: 1, task, done: false})) : 
      dispatch(addTask({id: tasksList[tasksList.length - 1 ].id + 1, task, done: false}))
    document.getElementById('input').value = "";
    setTask('')
  }

  return (
    <div className='App'>
      <div style={{'paddingLeft': '30px', 'paddingTop': '20px'}}>
      <TextField id='input' className='create-task-input' variant="standard" hiddenLabel placeholder="Add new task" onChange={(event) => setTask(event.target.value)}/>
      <IconButton disabled={task.length === 0} className='new-task-btn' onClick={() => {newTask()}}><DoneOutlinedIcon color="primary"/></IconButton>
      </div>
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="All tasks" />
        <Tab label="Open" />
        <Tab label="Done" />
      </Tabs>
    </Box>
    {value === 0 ? ( <Tasks tab={0} />) : value === 1 ? (<Tasks done='false' tab={1}/>) :( <Tasks done='true' tab={2} />)}
    </div>
  );
}
