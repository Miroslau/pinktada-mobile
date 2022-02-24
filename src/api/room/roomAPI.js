import httpClient from '../index';

export default {
  getVisitHistory() {
    return httpClient.get('/trips/history');
  },

  futureRooms() {
    return httpClient.get('/trips/future');
  },
};
