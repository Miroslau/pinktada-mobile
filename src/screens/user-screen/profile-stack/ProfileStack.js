import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HistoryScreen from '../../history-screen/HistoryScreen';
import UpcomingTripsScreen from '../../upcoming-trips-screen/UpcomingTripsScreen';
import ProfileScreen from '../profile-screen/ProfileScreen';

const ProfileNavStack = createNativeStackNavigator();

const ProfileStack = () => (
  <ProfileNavStack.Navigator
    initialRouteName="Profile"
    screenOptions={{
      headerShown: false,
    }}
  >
    <ProfileNavStack.Screen name="Profile">
      { (props) => <ProfileScreen {...props} /> }
    </ProfileNavStack.Screen>
    <ProfileNavStack.Screen name="History" component={HistoryScreen} />
    <ProfileNavStack.Screen name="Upcoming" component={UpcomingTripsScreen} />
  </ProfileNavStack.Navigator>
);

export default ProfileStack;
