import { getCheckoutServiceRepository } from '../repository-provider';
import { getCheckoutServiceApi } from '../api-provider';
import { PaymentDetails } from '../../models';
import { Environment } from '../../../shared/typings';
import { bookingDataMock, paymentDataMock } from '../../__mocks__';

const createOrderData = jest.fn().mockImplementation(() => paymentDataMock);
const confirmBookingData = jest.fn().mockImplementation(() => paymentDataMock);

jest.mock('../api-provider', () => ({
  getCheckoutServiceApi: jest.fn().mockImplementation(() => ({
    createOrder: createOrderData,
    confirmBooking: confirmBookingData,
  })),
}));
jest.mock('../../models/payment-details');

describe('Checkout repository', () => {
  const environment = Environment.Dev;
  const sourceInformation = {
    sourceName: 'Source name',
    sourceVersion: 'Source version',
  };
  const checkoutApiUrl = 'https://checkout-service.qatixuk.io/api/v1'

  const { createOrder, confirmBooking } = getCheckoutServiceRepository(environment);

  it('should create api for specific environment', () => {
    expect(getCheckoutServiceApi).toBeCalledWith(environment, undefined, {});

    getCheckoutServiceRepository(environment, checkoutApiUrl, sourceInformation);

    expect(getCheckoutServiceApi).toBeCalledWith(environment, checkoutApiUrl, sourceInformation);

  });

  describe('createOrder function', () => {
    it('should return order details', async () => {
      await createOrder(bookingDataMock);

      expect(createOrderData).toBeCalledWith(bookingDataMock, undefined);
      expect(PaymentDetails).toBeCalledWith(paymentDataMock);
    });

    it('should throw an error if booking data is not defined', async () => {
      expect.assertions(1);

      await expect(createOrder(null)).rejects.toEqual(new Error('createOrder: booking data is required'));
    });
  });

  describe('confirmBooking function', () => {
    const reference = bookingDataMock.reference;
    const channelId = bookingDataMock.channelId;
    const paymentId = '123459876';
    const agentDetails = {
      agentId: 'agentId',
      agentPassword: 'agentPassword',
    }

    it('should call confirm booking request with proper props (without agentDetails)', async () => {
      await confirmBooking(reference, channelId, paymentId);

      expect(confirmBookingData).toBeCalledWith(reference, channelId, paymentId, undefined);
    });

    it('should call confirm booking request with proper props (with agentDetails)', async () => {
      await confirmBooking(reference, channelId, paymentId, agentDetails);

      expect(confirmBookingData).toBeCalledWith(reference, channelId, paymentId, agentDetails);
    });

    it('should throw an error if booking data is not defined', async () => {
      expect.assertions(3);

      await expect(confirmBooking(null, channelId, paymentId))
        .rejects.toEqual(new Error('confirmBooking: basket reference is required'));
      await expect(confirmBooking(reference, null, paymentId))
        .rejects.toEqual(new Error('confirmBooking: channel id is required'));
      await expect(confirmBooking(reference, channelId, null))
        .rejects.toEqual(new Error('confirmBooking: payment id is required'));
    });
  });
});
