import './App.css';

function App() {

  let today = new Date();

  console.log(today)

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

  let dayMonth = {
    Jan: 31,
    Feb: 28,
    Mar: 31,
    Apr: 30,
    May: 31,
    Jun: 30,
    Jul: 31,
    Aug: 31,
    Sept: 30,
    Oct: 31,
    Nov: 30,
    Dec: 31
  }

  for (let i in dayMonth) {
    console.log(i === today.getMonth())
    console.log(i, "=", today.getMonth())
  }

  // This function will map out the object and add the current day to the object's key/value pairs.
  function dateCalculator(modifiedDate) {

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
          <li>7 Days: {today.getMonth() + 1} / {today.getDate() + 7}</li>
          <li>14 Days: {today.getMonth() + 1} / {today.getDate() + 14}</li>
          <li>21 Days: {today.getMonth() + 1} / {today.getDate() + 21}</li>
          <li>28 Days: {today.getMonth() + 1} / {today.getDate() + 28}</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
