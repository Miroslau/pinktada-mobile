/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  Text,
  View,
} from 'react-native';

const App = () => {
  useEffect(() => {
    fetch('http://192.168.190.193/api/apartments/locations/most-apartments')
      .then((response) => response.json())
      .then((todos) => {
        console.log('items: ', todos);
      }).catch((error) => console.log(error.message));
  }, []);

  return (
    <View>
      <Text>126232</Text>
    </View>
  );
};

export default App;
