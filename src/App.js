import './App.css';
import React, { useState } from 'react';
var countdown = require('countdown');

var moment = require('moment');

function App() {
  const [ day, setDay] = useState([]);
  
  return (
    <body>
    <header> <h1> This is the header. The current time is {moment().format('MMMM Do YYYY' + ' h:mm a')} </h1>
    </header>

    <div className='container'>
      <div className='box'>
        <form>
          
        <div className='boxHeader'>
        <label>
        <h2>Countdown to ____</h2>
        </label>
        </div>
        <div className='boxMiddle'>
          <div><input id='day' className='inputBox' type="text" name="day" placeholder='enter day in DD' onChange={() => setDay(document.getElementById('day').value)}/></div>
          
          <div><input id='month' className='inputBox' type="text" name="month" placeholder='enter day in MM' onChange={() => setDay(document.getElementById('month').value)}/></div>
          <div><input id='year' className='inputBox' type="text" name="year" placeholder='enter day in YYYY' onChange={() => setDay(document.getElementById('year').value)} /></div>
        </div>
        </form>
        <div className='boxLower'>
          <h3> {day} days left</h3>
        </div>
      </div>

    </div>

    </body>
  );
}

export default App;
