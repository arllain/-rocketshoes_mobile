import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import './config/ReactotronConfig';
import 'react-native-gesture-handler';
import Route from './routes';
import NavigationService from './services/navigation';
import store from './store/';

function App() {
  return (
    <>
      <Provider store={store}>
        <StatusBar barStyle="light-content" backgroundColor="black" />
        <Route
          ref={navigatorRef => NavigationService.setNavigator(navigatorRef)}
        />
      </Provider>
    </>
  );
}

export default App;
