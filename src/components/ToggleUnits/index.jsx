import React from 'react'
import './style.scss'

const ToggleUnits = ({units, setUnits}) => {
    const isCelcium = units === 'metric';

    const toggleUnits = () => {
        // if (units === 'metric') {
        //     setUnits('imperial');
        // } else {
        //     setUnits('metric');
        // }
        setUnits(units === 'metric' ? 'imperial' : 'metric')
    };

    return (
        <div onClick={toggleUnits} className='toggle-button'>
           <span className={`${isCelcium && 'bold'}`}>&#176;C</span>/<span className={`${!isCelcium && 'bold'}`}>&#176;F</span>
        </div>
    )
}

export default ToggleUnits;
