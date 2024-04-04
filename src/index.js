import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-italia/dist/css/bootstrap-italia.min.css';
import '../node_modules/bootstrap-italia/dist/js/bootstrap-italia.bundle.min.js';
import { loadFonts } from 'bootstrap-italia'



//import "../node_modules/bootstrap-italia/src/scss/bootstrap-italia.scss";
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from './home/Home';
import Login from './login/Login';
import Inserimento from './inserimento/Inserimento';
import Elenco from './elenco/Elenco.js';
import Visualizza from './visualizza/Visualizza.js';
import Modifica from './modifica/Modifica.js';
loadFonts('/bootstrap-italia/dist/fonts');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Router>
  <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/login" element={<Login />} />
   <Route path="/inserimento" element={<Inserimento />} />
   <Route path="/elenco" element={<Elenco />} />
   <Route path="/visualizza" element={<Visualizza />} />
   <Route path="/modifica" element={<Modifica />} />

  </Routes>
 </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
