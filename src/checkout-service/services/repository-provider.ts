import { getCheckoutServiceApi } from './api-provider';
import { checkRequiredProperty } from '../../utils/validator';
import { PaymentDetails } from '../models';
import { Environment } from '../../shared/typings';
import { ApiBookingData, ApiConfirmBookingAgentDetails } from '../typings';

export const getCheckoutServiceRepository = (environment: Environment, checkoutApiUrl?: string, widgetTitle?: string) => {
  checkRequiredProperty(environment, 'getPricingServiceRepository: environment');

  const checkoutServiceApi = getCheckoutServiceApi(environment, checkoutApiUrl, widgetTitle);

  const createOrder = async (bookingData: ApiBookingData) => {
    checkRequiredProperty(bookingData, 'createOrder: booking data');

    const responseBookingData =  await checkoutServiceApi.createOrder(bookingData);

    return new PaymentDetails(responseBookingData as ApiBookingData);
  };

  const confirmBooking = async (reference: string, channelId: string, paymentId: string, agentDetails?: ApiConfirmBookingAgentDetails) => {
    checkRequiredProperty(reference, 'confirmBooking: basket reference');
    checkRequiredProperty(channelId, 'confirmBooking: channel id');
    checkRequiredProperty(paymentId, 'confirmBooking: payment id');

    return await checkoutServiceApi.confirmBooking(reference, channelId, paymentId, agentDetails);
  }

  return {
    createOrder,
    confirmBooking,
  };
};
