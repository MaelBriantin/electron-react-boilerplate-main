import { ReactNode } from 'react';
import { Slice, SliceCaseReducers, configureStore } from '@reduxjs/toolkit';
import { store } from 'renderer/store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';

export const mockStore = <T, S extends string>(
  mockSlice?: Slice<T, SliceCaseReducers<T>, S>
): ToolkitStore => {
  return mockSlice
    ? configureStore({
        reducer: {
        [mockSlice.name]: mockSlice.reducer,
      },
    })
    : store;
};

export const withStore = <T, S extends string>(
  children: ReactNode,
  mockSlice?: Slice<T, SliceCaseReducers<T>, S>
) => {
  return <Provider store={mockStore(mockSlice)}>{children}</Provider>;
};

export const withRouter = (urls: string[], children: ReactNode) => {
  return <MemoryRouter initialEntries={urls}>{children}</MemoryRouter>;
};
