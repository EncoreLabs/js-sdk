import { getFulfilmentServiceApi } from './api-provider';
import { checkRequiredProperty } from '../../utils/validator';
import { Environment, FulfilmentBasketItem } from '../../shared/typings';

export const getFulfilmentServiceRepository = (environment: Environment, fulfilmentApiUrl?: string) => {
  checkRequiredProperty(environment, 'getFulfilmentServiceRepository: environment');

  const fulfilmentServiceApi = getFulfilmentServiceApi(environment, fulfilmentApiUrl);

  const getDeliveryOptions = async (
    channelId: string,
    countryCode: string,
    basketItems: FulfilmentBasketItem[],
  ) => {
    checkRequiredProperty(channelId, 'getDeliveryOptions: channel id');
    checkRequiredProperty(countryCode, 'getDeliveryOptions: country code');
    checkRequiredProperty(basketItems, 'getDeliveryOptions: basket items');

    return await fulfilmentServiceApi.getDeliveryOptions(channelId, countryCode, basketItems);
  };

  return {
    _unstable_: {
      getDeliveryOptions,
    },
  };
};
