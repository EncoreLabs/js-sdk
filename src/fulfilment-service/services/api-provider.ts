import { getHttpClient } from '../../http-client-provider';
import { checkRequiredProperty } from '../../utils/validator';
import { pathSettings } from '../constants/path-settings';
import { Environment, FulfilmentBasketItem } from '../../shared/typings';

export const getFulfilmentServiceApi = (environment: Environment, fulfilmentApiUrl?: string) => {
  checkRequiredProperty(environment, 'getFulfilmentServiceApi: environment');

  const baseFulfilmentApiUrl = fulfilmentApiUrl || pathSettings[environment];
  const httpClient = getHttpClient(baseFulfilmentApiUrl);

  const getDeliveryOptions = async (channelId: string, countryCode: string, basketItems: FulfilmentBasketItem[]) => {
    const requestUrl = '/basket/pricedDeliveryOptions';
    const body = {
      channelId,
      items: basketItems,
      deliveryCountryCode: countryCode,
    };

    const { data } = await httpClient.post(requestUrl, body);

    return data;
  };

  return {
    getDeliveryOptions,
  };
};
