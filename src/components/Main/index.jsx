import React from 'react'

const Main = ({weatherData = null, units}) => {


    return (
        <div>
            {weatherData ? (<div>
                <h2>{weatherData?.name}</h2>
                <h3>{weatherData?.main?.temp} {units === 'metric' ? 'C' : 'F'} &#176; </h3>
            </div>
            ) : (<p>Enter the city</p>)
            }
        </div>
        
    )
}

export default Main;