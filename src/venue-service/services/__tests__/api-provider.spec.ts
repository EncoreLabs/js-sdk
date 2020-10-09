import {AxiosInstance} from 'axios';
import { getVenueServiceApi } from '../api-provider';
import { getHttpClient } from '../../../http-client-provider';
import { getMockFunctionReturnValue } from '../../../utils';
import { pathSettings } from '../../constants/path-settings';
import { Environment } from '../../../shared/typings';

const sendRequest = jest.fn().mockImplementation(async () => ({ data: {} }));

jest.mock('../../../http-client-provider', () => ({
  getHttpClient: jest.fn().mockImplementation(() => ({ get: sendRequest })),
}));

let httpClient: AxiosInstance;

describe('Venue API', () => {
  const sourceInformation = {
    serviceName: 'Service name',
    sourceName: 'Source name',
    sourceVersion: 'Source version',
  };
  const venueApi = getVenueServiceApi(Environment.Dev, null, sourceInformation);
  const additionalHeaders = {
    'x-ttg-client': 'Service name | Source name using JS SDK',
    'x-ttg-client-version': 'Source version',
  };

  beforeEach(() => {
    httpClient = getMockFunctionReturnValue(getHttpClient);
  });

  it('should create http client', () => {
    expect(getHttpClient).toBeCalledWith(pathSettings[Environment.Dev]);
  });

  it('should create http client with custom api url', () => {
    const testApiUrl = 'test.api';
    getVenueServiceApi(Environment.Dev, testApiUrl);

    expect(getHttpClient).toBeCalledWith(testApiUrl);
  });

  it('should get seat attributes', async () => {
    const venueId = 'test';
    venueApi.getSeatAttributes(venueId);

    expect(httpClient.get).toBeCalledWith(
      `/venues/${venueId}/seats/attributes`,
      {
        headers: additionalHeaders,
      },
    );
  });
});
