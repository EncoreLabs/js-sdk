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
import { getRequestHeadersByChannel } from '../../utils/headers';

export const getCheckoutServiceApi = (
  environment: Environment,
  checkoutApiUrl?: string,
  sourceInformation: SourceInformation = {},
) => {
  checkRequiredProperty(environment, 'getPricingServiceApi: environment');

  const baseCheckoutApiUrl = checkoutApiUrl || pathSettings[environment];
  const httpClient = getHttpClient(baseCheckoutApiUrl);
  const checkoutPath = '/checkout';
  const bookingConfirmationPath = (reference: string) => `/bookings/${reference}/confirm`;
  const additionalHeaders = getAdditionalHeaders(sourceInformation);

  const createOrder = async (bookingData: ApiBookingData, channelId?: string): Promise<ApiPaymentDetails> => {
    const { data } = await httpClient.post(
      checkoutPath,
      bookingData,
      {
        headers: {
          ...getRequestHeadersByChannel(channelId),
          ...additionalHeaders,
        },
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
      ...getRequestHeadersByChannel(channelId),
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
