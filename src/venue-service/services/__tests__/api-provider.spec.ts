import { getVenueServiceApi } from '../api-provider';
import { getHttpClient } from '../../../http-client-provider';
import { pathSettings } from '../../constants/path-settings';
import { Environment } from '../../../shared/typings';

const sendRequest = jest.fn().mockImplementation(async () => ({ data: {} }));

jest.mock('../../../http-client-provider', () => ({
  getHttpClient: jest.fn().mockImplementation(() => ({ get: sendRequest })),
}));

describe('Venue API', () => {
  const sourceInformation = {
    viewName: 'View name',
    sourceName: 'Source name',
    sourceVersion: 'Source version',
  };
  const venueApi = getVenueServiceApi(Environment.Dev, null, sourceInformation);
  const additionalHeaders = {
    'x-ttg-client': 'Source name | View name using JS SDK',
    'x-ttg-client-version': 'Source version',
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create http client', () => {
    expect(getHttpClient).toBeCalledWith(pathSettings[Environment.Dev]);
  });

  it('should create http client with custom api url', () => {
    const testApiUrl = 'test.api';
    getVenueServiceApi(Environment.Dev, testApiUrl);

    expect(getHttpClient).toBeCalledWith(testApiUrl);
  });

  describe('getSeatAttributes method', () => {
    it('should get seat attributes', async () => {
      const venueId = 'test';
      venueApi.getSeatAttributes({ venueId });

      expect(sendRequest).toBeCalledWith(
        `/venues/${venueId}/seats/attributes`,
        {
          headers: additionalHeaders,
        }
      );
    });

    it('should call httpClient.get with performanceDate if provided', async () => {
      const venueId = 'test';
      const performanceDate = 'performanceDate';
      venueApi.getSeatAttributes({ venueId, performanceDate } );

      expect(sendRequest).toBeCalledWith(
        `/venues/${venueId}/seats/attributes?date=${performanceDate}`,
        {
          headers: additionalHeaders,
        }
      );
    });

    it('should call httpClient.get with performanceTime if provided', async () => {
      const venueId = 'test';
      const performanceTime = 'performanceTime';
      venueApi.getSeatAttributes({ venueId, performanceTime } );

      expect(sendRequest).toBeCalledWith(
        `/venues/${venueId}/seats/attributes?&time=${performanceTime}`,
        {
          headers: additionalHeaders,
        }
      );
    });

    it('should call httpClient.get with performanceDate and performanceTime if provided', async () => {
      const venueId = 'test';
      const performanceTime = 'performanceTime';
      const performanceDate = 'performanceDate';
      venueApi.getSeatAttributes({ venueId, performanceTime, performanceDate } );

      expect(sendRequest).toBeCalledWith(
        `/venues/${venueId}/seats/attributes?date=${performanceDate}&time=${performanceTime}`,
        {
          headers: additionalHeaders,
        }
      );
    });

    it('should call httpClient.get with seatIdCollection if provided', async () => {
      const venueId = 'test';
      const performanceTime = 'performanceTime';
      const performanceDate = 'performanceDate';
      const seatIdCollection = ['Seat-1', 'Seat-2'];
      venueApi.getSeatAttributes({ venueId, performanceTime, performanceDate, seatIdCollection } );

      expect(sendRequest).toBeCalledWith(
        `/venues/test/seats/attributes?date=performanceDate&time=performanceTime&seatIds[]=Seat-1&seatIds[]=Seat-2`,
        {
          headers: additionalHeaders,
        }
      );
    });
  });

  describe('getDetails method', () => {
    it('should call httpClient.get with venueId', () => {
      const venueId = 'test';
      venueApi.getDetails(venueId);

      expect(sendRequest).toBeCalledWith(
        `/venues/test`,
        {
          headers: additionalHeaders,
        }
      );
    });
  });

  describe('getChartDetails method', () => {
    it('should call httpClient.get with productId', () => {
      const productId = 'productId';
      venueApi.getChartDetails(productId);

      expect(sendRequest).toBeCalledWith(
        `/products/${productId}`,
        {
          headers: additionalHeaders,
        }
      );
    });

    it('should call httpClient.get with productId and date if provided', () => {
      const productId = 'productId';
      const date = 'date';
      venueApi.getChartDetails(productId, date);

      expect(sendRequest).toBeCalledWith(
        `/products/productId?date=${date}`,
        {
          headers: additionalHeaders,
        }
      );
    });
  });
});
