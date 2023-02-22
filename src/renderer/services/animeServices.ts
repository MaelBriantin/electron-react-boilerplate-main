import { AxiosResponse } from 'axios';
import { AnimeType } from '../types/AnimeType';
import api from './api';

const parseAnimeHelper = (
  response: AxiosResponse<{ data: AnimeType }>,
): AnimeType => {
  return response.data.data;
};

const fetchAnimeService = (id: number): Promise<AnimeType> => {
  return api
    .get<{ data: AnimeType }>(`/anime/${id}`)
    .then((request) => {
      return parseAnimeHelper(request);
    })
    .catch((e) => {
      return e;
    });
};

export default fetchAnimeService;
