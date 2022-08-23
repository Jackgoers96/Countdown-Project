import './App.css';
import React, { useState } from 'react';
import { unix } from 'moment';
var countdown = require('countdown');

var moment = require('moment');
var date = moment().format('MMMM Do YYYY');
var time = moment().format(' h:mm a');

function App() {
  const [month, setMonth] = useState();
  const [day, setDay] = useState();
  const [year, setYear] = useState();


  return (
    <body>
      <header> <h1> This is the header. The current time is {date + time} </h1>
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
              <input
                value={month}
                onChange={e => setMonth(e.target.value)}
                placeholder="mm"
                type="text"
                name="month"
                required
              />
              <input
                value={day}
                onChange={e => setDay(e.target.value)}
                placeholder="dd"
                type="text"
                name="day"
                required
              />
              <input
                value={year}
                onChange={e => setYear(e.target.value)}
                placeholder="YYYY"
                type="text"
                name="year"
                required
              />

            </div>
            <button type="submit">Submit</button>
          </form>
          <div className='boxLower'>
            <h3> { }</h3>
          </div>
        </div>

      </div>

      <div className='rainbow'>
        <p className='text'>
          <h1> Hello</h1>
        </p>
      </div>


    </body>
  );
}

export default App;
