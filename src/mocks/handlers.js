// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';
import mockDataMajorCities from './mocks-constants/mockDataMajorCities';

export const handlers = [
  rest.get('/api/apartments/locations/most-apartments', (req, res, ctx) => res(ctx.json(mockDataMajorCities))),
];
