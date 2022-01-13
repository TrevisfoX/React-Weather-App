import React from 'react'

const appId = "95426d76631afd5141899e1f7553dba7";

const Search = ({setWeatherData, units}) => {

    const fetchWeather = (city) => {

         return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}&units=${units}`)
          .then(response => response.json())
          .then(json => json);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setWeatherData(await fetchWeather(event.target[0].value));
        event.target[0].value = '';
    };

    return (
        <div>
            <form action="#" onSubmit={handleSubmit}>
                <input type="text" />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default Search;
