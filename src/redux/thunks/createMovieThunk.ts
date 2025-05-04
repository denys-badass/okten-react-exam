import {IMovieParams} from "../../models/IMovieParams.ts";
import {IMovieResponse} from "../../models/IMovieResponse.ts";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const createMovieThunk = (
    typePrefix: string,
    fetcher: (params: IMovieParams) => Promise<IMovieResponse>
) => {
  return createAsyncThunk(
      typePrefix,
      async (params: IMovieParams, thunkAPI) => {
          const key = Object.values(params).join('');
          const data = await fetcher(params);
          return thunkAPI.fulfillWithValue({key, data});
      }
  );
};