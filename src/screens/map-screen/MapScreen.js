import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MapComponent from '../../components/map-component/MapComponent';
import { apartmentSelector, setBounds, setPublicAddress } from '../../store/slice/apartmentSlice';
import { searchApartments } from '../../store/actions/apartmentAction';

const MapScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {
    publicAddress,
    searchParams,
    apartments,
    clusters,
    currentPage,
    bounds,
  } = useSelector(apartmentSelector);
  const {
    priceRange, bedrooms, isMax, startDate, endDate,
  } = searchParams;

  const [page, setPage] = useState(0);

  const loadMoreApartments = () => {
    setPage(page + 1);
  };

  const handleDragAndZoomMap = (cords) => {
    dispatch(setBounds(cords));
    dispatch(setPublicAddress(''));
    dispatch(
      searchApartments({
        currentPage: 0,
        ...searchParams,
        isFilter: true,
        bounds: cords,
        startDate,
        endDate,
      }),
    );
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
    <MapComponent navigation={navigation}
      onEndReachedHandler={loadMoreApartments}
      apartments={clusters.length !== 0 ? clusters : apartments}
      handleDragAndZoomMap={handleDragAndZoomMap}
    />
  );
};

export default MapScreen;
