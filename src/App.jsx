import { useState, useEffect } from 'react';
import './App.scss';
import Header from './components/Header';
import Main from './components/Main'

function App() {
  const [weatherData, setWeatherData] = useState();
  const [units, setUnits] = useState('metric');

  useEffect(() => {
    console.log(weatherData);
}, [weatherData])

  return (
    <div className="App">
      <Header setWeatherData={setWeatherData} units={units} setUnits={setUnits}/>
      <Main weatherData={weatherData}/>
    </div>
  );
}

export default App;
