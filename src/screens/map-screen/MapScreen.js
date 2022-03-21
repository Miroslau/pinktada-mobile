import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import MapComponent from '../../components/map-component/MapComponent';
import { apartmentSelector, setBounds, setPublicAddress, setParams } from '../../store/slice/apartmentSlice';
import { searchApartments } from '../../store/actions/apartmentAction';

const MapScreen = () => {
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
  const [isVisible, setIsVisible] = useState(false);

  const loadMoreApartments = () => {
    setPage(page + 1);
  };

  const handleModal = (value) => {
    setIsVisible(value);
  };

  const handlerFilter = (filtersParams) => {
    handleModal(false);
    dispatch(setParams(filtersParams));
    dispatch(
      searchApartments({
        publicAddress,
        currentPage: 0,
        ...filtersParams,
        isFilter: true,
        bounds,
        startDate,
        endDate,
      }),
    );
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
  }, []);

  return (
    <MapComponent
      onEndReachedHandler={loadMoreApartments}
      apartments={clusters.length !== 0 ? clusters : apartments}
      handleDragAndZoomMap={handleDragAndZoomMap}
      apartmentFilter={handlerFilter}
      setModalActive={handleModal}
      isActiveModal={isVisible}
    />
  );
};

export default MapScreen;
