//import liraries
import React, {Component} from 'react';
import {LogBox} from 'react-native';

import {Provider} from 'react-redux';

import {PersistGate} from 'redux-persist/integration/react';

import {store, persistor} from './src/store/store';
import MainNavigation from './src/navigation/mainNavigation';

LogBox.ignoreAllLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

// create a component
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
