import { createSlice } from '@reduxjs/toolkit';

export const apartmentSlice = createSlice({
  name: 'apartment',
  initialState: {
    isFetching: true,
    isSuccess: false,
    isError: false,
    errorMessage: '',
    apartments: [],
    clusters: [],
    isFetchAll: true,
    publicAddress: 'Test',
    currentPage: 0,
    count: 0,
    bounds: null,
    startDate: new Date(),
    endDate: new Date(new Date().setDate(new Date().getDate() + 1)),
    searchParams: {
      priceRange: [],
      bedrooms: 0,
      isMax: true,
      startDate: new Date(),
      endDate: new Date(new Date().setDate(new Date().getDate() + 1)),
    },
  },
  reducers: {
    setPublicAddress: (state, { payload }) => {
      state.publicAddress = payload.publicAddress;
    },
    setParams: (state, { payload }) => ({
      ...state,
      searchParams: {
        ...state.searchParams,
        ...payload,
      },
    }),
    setBounds: (state, { payload }) => ({
      ...state,
      bounds: payload,
    }),
    setDate: (state, { payload }) => {
      state.startDate = payload.startDate;
      state.endDate = payload.endDate;
    },
    setDateParams: (state, { payload }) => {
      state.searchParams.startDate = payload.startDate;
      state.searchParams.endDate = payload.endDate;
    },
    clearState: (state) => {
      state.isError = false;
      state.isFetching = false;
      state.isSuccess = false;
      state.isFetchAll = true;
      state.apartments = [];
      state.clusters = [];
      state.publicAddress = '';
      state.currentPage = 0;
      state.count = 0;
      state.bounds = null;
      state.searchParams = {
        priceRange: [],
        bedrooms: 0,
        isMax: true,
        startDate: new Date(),
        endDate: new Date(new Date().setDate(new Date().getDate() + 1)),
      };
    },
    clearStateWithoutDate: (state) => {
      state.isError = false;
      state.isFetching = false;
      state.isSuccess = false;
      state.isFetchAll = true;
      state.apartments = [];
      state.clusters = [];
      state.publicAddress = '';
      state.currentPage = 0;
      state.count = 0;
      state.bounds = null;
      state.searchParams = {
        ...state.searchParams,
        priceRange: [],
        bedrooms: 0,
        isMax: true,
      };
    },
  },
});

export const {
  setPublicAddress, clearState, setParams, setBounds, setDate, setDateParams, clearStateWithoutDate,
} = apartmentSlice.actions;

export const apartmentSelector = (state) => state.apartment;
