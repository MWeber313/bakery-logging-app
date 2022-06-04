import './App.css';
import React, {useState} from 'react';

function App() {
  
  let today = new Date();
  
  const [sevenDays, setSevenDays] = useState(0)
  const [fourteenDays, setFourteenDays] = useState(0)
  const [twentyoneDays, setTwentyoneDays] = useState(0)
  const [twentyeightDays, setTwentyeightDays] = useState(0)

  console.log(today)
  console.log('7 days', sevenDays)

  function isLeapYear (a) {
    if (a%4 === 0) {
      return true
    }
    else {
      return false
    }
  }

  // Get dates for 4 different dates:
  // Today + 7, +14, +21, +28
  // These dates need to account for
  // Rolling over into next month and whether or not it is a leap year

  // Making an object to hold 4 different parameters of the modified date
  let modifiedDate = {
    datePlus7: 7,
    datePlus14: 14,
    datePlus21: 21,
    datePlus28: 28
  };

  let currentMonth = today.getMonth();

  // let dayMonth = {
  //   Jan: 31,
  //   Feb: 28,
  //   Mar: 31,
  //   Apr: 30,
  //   May: 31,
  //   Jun: 30,
  //   Jul: 31,
  //   Aug: 31,
  //   Sept: 30,
  //   Oct: 31,
  //   Nov: 30,
  //   Dec: 31
  // }

  // let lengthMonth = [
  //   31,
  //   28,
  //   31,
  //   30,
  //   31,
  //   30,
  //   31,
  //   31,
  //   30,
  //   31,
  //   30,
  //   31
  // ]

  // let monthArray = [
  //   'Jan',
  //   'Feb',
  //   'Mar',
  //   'Apr',
  //   'May',
  //   'June',
  //   'July',
  //   'Aug',
  //   'Sept',
  //   'Oct',
  //   'Nov',
  //   'Dec'
  // ]

  // for (let i in dayMonth) {
  //   console.log(i === today.getMonth())
  //   console.log(i, "=", today.getMonth())
  // }

let monthLength = [
  {Month: "Jan", Length: 31},
  {Month: "Feb", Length: 28},
  {Month: "Mar", Length: 31},
  {Month: "Apr", Length: 30},
  {Month: "May", Length: 31},
  {Month: "Jun", Length: 30},
  {Month: "Jul", Length: 31},
  {Month: "Aug", Length: 31},
  {Month: "Sept", Length: 30},
  {Month: "Oct", Length: 31},
  {Month: "Nov", Length: 30},
  {Month: "Dec", Length: 31}
]

// This function will map out the object and add the current day to the object's key/value pairs.
function dateCalculator(dateToModify) {

}

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bakery Department</h1>
        <h4>Sell-By Dating Ranges</h4>
        <h5>*Remember*: 31 for Jan, Mar, May, Jul, Aug, Oct, Dec, 30<br></br>
        30 for April, June, September, November <br></br>
        28 for February (29 if a leap year)
        </h5>
        <h5>Is a leap year: {isLeapYear(today.getFullYear()) ? "Yes" : "No"} </h5>
        <ul>
          <li>7 Days: {today.getMonth() + 1} / {today.getUTCDate() + 7}</li>
          <li>14 Days: {today.getMonth() + 1} / {today.getDate() + 14}</li>
          <li>21 Days: {today.getMonth() + 1} / {today.getDate() + 21}</li>
          <li>28 Days: {today.getMonth() + 1} / {today.getUTCDate() + 28}</li>
        </ul>
        <ul>
          <li>7 Days: {today.getMonth() + 1} / {sevenDays}</li>
          <li>14 Days: {today.getMonth() + 1} / {fourteenDays}</li>
          <li>21 Days: {today.getMonth() + 1} / {twentyoneDays}</li>
          <li>28 Days: {today.getMonth() + 1} / {twentyeightDays}</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
