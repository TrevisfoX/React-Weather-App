import React from 'react'

const Main = ({weatherData = null}) => {


    return (
        <div>
            {weatherData ? (<div>
                <h2>{weatherData?.name}</h2>
                <h3>{weatherData?.main.temp} C </h3>
            </div>
            ) : (<p>Enter the city</p>)
            }
        </div>
        
    )
}

export default Main;