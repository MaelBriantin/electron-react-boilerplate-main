import { AnimeType, nullAnimeType } from './AnimeType';

export enum StatusType {
  start = 'start',
  success = 'success',
  loading = 'loading',
  failure = 'failure',
}

export type AnimeStateType = {
  list: AnimeType[];
  info: AnimeType;
  status: StatusType;
  error: string;
};

export const initialState = {
  list: [],
  info: nullAnimeType,
  status: StatusType.start,
  error: '',
};
