import './App.css';
import React from 'react';
import {dateCalculator} from './HelperFunctions/dateCalculator.js';
import isLeapYear from './HelperFunctions/isLeapYear';
import SheetCalculatorFrame from './Components/sheetcalc';

function App() {
  
  let today = new Date();
  

  // function isLeapYear (a) {
  //   if (a%4 === 0) {
  //     return true
  //   }
  //   else {
  //     return false
  //   }
  // }

  // Get dates for 4 different dates:
  // Today + 7, +14, +21, +28
  // These dates need to account for
  // Rolling over into next month and whether or not it is a leap year

  // Making an object to hold 4 different parameters of the modified date



  return (
    <div className="App">
      <header className="App-header">
        <h1>Bakery Department</h1>
        <h4>Sell-By Dating Ranges</h4>
      </header>
      <div className="App-header">
        <h5>*Remember*: 31 for Jan, Mar, May, Jul, Aug, Oct, Dec, 30<br></br>
        30 for April, June, September, November <br></br>
        28 for February (29 if a leap year)
        </h5>
        <h5>Is a leap year: {isLeapYear(today.getFullYear()) ? "Yes" : "No"} </h5>
        <ul>
          <li>7 Days: {dateCalculator(today, 7)}</li>
          <li>14 Days: {dateCalculator(today, 14)}</li>
          <li>21 Days: {dateCalculator(today, 21)}</li>
          <li>28 Days: {dateCalculator(today, 28)}</li>
        </ul>
      </div>
      <div className="App-header">
        <SheetCalculatorFrame />
      </div>
    </div>
  );
}

export default App;
