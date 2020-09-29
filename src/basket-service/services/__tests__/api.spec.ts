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
  const basketApi = getBasketServiceApi(Environment.Dev);
  const additionalHeaders = {
    'x-ttg-client': 'Basket service | JS SDK',
    'x-ttg-client-version': 'v1',
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

  it('should get basket', async () => {
    const reference = 'test';
    await basketApi.getBasket(reference);

    expect(httpClient.get).toBeCalledWith(
      `/baskets/${reference}`,
      {
        headers: {
          ...additionalHeaders,
        }
      }
    );
  });

  it('should get deliveriesMock', async () => {
    const reference = 'test';
    await basketApi.getDeliveries(reference);

    expect(httpClient.get).toBeCalledWith(
      `/baskets/${reference}/deliveryOptions`,
      {
        headers: {
          ...additionalHeaders,
        }
      }
    );
  });

  it('should apply delivery', async () => {
    const reference = 'test';
    const delivery = deliveriesMock[0];
    await basketApi.applyDelivery(reference, delivery);

    expect(httpClient.patch).toBeCalledWith(
      `/baskets/${reference}/applyDelivery`,
      { delivery },
      {
        headers: {
          ...additionalHeaders,
        }
      }
    );
  });

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
        headers: {
          ...additionalHeaders,
        }
      }
    );
  });


  it('should delete item', async () => {
    const aggregateReference = 'aggregateReference';
    const reservationsId = 1;
    await basketApi.deleteItem(aggregateReference, reservationsId);

    expect(httpClient.delete).toBeCalledWith(
      `/baskets/${aggregateReference}/reservations/${reservationsId}`,
      {
        headers: {
          ...additionalHeaders,
        }
      }
    );
  });
});
