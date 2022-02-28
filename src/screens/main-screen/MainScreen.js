import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../home-screen/HomeScreen';
import RoomScreen from '../room-screen/RoomScreen';
import MapScreen from '../map-screen/MapScreen';
import PaymentScreen from '../payment-screen/PaymentScreen';

const MainScreenStack = createNativeStackNavigator();

const MainScreen = () => (
  <MainScreenStack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
    }}
  >
    <MainScreenStack.Screen name="Home" component={HomeScreen} />
    <MainScreenStack.Screen name="Room" component={RoomScreen} />
    <MainScreenStack.Screen name="Map" component={MapScreen} />
    <MainScreenStack.Screen name="Payment" component={PaymentScreen} />
  </MainScreenStack.Navigator>
);

export default MainScreen;
