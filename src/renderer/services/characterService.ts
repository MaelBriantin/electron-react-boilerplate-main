import { AxiosResponse } from 'axios';
import api from './api';
import { CharacterType } from '../types/CharacterType';

const parseAxiosResponseHelper = (
  response: AxiosResponse<{ data: CharacterType[] }>,
): CharacterType[] => {
  return response.data.data;
};

const characterService = (): Promise<CharacterType[]> => {
  return api
    .get<{ data: CharacterType[] }>('/top/characters')
    .then((request) => {
      return parseAxiosResponseHelper(request);
    })
    .catch((e) => {
      return e;
    });
};

export default characterService;
