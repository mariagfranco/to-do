import { createSlice } from "@reduxjs/toolkit";

const exampleData = [{
    id: 1,
    task: 'clean desk',
    done: true,
},
{
    id: 2,
    task: 'do laundry',
    done: false,
}]

export const tasksSlice = createSlice({
    name: "tasks",
    initialState: {value: exampleData},
    reducers: {
        addTask: (state, action) => {
            state.value.push(action.payload)
        },

        deleteTask: (state, action) => {
            state.value = state.value.filter((task) => task.id !== action.payload.id)
        },

        updateTask: (state, action) => {
            state.value.map((task) => {
                if (task.id === action.payload.id) {
                    task.done === true ? task.done = false : task.done = true
                }
            })
        }
    }
});

export const { addTask, deleteTask, updateTask } = tasksSlice.actions;
export default tasksSlice.reducer;