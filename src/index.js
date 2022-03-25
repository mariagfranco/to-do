import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import tasksReducer from './features/Tasks';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  }
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
