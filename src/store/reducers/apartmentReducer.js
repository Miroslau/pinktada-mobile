import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { apartmentSlice } from '../slice/apartmentSlice';

const apartmentReducer = apartmentSlice.reducer;

const persistConfig = {
  key: 'apartment',
  storage: AsyncStorage,
  whitelist: ['publicAddress', 'bounds', 'searchParams'],
};

const persistedApartmentReducer = persistReducer(persistConfig, apartmentReducer);

export default persistedApartmentReducer;
