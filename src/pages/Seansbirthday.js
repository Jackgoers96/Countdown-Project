import './SB.css';
import React, { useState } from 'react';
import { unix } from 'moment';
var countdown = require('countdown');

var moment = require('moment');


function SeansBirthday() {

    const birthday = moment(1662656400000).endOf('day').fromNow(); 


    return (
        <body> 
            <h1 className='main'> Sean's birthday is {birthday}</h1>



        </body>
    );
}

export default SeansBirthday;
