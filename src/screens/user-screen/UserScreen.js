import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Alert } from 'react-native';
import { clearState, userSelector } from '../../store/slice/userSlice';
import { loginUser } from '../../store/actions/userAction';
import LoginScreen from './login-screen/LoginScreen';
import ProfileStack from './profile-stack/ProfileStack';

const UserScreen = () => {
  const dispatch = useDispatch();
  const {
    isSuccess, token, errorMessage,
  } = useSelector(userSelector);

  const signInUser = (user) => {
    dispatch(loginUser(user));
  };

  useEffect(() => () => {
    dispatch(clearState());
  }, []);

  useEffect(() => {
    if (isSuccess) {
      dispatch(clearState());
    }
  }, [isSuccess]);

  return (
    <>
      {
        token ? (
          <ProfileStack />
        )
          : <LoginScreen errorMessage={errorMessage} signInUser={signInUser} />
      }
    </>
  );
};

export default UserScreen;
