import { ImageFormatType, ImageType } from './ImageType';
import { StatusType } from './AnimeStateType';

export type CharacterType = {
  mal_id: number;
  url: string;
  images: Record<ImageFormatType, ImageType> | null;
  name: string;
  name_kanji: string;
  nicknames: string[];
  favorites: number;
  about: string;
};

export type CharactersStateType = {
  list: CharacterType[];
  status: StatusType;
  error: string;
};

export const charactersInitialState = {
  list: [],
  status: StatusType.start,
  error: '',
};
