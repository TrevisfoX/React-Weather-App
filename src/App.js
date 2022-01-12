import { useState, useEffect } from 'react';
import './App.scss';
import Header from './Header';
import Main from './Main'

function App() {
  const [weatherData, setWeatherData] = useState();

  useEffect(() => {
    console.log(weatherData);
}, [weatherData])

  return (
    <div className="App">
      <Header setWeatherData={setWeatherData}/>
      <Main weatherData={weatherData}/>
    </div>
  );
}

export default App;
