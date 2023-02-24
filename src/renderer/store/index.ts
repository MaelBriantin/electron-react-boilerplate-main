import { configureStore } from '@reduxjs/toolkit';
import { animeSlice } from './anime/animeSlice';
import characterSlice from './characters/slice/characterSlice';

export const store = configureStore({
  reducer: {
    anime: animeSlice.reducer,
    character: characterSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the index itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
