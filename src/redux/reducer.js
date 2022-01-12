import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { getCountriesAction } from "./actions";

const allCountriesReducer = createReducer([], {
  [getCountriesAction.fulfilled]: (state, { payload }) => {
    return [...state, ...payload.Countries];
  },
});

export const reducers = combineReducers({ allCountriesReducer });
