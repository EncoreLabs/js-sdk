import { getHttpClient } from '../../http-client-provider';
import { checkRequiredProperty } from '../../utils/validator';
import { getRequestHeadersForConfirmBooking } from '../../utils/request-headers-confirm-booking';
import { pathSettings } from '../constants/path-settings';
import { Environment } from '../../shared/typings';
import {
  ApiBookingData,
  ApiPaymentDetails,
  ApiConfirmBooking,
  ApiConfirmBookingAgentDetails,
} from '../typings';

export const getCheckoutServiceApi = (environment: Environment, checkoutApiUrl?: string) => {
  checkRequiredProperty(environment, 'getPricingServiceApi: environment');

  const baseCheckoutApiUrl = checkoutApiUrl || pathSettings[environment];
  const httpClient = getHttpClient(baseCheckoutApiUrl);
  const checkoutPath = '/checkout';
  const bookingConfirmationPath = (reference: string) => `/bookings/${reference}/confirm`;

  const createOrder = async (bookingData: ApiBookingData): Promise<ApiPaymentDetails> => {
    const { data } = await httpClient.post(checkoutPath, bookingData);

    return data;
  };

  const confirmBooking = async (reference: string, channelId: string, paymentId: string, agentDetails?: ApiConfirmBookingAgentDetails): Promise<ApiConfirmBooking> => {
    const { data } = await httpClient.post(
      bookingConfirmationPath(reference), { channelId, paymentId }, getRequestHeadersForConfirmBooking(agentDetails)
    );

    return data;
  };

  return {
    createOrder,
    confirmBooking,
  };
};
