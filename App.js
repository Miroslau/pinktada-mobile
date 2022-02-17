/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import NavigationTabs from './src/components/navigation-tabs/NavigationTabs';
import store from './src/store';

const App = () => {
  const persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer>
          <NavigationTabs />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
