import { AxiosResponse } from 'axios';
import { AnimeType } from '../types/AnimeType';
import api from './api';

const parseAnimeHelper = (
  response: AxiosResponse<{ data: AnimeType[] }>,
): AnimeType[] => {
  return response.data.data;
};

const fetchAnimeListService = (): Promise<AnimeType[]> => {
  return api
    .get<{ data: AnimeType[] }>('/top/anime')
    .then((request) => {
      return parseAnimeHelper(request);
    })
    .catch((e) => {
      return e;
    });
};

export default fetchAnimeListService;
