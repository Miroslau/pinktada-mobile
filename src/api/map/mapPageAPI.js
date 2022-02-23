import httpClient from '../index';

export default {
  searchApartments(
    location,
    priceTo,
    bedrooms,
    isMax,
    bounds,
    startDate,
    endDate,
    page = 1,
    priceFrom = 0,
  ) {
    const params = {
      location, page, priceFrom, startDate, endDate,
    };
    if (isMax) params.priceTo = priceTo;
    if (bounds) {
      params.neLat = bounds.northEast.latitude;
      params.neLng = bounds.northEast.longitude;
      params.swLat = bounds.southWest.latitude;
      params.swLng = bounds.southWest.longitude;
      params.zoom = bounds.zoomRound;
      params.sizeX = 800;
      params.sizeY = 800;
    }
    if (bedrooms !== 0) params.bedrooms = bedrooms;
    return httpClient.get('/apartments/search', {
      params,
    });
  },
};
