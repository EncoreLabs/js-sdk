import { getVenueServiceRepository } from '../repository-provider';
import { getVenueServiceApi } from '../api-provider';
import { Environment } from '../../../shared/typings'
import { chartInfoMock, seatAttributesMock, venueDetailsMock, venueChartMock } from '../../__mocks__';

const getSeatsData = jest.fn().mockImplementation(() => Promise.resolve(seatAttributesMock));
const getDetailsMock = jest.fn().mockImplementation(() => Promise.resolve(venueDetailsMock));
const getVenueChartByKeyMock = jest.fn().mockImplementation(() => Promise.resolve(venueChartMock));
const getChartDetailsMock = jest.fn().mockImplementation(() => Promise.resolve(chartInfoMock));

jest.mock('../api-provider', () => ({
  getVenueServiceApi: jest.fn().mockImplementation(() => ({
    getDetails: getDetailsMock,
    getChartDetails: getChartDetailsMock,
    getSeatAttributes: getSeatsData,
    getVenueChartByKey: getVenueChartByKeyMock,
  })),
}));

describe('Venue repository', () => {
  const venueId = '199';
  const productId = '1001';
  const performanceDate = 'performanceDate';
  const performanceTime = 'performanceTime';
  const seatIdCollection = ['Seat-1', 'Seat-2'];
  const environment = Environment.Dev;
  const sourceInformation = {
    sourceName: 'Source name',
    sourceVersion: 'Source version',
  };
  const venueApiUrl = 'https://venue-service.qatixuk.io/api/v2';
  const {
    getSeatAttributes,
    getSeatAttributesBySeatIds,
    getDetails,
    getChartDetails,
    getVenueChartByKey
  } = getVenueServiceRepository(environment);

  it('should create api for specific environment', () => {
    expect(getVenueServiceApi).toBeCalledWith(environment, undefined, {});

    getVenueServiceRepository(environment, venueApiUrl, sourceInformation);

    expect(getVenueServiceApi).toBeCalledWith(environment, venueApiUrl, sourceInformation);
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

  describe('getSeatAttributesBySeatIds function', () => {
    it('should throw an error if venue id is not defined', async () => {
      expect.assertions(1);

      await expect(getSeatAttributesBySeatIds(null, null, null, null)).rejects.toEqual(new Error('getSeatAttributesBySeatIds: venue id is required'));
    });

    it('should throw an error if seat id collection is not defined', async () => {
      expect.assertions(1);

      await expect(getSeatAttributesBySeatIds(venueId, null, null, null)).rejects.toEqual(new Error('getSeatAttributesBySeatIds: seat id collection is required'));
    });

    it('should throw an error if the performance date is not defined', async () => {
      expect.assertions(1);

      await expect(getSeatAttributesBySeatIds(venueId, seatIdCollection, null, null)).rejects.toEqual(new Error('getSeatAttributesBySeatIds: performance date is required'));
    });

    it('should throw an error if the performance time is not defined', async () => {
      expect.assertions(1);

      await expect(getSeatAttributesBySeatIds(venueId, seatIdCollection, performanceDate, null)).rejects.toEqual(new Error('getSeatAttributesBySeatIds: performance time is required'));
    });

    it('should call getSeatAttributes with valid arguments', async () => {
      await getSeatAttributesBySeatIds(venueId, seatIdCollection, performanceDate, performanceTime);

      expect(getSeatsData).toBeCalledWith({
        seatIdCollection,
        venueId,
        performanceDate,
        performanceTime
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

  describe('getVenueChartByKey function', () => {
    it('should throw an error if venue chart key is not defined', async () => {
      expect.assertions(1);

      await expect(getVenueChartByKey(null)).rejects.toEqual(new Error('getVenueChartByKeyFromV3: venue chart key is required'));
    });

    it('should call venueApi.getVenueChartByKey with valid arguments', async () => {
      const venueChartKey = '111-222-333'
      await getVenueChartByKey(venueChartKey);

      expect(getVenueChartByKeyMock).toBeCalledWith(venueChartKey);
    });
  });
});
