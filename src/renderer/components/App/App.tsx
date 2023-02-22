import { Provider } from 'react-redux';
import '../../assets/style/main.css';
import UserContextProvider from '../Context/UserContext';
import { store } from '../../store';
import AnimeRouter from '../../routes/AnimeRouter';

const App = () => {
  return (
    <UserContextProvider>
      <Provider store={store}>
        <AnimeRouter />
      </Provider>
    </UserContextProvider>
  );
};

export default App;
