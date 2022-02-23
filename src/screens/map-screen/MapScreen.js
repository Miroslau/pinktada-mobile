import React, { useEffect, useState } from 'react';
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

  const [page, setPage] = useState(0);

  const loadMoreApartments = () => {
    setPage(page + 1);
  };

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
  }, [page]);

  return (
  // eslint-disable-next-line no-use-before-define
    <MapComponent onEndReachedHandler={loadMoreApartments} apartments={apartments} />
  );
};

export default MapScreen;
