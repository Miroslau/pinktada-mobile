import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import persistedApartmentReducer from './apartmentReducer';

const reducers = combineReducers({
  apartment: persistedApartmentReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'users/LogoutUser/fulfilled') {
    storage.removeItem('persist:user');
    const { apartment } = state;
    state = { apartment };
  }
  return reducers(state, action);
};

export default rootReducer;
