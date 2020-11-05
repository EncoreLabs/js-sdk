import { getCheckoutServiceApi } from './api-provider';
import { checkRequiredProperty } from '../../utils/validator';
import { PaymentDetails } from '../models';
import { Environment, SourceInformation } from '../../shared/typings';
import { ApiBookingData, ApiConfirmBookingAgentDetails } from '../typings';

export const getCheckoutServiceRepository = (
  environment: Environment,
  checkoutApiUrl?: string,
  sourceInformation: SourceInformation = {},
) => {
  checkRequiredProperty(environment, 'getPricingServiceRepository: environment');

  const checkoutServiceApi = getCheckoutServiceApi(environment, checkoutApiUrl, sourceInformation);

  const createOrder = async (bookingData: ApiBookingData, channelId?: string) => {
    checkRequiredProperty(bookingData, 'createOrder: booking data');

    const responseBookingData =  await checkoutServiceApi.createOrder(bookingData, channelId);

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
