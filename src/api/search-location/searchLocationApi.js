import httpClient from '../index';

export default {
  getLocations(location) {
    return httpClient.get(`/apartments/locations?query=${location}`);
  },
};
