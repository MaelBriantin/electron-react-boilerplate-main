import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { animeSlice } from '../renderer/store/anime/animeSlice';
import Button from '../renderer/components/Buttons/Button';

const mockStore = configureStore({
  reducer: {
    [animeSlice.name]: animeSlice.reducer,
  },
});

describe('.........', () => {
  it('should do something interesting', () => {
    const page = render(
      <Provider store={mockStore}>
        <MemoryRouter>
          <Button text="Hello Stranger" icon="prayer" />
        </MemoryRouter>
      </Provider>,
    );
    expect(page).toBeTruthy();
  });
});
