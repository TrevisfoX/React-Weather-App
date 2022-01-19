import React from "react";
import './style.scss';


const Search = ({ updateWeatherData }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    updateWeatherData(event.target[0].value);
    event.target[0].value = "";
  };

  return (
    <div>
      <form className="form" action="#" onSubmit={handleSubmit}>
        <input className="input-form" type="text" placeholder="Enter the name of the city"/>
        <button className="btn-form" type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
