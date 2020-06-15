import { getVenueServiceRepository } from '../repository-provider';
import { getVenueServiceApi } from '../api-provider';
import { Environment } from '../../../shared/typings'
import { seatAttributesMock } from '../../__mocks__';

const getSeatsData = jest.fn().mockImplementation(() => Promise.resolve(seatAttributesMock));

jest.mock('../api-provider', () => ({
  getVenueServiceApi: jest.fn().mockImplementation(() => ({
    getSeatAttributes: getSeatsData,
  })),
}));

describe('Venue repository', () => {
  const venueId = '199';
  const environment = Environment.Dev;
  const { getSeatAttributes } = getVenueServiceRepository(environment);

  it('should create api for specific environment', () => {
    expect(getVenueServiceApi).toBeCalledWith(environment, undefined);
  });

  describe('getSeatAttributes function', () => {
    it('should throw an error if venue id is not defined', async () => {
      expect.assertions(1);

      await expect(getSeatAttributes(null)).rejects.toEqual(new Error('getSeatAttributes: venue id is required'));
    });

    it('should return seat attributes', async () => {
      await getSeatAttributes(venueId);

      expect(getSeatsData).toBeCalledWith(venueId);
    });
  });
});
