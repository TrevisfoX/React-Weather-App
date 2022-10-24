import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { getCoordsReducer } from "../features/coordinates/coordinatesReducer";
import weatherReducer from "../features/weather/weatherSlice";

const rootReducere = combineReducers({
	weather: weatherReducer,
	coords: getCoordsReducer,
});

export const store = configureStore({
	reducer: rootReducere,
});
