import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { getCountriesAction, filterCountries } from "./actions";

const allCountriesReducer = createReducer([], {
  [getCountriesAction.fulfilled]: (state, { payload }) => {
    return [...state, ...payload.Countries];
  },
});

const filteredCountriesReducer = createReducer([], {
  [filterCountries]: (state, { payload }) => {
    return (state = payload);
  },
});

export const reducers = combineReducers({
  allCountriesReducer,
  filteredCountriesReducer,
});
