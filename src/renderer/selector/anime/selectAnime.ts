import { RootState } from '../../store';

export const selectAnime = (state: RootState) => state.anime;
export const selectAnimeInfo = (state: RootState) => state.anime.info;
