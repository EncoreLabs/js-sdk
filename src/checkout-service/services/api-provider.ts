import { getHttpClient } from '../../http-client-provider';
import {
  checkRequiredProperty,
  getRequestHeadersForConfirmBooking,
  getAdditionalHeaders,
} from '../../utils';
import { pathSettings } from '../constants/path-settings';
import { Environment, SourceInformation } from '../../shared/typings';
import {
  ApiBookingData,
  ApiPaymentDetails,
  ApiConfirmBooking,
  ApiConfirmBookingAgentDetails,
} from '../typings';

export const getCheckoutServiceApi = (
  environment: Environment,
  checkoutApiUrl?: string,
  { sourceName, sourceVersion }: SourceInformation = {},
) => {
  checkRequiredProperty(environment, 'getPricingServiceApi: environment');

  const baseCheckoutApiUrl = checkoutApiUrl || pathSettings[environment];
  const httpClient = getHttpClient(baseCheckoutApiUrl);
  const checkoutPath = '/checkout';
  const bookingConfirmationPath = (reference: string) => `/bookings/${reference}/confirm`;
  const additionalHeaders = getAdditionalHeaders(
    'Checkout service',
    sourceName,
    sourceVersion,
  );

  const createOrder = async (bookingData: ApiBookingData): Promise<ApiPaymentDetails> => {
    const { data } = await httpClient.post(
      checkoutPath,
      bookingData,
      {
        headers: additionalHeaders,
      },
    );

    return data;
  };

  const confirmBooking = async (
    reference: string,
    channelId: string,
    paymentId: string,
    agentDetails?: ApiConfirmBookingAgentDetails
  ): Promise<ApiConfirmBooking> => {
    const headers = {
      ...getRequestHeadersForConfirmBooking(agentDetails),
      ...additionalHeaders,
    };
    const { data } = await httpClient.post(
      bookingConfirmationPath(reference),
      { channelId, paymentId },
      { headers }
    );

    return data;
  };

  return {
    createOrder,
    confirmBooking,
  };
};
