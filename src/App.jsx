import { useState, useEffect } from 'react';
import './App.scss';
import Header from './components/Header';
import Main from './components/Main'

const appId = "348d1a1ae88f5ceb7b6797a0de54ffc2";
const days = [
  'Sundey',
  'Mondey',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [units, setUnits] = useState('metric');
  const [date, setDate] = useState(null);
  const [coord, setCoord] = useState(null);

  const getCoord = () => {
    const options = {
      enableHighAccuracy: true,
      timeout: 0,
      maximumAge: 0,
    };

    const error = (error) => console.log(error);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setCoord(pos.coords);
      }, error, options)
  };

  useEffect(() => {
    getCoord();
  }, [])

  useEffect(() => {
    console.log(coord);
    if (coord) {
      fetchWeatherByCoord(coord.latitude, coord.longitude);
    }
  }, [coord]);

  const fetchWeather = (city) => {

    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}&units=${units}`)
     .then(response => response.json())
     .then(json => json);
};

const fetchWeatherByCoord = ({lat, lon}) => {

  return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}&units=${units}`)
   .then(response => response.json())
   .then(json => setWeatherData(json));
};

const updateWeatherData = async (city) => {
  setWeatherData(await fetchWeather(city));
};

useEffect(() => {
  if (weatherData) {
    setDate(new Date(weatherData?.dt * 1000));
  }
}, [weatherData?.dt]);

useEffect(() => {
  if(weatherData?.name) {
    updateWeatherData(weatherData?.name);
  }
}, [units]);

  return (
    <div className="App">
      <Header 
      fetchWeather={fetchWeather} 
      units={units} 
      setUnits={setUnits} 
      setWeatherData={setWeatherData} 
      updateWeatherData={updateWeatherData}
      />
      <Main 
      weatherData={weatherData} 
      units={units}
      />
      <p>{`${days[date?.getDay()]} ${date?.getTime()}`}</p>
    </div>
  );
}

export default App;
