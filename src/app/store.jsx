import { configureStore, combineReducers } from "@reduxjs/toolkit";
import weatherReducer from "../features/weather/weatherSlice";
import { addSearchCoordReducer } from "../features/coordinates/coordinatesReducer";

const rootReducere = combineReducers({
	weather: weatherReducer,
	coords: addSearchCoordReducer,
});

export const store = configureStore({
	reducer: rootReducere,
});
