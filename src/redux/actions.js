import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

const baseURL = "https://api.covid19api.com";

export const getCountriesAction = createAsyncThunk(
  "countries/get",
  async () => {
    const response = fetch(`${baseURL}/summary`)
      .then((respose) => {
        return respose.json();
      })
      .then((data) => {
        return data;
      });
    return response;
  }
);

export const filterCountries = createAction(
  ("countries/filter",
  (countries) => {
    return {
      payload: countries,
    };
  })
);
