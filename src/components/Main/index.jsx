import { useEffect } from "react";
import "./style.scss";

const Main = ({ weatherData = null, units, days, setDate, date }) => {
  useEffect(() => {
    if (weatherData) {
      setDate(new Date(weatherData?.dt * 1000));
    }
  }, [weatherData]);

  return (
    <main className="main-wrapper">
      <div>
        {weatherData ? (
          <div>
            <h2 className="city-name">{weatherData?.name}</h2>
            <h3 className="temperature">
              {weatherData?.main?.temp} {units === "metric" ? "C" : "F"}&#176;{" "}
            </h3>
          </div>
        ) : (
          ""
        )}
        <div className="date-container">
          <p>{`${days[date?.getDay()]}, ${date?.getDate()}`}</p>
        </div>
      </div>
    </main>
  );
};

export default Main;
