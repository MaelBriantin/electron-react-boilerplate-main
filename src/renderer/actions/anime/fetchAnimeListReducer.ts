import { PayloadAction } from '@reduxjs/toolkit';
import {
  AnimeStateType,
  initialState,
  StatusType,
} from '../../types/AnimeStateType';
import { AnimeType, nullAnimeType } from '../../types/AnimeType';

export const fetchAnimeListStartReducer = (
  state: AnimeStateType,
  // action: PayloadAction<{ id: number }>,
) => {
  // const { id } = action.payload;
  state.status = StatusType.loading;
  state.list = initialState.list;
};

export const fetchAnimeListSuccessReducer = (
  state: AnimeStateType,
  action: PayloadAction<{ list: AnimeType[] }>,
) => {
  state.status = StatusType.success;
  state.list = action.payload.list;
  state.error = '';
};

export const fetchAnimeListFailureReducer = (
  state: AnimeStateType,
  action: PayloadAction<{ error: string } | undefined>,
) => {
  state.status = StatusType.failure;
  state.error = action.payload ? action.payload.error : 'error';
  state.list = initialState.list;
};
