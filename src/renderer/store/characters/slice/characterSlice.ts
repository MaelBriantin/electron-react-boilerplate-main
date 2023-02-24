import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  charactersInitialState,
  CharacterType,
} from '../../../types/CharacterType';
import characterService from '../../../services/characterService';
import {
  characterFailureReducer,
  characterFulfilledReducer,
  characterPendingReducer,
} from '../reducers/characterReducers';

export const fetchTopCharacters = createAsyncThunk<
  { list: CharacterType[] }, // Payload que va renvoyer cette action lors qu'elle est réussie
  undefined,
  { rejectValue: { error: string } }
>('character/fetchTopCharacters', async (params, thunkAPI) => {
  const { rejectWithValue, fulfillWithValue } = thunkAPI;
  try {
    const animeList = await characterService();
    return fulfillWithValue({ list: animeList });
  } catch (error) {
    return rejectWithValue({
      error: error instanceof Error ? error.message : 'error',
    });
  }
});

const characterSlice = createSlice({
  name: 'character',
  initialState: charactersInitialState,
  reducers: {
    // No actions
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopCharacters.pending, characterPendingReducer)
      .addCase(fetchTopCharacters.fulfilled, characterFulfilledReducer)
      .addCase(fetchTopCharacters.rejected, characterFailureReducer);
  },
});

export default characterSlice;
