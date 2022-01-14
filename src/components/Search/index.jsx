import React from 'react'

const Search = ({updateWeatherData}) => {

    const handleSubmit = async (event) => {
        event.preventDefault();
        updateWeatherData(event.target[0].value);
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
