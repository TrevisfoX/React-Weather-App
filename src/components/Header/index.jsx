import React from 'react'
import Search from '../Search'
import ToggleMetricSystem from '../ToggleUnits';
import logo from '../../assets/logo.svg'
import './style.scss'

const Header = ({units, setUnits, updateWeatherData}) => {
    return (
        <div className='header'>
            <img src={logo} alt="Logo" className='logo'/>    
            <Search units={units} updateWeatherData={updateWeatherData}/>
            <ToggleMetricSystem units={units} setUnits={setUnits} updateWeatherData={updateWeatherData}/>
        </div>
    )
}

export default Header;