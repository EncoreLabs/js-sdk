import { getHttpClient } from '../../http-client-provider';
import { checkRequiredProperty, getAdditionalHeaders } from '../../utils';
import { pathSettings } from '../constants/path-settings';
import { Environment, FulfilmentBasketItem, SourceInformation } from '../../shared/typings';

export const getFulfilmentServiceApi = (
  environment: Environment,
  fulfilmentApiUrl?: string,
  { sourceName, sourceVersion }: SourceInformation = {},
) => {
  checkRequiredProperty(environment, 'getFulfilmentServiceApi: environment');

  const baseFulfilmentApiUrl = fulfilmentApiUrl || pathSettings[environment];
  const httpClient = getHttpClient(baseFulfilmentApiUrl);
  const additionalHeaders = getAdditionalHeaders(
    'Fulfilment service',
    sourceName,
    sourceVersion,
  );

  const getDeliveryOptions = async (channelId: string, countryCode: string, basketItems: FulfilmentBasketItem[]) => {
    const requestUrl = '/basket/pricedDeliveryOptions';
    const body = {
      channelId,
      items: basketItems,
      deliveryCountryCode: countryCode,
    };

    const { data } = await httpClient.post(
      requestUrl,
      body,
      {
        headers: additionalHeaders,
      },
    );

    return data;
  };

  return {
    getDeliveryOptions,
  };
};
