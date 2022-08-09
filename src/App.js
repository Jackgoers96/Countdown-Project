import './App.css';
import React, { useState } from 'react';
var countdown = require('countdown');

var moment = require('moment');

function App() {
  const [day, setDay] = useState(0);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
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
              <div><input id='day' className='inputBox' type="text" name="day" placeholder='enter day in DD' onChange={(evt) => setDay(evt.target.value)} /></div>

              <div><input id='month' className='inputBox' type="text" name="month" placeholder='enter day in MM' onChange={(evt) => setMonth(evt.target.value)} /></div>
              <div><input id='year' className='inputBox' type="text" name="year" placeholder='enter day in YYYY' onChange={(evt) => setYear(evt.target.value)} /></div>
            </div>
          </form>
          <div className='boxLower'>
            <h3> {day-Number(moment().format('DD'))} days left</h3>
          </div>
        </div>

      </div>

    </body>
  );
}

export default App;
