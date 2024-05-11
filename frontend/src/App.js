import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import { useEffect } from 'react';
import Payment from './payment';

function App() {

  // useEffect(() => {
  //   axios.get("https://localhost:7292/WeatherForecast")
  //     .then(res => {
  //       console.log(res.data);
  //     });
  // }, []); // test api

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Payment price={150} />
    </div>
  );
}

export default App;
