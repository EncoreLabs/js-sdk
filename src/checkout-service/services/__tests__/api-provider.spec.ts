import { AxiosInstance } from 'axios';
import { getCheckoutServiceApi } from '../../services';
import { getMockFunctionReturnValue } from '../../../utils';
import { getHttpClient } from '../../../http-client-provider';
import { pathSettings } from '../../constants/path-settings';
import { Environment } from '../../../shared/typings';
import { bookingDataMock } from '../../__mocks__';

const sendRequest = jest.fn().mockImplementation(async () => ({ data: bookingDataMock }));

jest.mock('../../../http-client-provider', () => ({
  getHttpClient: jest.fn().mockImplementation(() => ({
    post: sendRequest,
  })),
}));

let httpClient: AxiosInstance;

describe('Checkout Api', () => {
  const sourceInformation = {
    sourceName: 'Source name',
    sourceVersion: 'Source version',
  };
  const checkoutApi = getCheckoutServiceApi(Environment.Dev, null, sourceInformation);
  const additionalHeaders = {
    'x-ttg-client': 'Checkout service | Source name using JS SDK',
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
    getCheckoutServiceApi(Environment.Dev, testApiUrl);

    expect(getHttpClient).toBeCalledWith(testApiUrl);
  });

  it('should call booking request with proper props', async () => {
    await checkoutApi.createOrder(bookingDataMock);

    expect(httpClient.post).toBeCalledWith(
      '/checkout',
      bookingDataMock,
      {
        headers: additionalHeaders,
      },
    );
  });

  it('should call confirm booking request with proper props', async () => {
    const reference = bookingDataMock.reference;
    const channelId = bookingDataMock.channelId;
    const paymentId = '123459876';
    const requestUrl = `/bookings/${reference}/confirm`;

    await checkoutApi.confirmBooking(reference, channelId, paymentId);

    expect(httpClient.post).toBeCalledWith(
      requestUrl,
      { channelId, paymentId },
      {
        headers: {
          ...additionalHeaders,
        },
      },
    );
  });
});

