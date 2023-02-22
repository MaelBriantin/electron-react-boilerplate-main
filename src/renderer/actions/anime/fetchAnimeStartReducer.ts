import { PayloadAction } from '@reduxjs/toolkit';
import {
  AnimeStateType,
  initialState,
  StatusType,
} from '../../types/AnimeStateType';
import { AnimeType } from '../../types/AnimeType';

export const fetchAnimeStartReducer = (
  state: AnimeStateType,
  // action: PayloadAction<{ id: number }>,
) => {
  // const { id } = action.payload;
  state.status = StatusType.loading;
};

export const fetchAnimeSuccessReducer = (
  state: AnimeStateType,
  action: PayloadAction<{ info: AnimeType }>,
) => {
  state.status = StatusType.success;
  state.info = action.payload.info;
  state.error = '';
};

export const fetchAnimeFailureReducer = (
  state: AnimeStateType,
  action: PayloadAction<{ error: string } | undefined>,
) => {
  state.status = StatusType.failure;
  state.error = action.payload ? action.payload.error : 'error';
  state.info = initialState.info;
};
