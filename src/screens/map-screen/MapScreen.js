import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import MapComponent from '../../components/map-component/MapComponent';
import { apartmentSelector } from '../../store/slice/apartmentSlice';
import { searchApartments } from '../../store/actions/apartmentAction';

const MapScreen = () => {
  const dispatch = useDispatch();
  const {
    publicAddress,
    searchParams,
    apartments,
    clusters,
    currentPage,
    isFetching,
    count,
    bounds,
    isFetchAll,
  } = useSelector(apartmentSelector);
  const {
    priceRange, bedrooms, isMax, startDate, endDate,
  } = searchParams;

  useEffect(() => {
    dispatch(
      searchApartments({
        publicAddress,
        currentPage,
        priceRange,
        bedrooms,
        isMax,
        bounds,
        startDate,
        endDate,
      }),
    );
  }, []);

  console.log('apartments: ', apartments);

  return (
  // eslint-disable-next-line no-use-before-define
    <SafeAreaView forceInset={{ top: 'always' }}>
      <MapComponent apartments={apartments} />
    </SafeAreaView>
  );
};

export default MapScreen;
