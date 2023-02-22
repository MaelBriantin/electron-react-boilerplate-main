import { AiredType, nullAiredType } from './AiredType';
import { BroadcastType, nullBroadcastType } from './BroadcastType';
import { ImageFormatType, ImageType } from './ImageType';
import { RelationnalType } from './RelationnalType';
import { TitleType } from './TitleType';
import { nullTrailerType, TrailerType } from './TrailerType';

export type AnimeType = {
  mal_id: number;
  url: string;
  images: Record<ImageFormatType, ImageType> | null;
  trailer: TrailerType;
  approved: boolean;
  titles: TitleType[];
  title: string;
  titleEnglish: string;
  titleJapanese: string;
  titleSynonyms: string[];
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
  aired: AiredType;
  duration: string;
  rating: string;
  score: number;
  scoredBy: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: string;
  year: number;
  broadcast: BroadcastType;
  producers: RelationnalType[];
  licensors: RelationnalType[];
  studios: RelationnalType[];
  genres: RelationnalType[];
  explicitGenres: RelationnalType[];
  themes: RelationnalType[];
  demographics: RelationnalType[];
};

export const nullAnimeType: AnimeType = {
  mal_id: 0,
  url: '',
  images: null,
  trailer: nullTrailerType,
  approved: false,
  titles: [],
  title: '',
  titleEnglish: '',
  titleJapanese: '',
  titleSynonyms: [],
  type: '',
  source: '',
  episodes: 0,
  status: '',
  airing: false,
  aired: nullAiredType,
  duration: '',
  rating: '',
  score: 0,
  scoredBy: 0,
  rank: 0,
  popularity: 0,
  members: 0,
  favorites: 0,
  synopsis: '',
  background: '',
  season: '',
  year: 0,
  broadcast: nullBroadcastType,
  producers: [],
  licensors: [],
  studios: [],
  genres: [],
  explicitGenres: [],
  themes: [],
  demographics: [],
};
