import {AxiosInstance} from 'axios';
import { getPricingServiceApi } from '../api-provider';
import { getHttpClient } from '../../../http-client-provider';
import { getMockFunctionReturnValue } from '../../../utils';
import { pathSettings } from '../../constants/path-settings';
import { priceEndpointHeaders } from '../../constants/request-settings';
import { Environment } from '../../../shared/typings';

const sendRequest = jest.fn().mockImplementation(async () => ({ data: {} }));

jest.mock('../../../http-client-provider', () => ({
  getHttpClient: jest.fn().mockImplementation(() => ({
    get: sendRequest,
    patch: sendRequest,
  })),
}));

let httpClient: AxiosInstance;

describe('Pricing API', () => {
  const sourceInformation = {
    viewName: 'View name',
    sourceName: 'Source name',
    sourceVersion: 'Source version',
  };
  const pricingApi = getPricingServiceApi(Environment.Dev, null, sourceInformation);
  const additionalHeaders = {
    'x-ttg-client': 'Source name | View name using JS SDK',
    'x-ttg-client-version': 'Source version',
  };
  const productId = '1001';

  beforeEach(() => {
    httpClient = getMockFunctionReturnValue(getHttpClient);
  });

  it('should create http client', () => {
    expect(getHttpClient).toBeCalledWith(pathSettings[Environment.Dev]);
  });

  it('should create http client with custom api url', () => {
    const testApiUrl = 'test.api';
    getPricingServiceApi(Environment.Dev, testApiUrl);

    expect(getHttpClient).toBeCalledWith(testApiUrl);
  });

  it('should get price', async () => {
    const requestUrl = `/products/${productId}/performances/from-price/quantity/1`;

    await pricingApi.getFromPrices(productId);

    expect(httpClient.get).toBeCalledWith(
      requestUrl,
      {
        headers: {
          ...priceEndpointHeaders,
          ...additionalHeaders,
        },
      },
    );
  });
});
