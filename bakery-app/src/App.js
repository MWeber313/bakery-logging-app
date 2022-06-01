import './App.css';

function App() {

  let today = new Date();

  console.log(today)

  function blather (a) {
    if (a/4) {
      return true
    }
    else {
      return false
    }
  }

  console.log(blather(2022))

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bakery Department</h1>
        <h4>Sell-By Dating Ranges</h4>
        <h5>*Remember*: 31 for Jan, Mar, May, Jul, Aug, Oct, Dec, 30<br></br>
        30 for April, June, September, November <br></br>
        28 for February (29 if a leap year)
        </h5>
        <h5>Is a leap year: {blather(today.getFullYear()) ? "Yes" : "No"} </h5>
        <ul>
          <li>7 Days: </li>
          <li>14 Days: </li>
          <li>21 Days: </li>
          <li>28 Days: </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
