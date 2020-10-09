import { AxiosInstance } from 'axios';
import { getInventoryServiceApi } from '../api-provider';
import { getHttpClient } from '../../../http-client-provider';
import { getMockFunctionReturnValue } from '../../../utils';
import { pathSettings } from '../../constants/path-settings';
import { Environment } from '../../../shared/typings';
import { upSellProductMock } from '../../__mocks__';

const sendRequest = jest.fn().mockImplementation(async () => ({ data: {} }));

jest.mock('../../../http-client-provider', () => ({
  getHttpClient: jest.fn().mockImplementation(() => ({
    get: sendRequest,
    patch: sendRequest,
  })),
}));

let httpClient: AxiosInstance;

describe('Inventory API', () => {
  const productId = '1001';
  const affiliateId = 'encoretickets';
  const quantity = 2;
  const performanceDate = '2020-01-01';
  const performanceTime = '19:30';
  const fromDate = '20200101';
  const toDate = '20210101';
  const sourceInformation = {
    viewName: 'View name',
    sourceName: 'Source name',
    sourceVersion: 'Source version',
  };
  const inventoryApi = getInventoryServiceApi(Environment.Dev, null, sourceInformation);
  const additionalHeaders = {
    'x-ttg-client': 'Source name | View name using JS SDK',
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
    getInventoryServiceApi(Environment.Dev, testApiUrl);

    expect(getHttpClient).toBeCalledWith(testApiUrl);
  });

  describe('getPerformanceAvailability function', () => {
    it('should get product availability', async () => {
      inventoryApi.getPerformanceAvailability(affiliateId, productId, quantity, performanceDate, performanceTime);

      expect(httpClient.get).toBeCalledWith(`/products/${productId}/areas?quantity=${quantity}&date=${performanceDate}&time=${performanceTime}`, {
        headers: {
          affiliateId,
          ...additionalHeaders,
        },
      });
    });
  });

  describe('getUpsellProductByAggregateReference function', () => {
    it('should get upSell product by aggregate reference', async () => {
      const { aggregateReference, quantity: upsellQuantity, upSellIdentifier: productType } = upSellProductMock;

      inventoryApi.getUpsellProductByAggregateReference(affiliateId, aggregateReference, quantity, productType);

      expect(httpClient.get).toBeCalledWith(`/products/upsells?aggregateReference=${aggregateReference}&quantity=${upsellQuantity}&type=${productType}`, {
        headers: {
          affiliateId,
          ...additionalHeaders,
        },
      });
    });
  });

  describe('getUpsellApiProductDataById function', () => {
    it('should get upSell product by product id', async () => {
      const { quantity: upsellQuantity, upSellIdentifier: productType } = upSellProductMock;

      inventoryApi.getUpsellApiProductDataById(
        affiliateId,
        productId,
        quantity,
        productType,
        performanceDate,
        performanceTime,
      );

      expect(httpClient.get).toBeCalledWith(`/products/${productId}/upsells?quantity=${upsellQuantity}&date=${performanceDate}&time=${performanceTime}&type=${productType}`, {
        headers: {
          affiliateId,
          ...additionalHeaders,
        },
      });
    });
  });

  describe('getMaxQuantity function', () => {
    it('should get max quantity', async () => {
      inventoryApi.getMaxQuantity(productId);

      expect(httpClient.get).toBeCalledWith(`/availability/${productId}/max`, {
        headers: additionalHeaders,
      });
    });
  });

  describe('getSummaryAvailability function', () => {
    it('should get summary availability', async () => {
      inventoryApi.getSummaryAvailability(affiliateId, productId, quantity, fromDate, toDate);

      expect(httpClient.get).toBeCalledWith(`/availability/products/${productId}/quantity/${quantity}/from/${fromDate}/to/${toDate}`, {
        headers: {
          affiliateId,
          ...additionalHeaders,
        },
      });
    });
  });
});
