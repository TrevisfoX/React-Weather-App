import { createReducer } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";

export const addSearchCoordAction = createAction("addSearchCoordAction");

export const addSearchCoordReducer = createReducer(
	{},
	{
		[addSearchCoordAction]: (_, { payload }) => payload,
	}
);
