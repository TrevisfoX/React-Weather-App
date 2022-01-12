import React from 'react'
import Search from '../Search'

const Header = ({setWeatherData}) => {
    return (
        <div>
            {/* <img src="" alt="Logo image" />     */}
            <Search setWeatherData={setWeatherData}/>
        </div>
    )
}

export default Header;