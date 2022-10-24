import { createReducer, createAction } from "@reduxjs/toolkit";

export const getCoordsAction = createAction("getCoordsAction");
export const getCoordsReducer = createReducer(
	{},
	{ [getCoordsAction]: (_, { payload }) => payload }
);
