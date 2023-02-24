import { RootState } from '../../store';

const selectTopCharacters = (state: RootState) => state.character.list;

export default selectTopCharacters;
