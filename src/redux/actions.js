import { createAsyncThunk } from "@reduxjs/toolkit";

const baseURL = "https://api.covid19api.com";

export const getCountriesAction = createAsyncThunk(
  "get/countries",
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
