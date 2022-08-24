import './App.css';
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { unix } from 'moment';
import SeansBirthday from './pages/Seansbirthday';
import CustomDatePicker from './pages/CustomDatePicker';
import Header from './components/Header';
var countdown = require('countdown');

var moment = require('moment');
var date = moment().format('MMMM Do YYYY');
var time = moment().format(' h:mm a');

function App() {



  return (
    <Router>
      <Header />
      <Routes>
      <Route path="*" element={<Navigate to="/SeansBirthday" replace />}/>
      <Route path="SeansBirthday" element={<SeansBirthday/>}/>
      </Routes>


    </Router>
  );

}

export default App;
