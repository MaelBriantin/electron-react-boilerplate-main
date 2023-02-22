import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { initialState } from '../../types/AnimeStateType';
import {
  fetchAnimeFailureReducer,
  fetchAnimeStartReducer,
  fetchAnimeSuccessReducer,
} from '../../actions/anime/fetchAnimeStartReducer';
import fetchAnimeService from '../../services/animeServices';
import { AnimeType } from '../../types/AnimeType';

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

export const animeSlice = createSlice({
  name: 'anime',
  initialState,
  reducers: {
    // No actions
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAnimeById.pending, fetchAnimeStartReducer);
    builder.addCase(fetchAnimeById.fulfilled, fetchAnimeSuccessReducer);
    builder.addCase(fetchAnimeById.rejected, fetchAnimeFailureReducer);
  },
});

// export const { increment, decrement, incrementByAmount, fetchAnimeStart } = animeSlice.actions;
export const animeAction = animeSlice.actions;

export default {
  animeReducers: animeSlice.reducer,
  animeAction: animeSlice.actions,
};
