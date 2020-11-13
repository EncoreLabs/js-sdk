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
    viewName: 'View name',
    sourceName: 'Source name',
    sourceVersion: 'Source version',
  };
  const basketApi = getBasketServiceApi(Environment.Dev, null, sourceInformation);
  const testChannelId = 'test-qa-encoretickets';
  const additionalHeaders = {
    'x-ttg-client': 'Source name | View name using JS SDK',
    'x-ttg-client-version': 'Source version',
  };
  const headersWithAffiliate = {
    ...{ affiliateId: 'encoretickets' },
    ...additionalHeaders,
  }

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

    it('should get basket with affiliateId header', async () => {
      const reference = 'test';
      await basketApi.getBasket(reference, testChannelId);

      expect(httpClient.get).toBeCalledWith(
        `/baskets/${reference}`,
        {
          headers: headersWithAffiliate,
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

    it('should get deliveriesMock with affiliateId header', async () => {
      const reference = 'test';
      await basketApi.getDeliveries(reference, testChannelId);

      expect(httpClient.get).toBeCalledWith(
        `/baskets/${reference}/deliveryOptions`,
        {
          headers: headersWithAffiliate,
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

    it('should apply delivery with affiliateId header', async () => {
      const reference = 'test';
      const delivery = deliveriesMock[0];
      await basketApi.applyDelivery(reference, delivery, testChannelId);

      expect(httpClient.patch).toBeCalledWith(
        `/baskets/${reference}/applyDelivery`,
        { delivery },
        {
          headers: headersWithAffiliate,
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
          headers: headersWithAffiliate,
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

    it('should delete item with affiliateId header', async () => {
      const reference = 'reference';
      const reservationsId = 1;
      await basketApi.deleteItem(reference, reservationsId, testChannelId);

      expect(httpClient.delete).toBeCalledWith(
        `/baskets/${reference}/reservations/${reservationsId}`,
        {
          headers: headersWithAffiliate,
        },
      );
    });
  });

  describe('clearBasket function', () => {
    it('should clear basket', async () => {
      const reference = 'reference';
      await basketApi.clearBasket(reference);

      expect(httpClient.delete).toBeCalledWith(
        `/baskets/${reference}/clear`,
        {
          headers: additionalHeaders,
        },
      );
    });

    it('should clear basket with affiliateId header', async () => {
      const reference = 'reference';
      await basketApi.clearBasket(reference, testChannelId);

      expect(httpClient.delete).toBeCalledWith(
        `/baskets/${reference}/clear`,
        {
          headers: headersWithAffiliate,
        },
      );
    });
  });
});
