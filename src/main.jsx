import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { TaskContextProvider } from './context/TaskContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode className="bg-zinc-900">
    <TaskContextProvider className="bg-zinc-900">
      <App />
    </TaskContextProvider>
  </React.StrictMode >
);
