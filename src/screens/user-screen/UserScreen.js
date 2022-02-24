import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearState, userSelector } from '../../store/slice/userSlice';
import { loginUser, logoutUser } from '../../store/actions/userAction';
import LoginScreen from './login-screen/LoginScreen';
import ProfileScreen from './profile-screen/ProfileScreen';

const UserScreen = () => {
  const dispatch = useDispatch();
  const { isSuccess, token, errorMessage } = useSelector(userSelector);

  const signInUser = (user) => {
    dispatch(loginUser(user));
  };

  const logOutUser = () => dispatch(logoutUser());

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
        token ? <ProfileScreen logOutUser={logOutUser} />
          : <LoginScreen errorMessage={errorMessage} signInUser={signInUser} />
      }
    </>
  );
};

export default UserScreen;
