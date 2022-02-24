import React from 'react';
import {
  View, Text, Button, TouchableOpacity, Alert,
} from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { userSelector } from '../../../store/slice/userSlice';
import { logoutUser } from '../../../store/actions/userAction';
import { UserScreenStyle } from '../UserScreenStyle';
import { colorVariables } from '../../../constants/colorVariables';

const ProfileScreen = (props) => {
  const dispatch = useDispatch();
  const { navigation } = props;

  const { firstName } = useSelector(userSelector);

  const logOutUser = () => {
    Alert.alert(
      'Logging out of the system',
      'Are you sure?',
      [
        {
          text: 'Yes',
          onPress: () => dispatch(logoutUser()),
        },
        {
          text: 'No',
        },
      ],
    );
  };

  const visitHistory = () => {
    navigation.navigate('History');
  };

  const visitTrips = () => {
    navigation.navigate('Upcoming');
  };

  return (
    <View style={UserScreenStyle.container}>
      <View style={UserScreenStyle.innerContainer}>
        <Text style={UserScreenStyle.pageTitle}>{`Welcome ${firstName}`}</Text>
        <TouchableOpacity
          style={UserScreenStyle.visitHistoryBox}
          onPress={visitHistory}
        >
          <Text style={UserScreenStyle.subText}>Visit History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={UserScreenStyle.visitHistoryBox} onPress={visitTrips}>
          <Text style={UserScreenStyle.subText}>Upcoming Trips</Text>
        </TouchableOpacity>
      </View>
      <Button color={colorVariables.colorPermision} title="Logout" onPress={logOutUser} />
    </View>
  );
};

ProfileScreen.defaultProps = {
  navigation: null,
};

ProfileScreen.propTypes = {
  // logOutUser: PropTypes.func.isRequired,
  // firstName: PropTypes.func.isRequired,
  navigation: PropTypes.instanceOf(Object),
};

export default ProfileScreen;
