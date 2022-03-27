import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import NewApp from './NewApp';
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import tasksReducer from './features/Tasks';
import App from './App';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  }
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <NewApp /> */}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
