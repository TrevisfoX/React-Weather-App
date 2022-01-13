import React from 'react'
import Search from '../Search'
import ToggleMetricSystem from '../ToggleUnits';
import logo from '../../assets/logo.svg'

const Header = ({setWeatherData, units, setUnits}) => {
    return (
        <div>
            <img src={logo} alt="Logo" className='logo'/>    
            <Search setWeatherData={setWeatherData} units={units}/>
            <ToggleMetricSystem units={units} setUnits={setUnits}/>
        </div>
    )
}

export default Header;