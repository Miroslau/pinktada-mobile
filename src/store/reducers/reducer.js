import { combineReducers } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import persistedApartmentReducer from './apartmentReducer';
import persistedUserReducer from './userReducer';

const reducers = combineReducers({
  user: persistedUserReducer,
  apartment: persistedApartmentReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'users/LogoutUser/fulfilled') {
    AsyncStorage.removeItem('persist:user')
      .then(() => {
        const { apartment } = state;
        state = { apartment };
      })
      .catch((error) => console.error(error));
  }
  return reducers(state, action);
};

export default rootReducer;
