import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dobro from './dobro';
import Boletim from './boletim';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
       <BrowserRouter>
      <Routes>
        <Route path = '/' element ={<App/>}/>
        <Route path = '/dobro' element ={<Dobro/>} />
        <Route path = '/boletim' element={<Boletim/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


