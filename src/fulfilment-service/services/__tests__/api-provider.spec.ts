import { AxiosInstance } from 'axios';
import { getFulfilmentServiceApi } from '../api-provider';
import { getHttpClient } from '../../../http-client-provider';
import { getMockFunctionReturnValue } from '../../../utils';
import { pathSettings } from '../../constants/path-settings';
import { Environment } from '../../../shared/typings';
import { deliveryOptions, fulfilmentBasketItem } from '../../__mocks__';

const sendRequest = jest.fn().mockImplementation(async () => ({ data: deliveryOptions }));

jest.mock('../../../http-client-provider', () => ({
  getHttpClient: jest.fn().mockImplementation(() => ({
    post: sendRequest,
  })),
}));

let httpClient: AxiosInstance;

const channelId = 'channelId';
const countryCode = 'countryCode';

describe('Fulfilment Api', () => {
  const fulfilmentApi = getFulfilmentServiceApi(Environment.Dev);

  beforeEach(() => {
    httpClient = getMockFunctionReturnValue(getHttpClient);
  });

  it('should create http client', () => {
    expect(getHttpClient).toBeCalledWith(pathSettings[Environment.Dev]);
  });

  it('should create http client with custom api url', () => {
    const testApiUrl = 'test.api';
    getFulfilmentServiceApi(Environment.Dev, testApiUrl);

    expect(getHttpClient).toBeCalledWith(testApiUrl);
  });

  it('should call delivery options request with proper props', async () => {
    fulfilmentApi.getDeliveryOptions(channelId, countryCode, [fulfilmentBasketItem]);

    expect(httpClient.post).toBeCalledWith('/basket/pricedDeliveryOptions', {
      channelId,
      deliveryCountryCode: countryCode,
      items: [fulfilmentBasketItem],
    });
  });

  it('should return delivery options', async () => {
    const deliveries = await fulfilmentApi.getDeliveryOptions(channelId, countryCode, [fulfilmentBasketItem]);

    expect(deliveries).toEqual(deliveryOptions);
  });
});
