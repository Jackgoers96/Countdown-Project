import SeansBirthday from '../pages/Seansbirthday';
import CustomDatePicker from '../pages/CustomDatePicker';
var moment = require('moment');
var date = moment().format('MMMM Do YYYY');
var time = moment().format(' h:mm a');
function Header() {
    return (

        <header> <h1> This is the header. The current time is {date + time} </h1> </header>

    )
}
export default Header;