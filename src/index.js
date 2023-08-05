import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MovieDetailsPage from './Components/MovieDetailsPage/MovieDetailsPage';
import MyList from './Components/MyList/MyList';
import Start from './Start';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <React.StrictMode>
    <App/>
    {/* <Start/> */}
  </React.StrictMode>
 
);

reportWebVitals();
