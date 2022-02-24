import React from 'react';
import { View, Text, Button } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const ProfileScreen = ({ logOutUser }) => (
  <View>
    <Text>profile Screen</Text>
    <Button title="exit" onPress={logOutUser} />
  </View>
);

ProfileScreen.propTypes = {
  logOutUser: PropTypes.func.isRequired,
};

export default ProfileScreen;
