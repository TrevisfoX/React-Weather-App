import { useState, useEffect } from "react";
import "./App.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import background from "./assets/background.jpg"

const appId = "348d1a1ae88f5ceb7b6797a0de54ffc2";
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [units, setUnits] = useState("metric");
  const [date, setDate] = useState(null);
  const [coordinates, setCoordinates] = useState(null);

  const getCoordinates = () => {
    const options = {
      enableHighAccuracy: true,
      timeout: 0,
      maximumAge: 0,
    };

    const error = (error) => console.log(error);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setCoordinates(pos.coords);
      },
      error,
      options
    );
  };

  useEffect(() => {
    getCoordinates();
  }, []);

  useEffect(() => {
    console.log(coordinates);
    if (coordinates) {
      fetchWeatherByCoordinates(coordinates.latitude, coordinates.longitude);
    }
  }, [coordinates]);

  const fetchWeather = (city) => {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}&units=${units}`
    )
      .then((response) => response.json())
      .then((json) => json);
  };

  const fetchWeatherByCoordinates = (lat, lon) => {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}&units=${units}`
    )
      .then((response) => response.json())
      .then((json) => setWeatherData(json));
  };

  const updateWeatherData = async (city) => {
    setWeatherData(await fetchWeather(city));
  };

  useEffect(() => {
    if (weatherData?.name) {
      updateWeatherData(weatherData?.name);
      console.log(weatherData);
    }
  }, [units]);

  return (
    <div className="App" style={{backgroundImage: `url(${background})`}}>
      <Header
        setWeatherData={setWeatherData}
        fetchWeather={fetchWeather}
        updateWeatherData={updateWeatherData}
        units={units}
        setUnits={setUnits}
      />
      <Main 
      weatherData={weatherData} 
      setDate={setDate}
      units={units} 
      date={date} 
      days={days}/>
    </div>
    
  );
}

export default App;
