import {AxiosInstance} from 'axios';
import { getBasketServiceApi } from '../api-provider';
import { getHttpClient } from '../../../http-client-provider';
import { getMockFunctionReturnValue } from '../../../utils';
import { pathSettings } from '../../constants/path-settings';
import { Environment } from '../../../shared/typings';
import { basketDataMock, deliveriesMock } from '../../__mocks__';

const sendRequest = jest.fn().mockImplementation(async () => ({ data: {} }));

jest.mock('../../../http-client-provider', () => ({
  getHttpClient: jest.fn().mockImplementation(() => ({
    get: sendRequest,
    patch: sendRequest,
    delete: sendRequest,
  })),
}));

let httpClient: AxiosInstance;

describe('Basket API', () => {
  const sourceInformation = {
    sourceName: 'Source name',
    sourceVersion: 'Source version',
  };
  const basketApi = getBasketServiceApi(Environment.Dev, null, sourceInformation);
  const additionalHeaders = {
    'x-ttg-client': 'Basket service | Source name using JS SDK',
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
    getBasketServiceApi(Environment.Dev, testApiUrl);

    expect(getHttpClient).toBeCalledWith(testApiUrl);
  });

  describe('getBasket function', () => {
    it('should get basket', async () => {
      const reference = 'test';
      await basketApi.getBasket(reference);

      expect(httpClient.get).toBeCalledWith(
        `/baskets/${reference}`,
        {
          headers: additionalHeaders,
        },
      );
    });
  });

  describe('getDeliveries function', () => {
    it('should get deliveriesMock', async () => {
      const reference = 'test';
      await basketApi.getDeliveries(reference);

      expect(httpClient.get).toBeCalledWith(
        `/baskets/${reference}/deliveryOptions`,
        {
          headers: additionalHeaders,
        },
      );
    });
  });

  describe('applyDelivery function', () => {
    it('should apply delivery', async () => {
      const reference = 'test';
      const delivery = deliveriesMock[0];
      await basketApi.applyDelivery(reference, delivery);

      expect(httpClient.patch).toBeCalledWith(
        `/baskets/${reference}/applyDelivery`,
        { delivery },
        {
          headers: additionalHeaders,
        },
      );
    });
  });

  describe('upsertBasket function', () => {
    it('should upsert basket', async () => {
      const {
        channelId,
        coupon,
        delivery,
        reference,
        reservations,
        shopperCurrency,
      } = basketDataMock;

      await basketApi.upsertBasket(basketDataMock);

      expect(httpClient.patch).toBeCalledWith(
        '/baskets',
        {
          channelId,
          coupon,
          delivery,
          reference,
          reservations,
          shopperCurrency,
        },
        {
          headers: additionalHeaders,
        },
      );
    });

    it('should return basket API response if data not set', async () => {
      (httpClient.patch as jest.Mock).mockImplementationOnce(() => Promise.resolve([{}]));

      const result = await basketApi.upsertBasket(basketDataMock);

      expect(result).toEqual({});
    });
  });

  describe('deleteItem function', () => {
    it('should delete item', async () => {
      const reference = 'reference';
      const reservationsId = 1;
      await basketApi.deleteItem(reference, reservationsId);

      expect(httpClient.delete).toBeCalledWith(
        `/baskets/${reference}/reservations/${reservationsId}`,
        {
          headers: additionalHeaders,
        },
      );
    });
  });
});
