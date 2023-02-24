import { PayloadAction } from '@reduxjs/toolkit';
import { StatusType } from '../../../types/AnimeStateType';
import {
  charactersInitialState,
  CharactersStateType,
  CharacterType,
} from '../../../types/CharacterType';

export const characterPendingReducer = (state: CharactersStateType) => {
  state.status = StatusType.loading;
  state.list = charactersInitialState.list;
};

export const characterFulfilledReducer = (
  state: CharactersStateType,
  action: PayloadAction<{ list: CharacterType[] }>,
) => {
  state.status = StatusType.success;
  state.list = action.payload.list;
  state.error = '';
};

export const characterFailureReducer = (
  state: CharactersStateType,
  action: PayloadAction<{ error: string } | undefined>,
) => {
  state.status = StatusType.failure;
  state.error = action.payload ? action.payload.error : 'error';
  state.list = charactersInitialState.list;
};
