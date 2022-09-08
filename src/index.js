import React from 'react';
import ReactDOM from 'react-dom/client';
import Newalbum from './add_album';
// import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>Album_List</h1>
    <hr/>
    <Newalbum/>
    <hr/>
    <App />
  </React.StrictMode>
);


