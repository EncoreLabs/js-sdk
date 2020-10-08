import { getVenueServiceRepository } from '../repository-provider';
import { getVenueServiceApi } from '../api-provider';
import { Environment } from '../../../shared/typings'
import { seatAttributesMock } from '../../__mocks__';

const getSeatsData = jest.fn().mockImplementation(() => Promise.resolve(seatAttributesMock));
const getDetailsMock = jest.fn();
const getChartDetailsMock = jest.fn();

jest.mock('../api-provider', () => ({
  getVenueServiceApi: jest.fn().mockImplementation(() => ({
    getDetails: getDetailsMock,
    getChartDetails: getChartDetailsMock,
    getSeatAttributes: getSeatsData,
  })),
}));

describe('Venue repository', () => {
  const venueId = '199';
  const productId = '1001';
  const performanceDate = 'performanceDate';
  const performanceTime = 'performanceTime';
  const seatIdCollection = ['Seat-1', 'Seat-2'];

  const environment = Environment.Dev;
  const { getSeatAttributes, getSeatAttributesBySeatId, getDetails, getChartDetails } = getVenueServiceRepository(environment);

  it('should create api for specific environment', () => {
    expect(getVenueServiceApi).toBeCalledWith(environment, undefined, undefined);
  });

  describe('getSeatAttributes function', () => {
    it('should throw an error if venue id is not defined', async () => {
      expect.assertions(1);

      await expect(getSeatAttributes(null)).rejects.toEqual(new Error('getSeatAttributes: venue id is required'));
    });

    it('should call getSeatAttributes with valid arguments', async () => {
      await getSeatAttributes(venueId, performanceDate, performanceTime);

      expect(getSeatsData).toBeCalledWith({
        performanceDate,
        performanceTime,
        venueId,
      });
    });
  });

  describe('getSeatAttributesBySeatId function', () => {
    it('should throw an error if venue id is not defined', async () => {
      expect.assertions(1);

      await expect(getSeatAttributesBySeatId(null, null)).rejects.toEqual(new Error('getSeatAttributesBySeatId: venue id is required'));
    });

    it('should throw an error if seat id collection is not defined', async () => {
      expect.assertions(1);

      await expect(getSeatAttributesBySeatId(venueId, null)).rejects.toEqual(new Error('getSeatAttributesBySeatId: seat id collection is required'));
    });

    it('should call getSeatAttributes with valid arguments', async () => {
      await getSeatAttributesBySeatId(venueId, seatIdCollection);

      expect(getSeatsData).toBeCalledWith({
        seatIdCollection,
        venueId,
      });
    });
  });

  describe('getDetails function', () => {
    it('should throw an error if venue id is not defined', async () => {
      expect.assertions(1);

      await expect(getDetails(null)).rejects.toEqual(new Error('getDetails: venue id is required'));
    });

    it('should call venueApi.getDetails with valid arguments', async () => {
      await getDetails(venueId);

      expect(getDetailsMock).toBeCalledWith(venueId);
    });
  });

  describe('getChartDetails function', () => {
    it('should throw an error if product id is not defined', async () => {
      expect.assertions(1);

      await expect(getChartDetails(null)).rejects.toEqual(new Error('getChartDetails: product id is required'));
    });

    it('should call venueApi.getChartDetails with valid arguments', async () => {
      await getChartDetails(productId, performanceDate);

      expect(getChartDetailsMock).toBeCalledWith(productId, performanceDate);
    });
  });
});
