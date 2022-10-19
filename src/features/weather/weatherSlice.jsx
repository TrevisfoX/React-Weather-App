import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
	name: "weather",
	initialState: {
		hourly: [],
		daily: [],
	},
	reducers: {
		getDailyWeather(state, { payload }) {
			state.daily = payload;
		},
		getHourlyWeather(state, { payload }) {
			state.hourly = payload;
		},
	},
});

export const { getHourlyWeather, getDailyWeather } = weatherSlice.actions;

export default weatherSlice.reducer;
