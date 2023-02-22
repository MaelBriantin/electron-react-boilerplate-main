import { AnimeType, nullAnimeType } from './AnimeType';

export enum StatusType {
  start = 'start',
  success = 'success',
  loading = 'loading',
  failure = 'failure',
}

export type AnimeStateType = {
  status: StatusType;
  info: AnimeType;
  error: string;
};

export const initialState = {
  info: nullAnimeType,
  status: StatusType.start,
  error: '',
};
