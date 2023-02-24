import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { initialState } from '../../types/AnimeStateType';
import {
  fetchAnimeFailureReducer,
  fetchAnimeStartReducer,
  fetchAnimeSuccessReducer,
} from '../../actions/anime/fetchAnimeStartReducer';
import fetchAnimeService from '../../services/animeServices';
import { AnimeType } from '../../types/AnimeType';
import fetchAnimeListService from '../../services/animeListService';
import {
  fetchAnimeListFailureReducer,
  fetchAnimeListStartReducer,
  fetchAnimeListSuccessReducer,
} from '../../actions/anime/fetchAnimeListReducer';

export const fetchAnimeById = createAsyncThunk<
  { info: AnimeType }, // Payload que va renvoyer cette action lors qu'elle est réussie
  { id: number }, // Parametre que va attendre mon action async dans mon dispatch
  { rejectValue: { error: string } }
>('anime/fetchAnimeById', async (params, thunkAPI) => {
  const { rejectWithValue, fulfillWithValue } = thunkAPI;
  const { id } = params;
  try {
    const anime = await fetchAnimeService(id);
    return fulfillWithValue({ info: anime });
  } catch (error) {
    return rejectWithValue({
      error: error instanceof Error ? error.message : 'error',
    });
  }
});

export const fetchAnimeList = createAsyncThunk<
  { list: AnimeType[] }, // Payload que va renvoyer cette action lors qu'elle est réussie
  undefined,
  { rejectValue: { error: string } }
>('anime/fetchAnimeList', async (params, thunkAPI) => {
  const { rejectWithValue, fulfillWithValue } = thunkAPI;
  try {
    const animeList = await fetchAnimeListService();
    return fulfillWithValue({ list: animeList });
  } catch (error) {
    return rejectWithValue({
      error: error instanceof Error ? error.message : 'error',
    });
  }
});

export const animeSlice = createSlice({
  name: 'anime',
  initialState,
  reducers: {
    // No actions
  },
  extraReducers: (builder) => {
    // AnimeById
    builder
      .addCase(fetchAnimeById.pending, fetchAnimeStartReducer)
      .addCase(fetchAnimeById.fulfilled, fetchAnimeSuccessReducer)
      .addCase(fetchAnimeById.rejected, fetchAnimeFailureReducer);
    // AnimeList
    builder
      .addCase(fetchAnimeList.pending, fetchAnimeListStartReducer)
      .addCase(fetchAnimeList.fulfilled, fetchAnimeListSuccessReducer)
      .addCase(fetchAnimeList.rejected, fetchAnimeListFailureReducer);
  },
});

export default {
  animeReducers: animeSlice.reducer,
  animeAction: animeSlice.actions,
};
