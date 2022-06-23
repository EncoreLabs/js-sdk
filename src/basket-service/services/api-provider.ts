import { getHttpClient } from '../../http-client-provider';
import { checkRequiredProperty, getAdditionalHeaders } from '../../utils';
import { pathSettings } from '../constants/path-settings';
import { BasketData, DeliveryData, RequestBasketData } from '../typings';
import { ApiError, Environment, SourceInformation } from '../../shared/typings';
import { getRequestHeadersByChannel } from '../../utils/headers';

export const getBasketServiceApi = (
  environment: Environment,
  basketApiUrl?: string,
  sourceInformation: SourceInformation = {},
) => {
  checkRequiredProperty(environment, 'getBasketServiceApi: environment');

  const baseBasketApiUrl = basketApiUrl || pathSettings[environment];
  const httpClient = getHttpClient(baseBasketApiUrl);
  const basketsPath = '/baskets';
  const deliveriesPath = '/deliveryOptions';
  const applyDeliveryPath = '/applyDelivery';
  const reservationsPath = '/reservations';
  const additionalHeaders = getAdditionalHeaders(sourceInformation, true);

  const upsertBasket = async (basketData: RequestBasketData, returnTTId: boolean = false): Promise<BasketData | ApiError> => {
    checkRequiredProperty(basketData, 'upsertBasket: basket data');

    const {
      channelId,
      coupon,
      delivery,
      reference,
      reservations,
      shopperCurrency,
      hasFlexiTickets,
    } = basketData;

    return httpClient.patch(`${basketsPath}?returnTTId=${returnTTId}`, {
      channelId,
      coupon,
      delivery,
      reference,
      reservations,
      shopperCurrency,
      hasFlexiTickets,
    }, {
      headers: {
        ...getRequestHeadersByChannel(channelId),
        ...additionalHeaders
      },
    })
    .then((result) => {
      if (!result.data) {
        return result && result[0];
      }

      return result && result.data;
    });
  };

  const deleteItem = async (reference: string, reservationsId: number, channelId?: string): Promise<BasketData> => {
    checkRequiredProperty(reference, 'deleteItem: basket reference');
    checkRequiredProperty(reservationsId, 'deleteItem: reservation id');

    const requestUrl = `${basketsPath}/${reference}${reservationsPath}/${reservationsId}`;
    const { data } = await httpClient.delete(
      requestUrl,
      {
        headers: {
          ...getRequestHeadersByChannel(channelId),
          ...additionalHeaders
        },
      }
    );

    return data;
  };

  const getBasket = async (reference: string, channelId?: string, returnTTId: boolean = false): Promise<BasketData> => {
    checkRequiredProperty(reference, 'getBasket: basket reference');

    const requestUrl = `${basketsPath}/${reference}?returnTTId=${returnTTId}`;
    const { data } = await httpClient.get(
      requestUrl,
      {
        headers: {
          ...getRequestHeadersByChannel(channelId),
          ...additionalHeaders
        },
      }
    );

    return data;
  };

  const getDeliveries = async (reference: string, channelId?: string): Promise<DeliveryData[]> => {
    checkRequiredProperty(reference, 'getDeliveries: basket reference');

    const requestUrl = `${basketsPath}/${reference}${deliveriesPath}`;
    const { data } = await httpClient.get(
      requestUrl,
      {
        headers: {
          ...getRequestHeadersByChannel(channelId),
          ...additionalHeaders
        },
      },
    );

    return data.results;
  };

  const applyDelivery = async (
    reference: string,
    delivery: DeliveryData,
    channelId?: string
  ): Promise<BasketData> => {
    checkRequiredProperty(reference, 'applyDelivery: basket reference');
    checkRequiredProperty(delivery, 'applyDelivery: delivery data');

    const requestUrl = `${basketsPath}/${reference}${applyDeliveryPath}`;
    const { data } = await httpClient.patch(
      requestUrl,
      { delivery },
      {
        headers: {
          ...getRequestHeadersByChannel(channelId),
          ...additionalHeaders
        },
      },
    );

    return data;
  };

  const clearBasket = async (reference: string, channelId?: string): Promise<BasketData> => {
    checkRequiredProperty(reference, 'clearBasket: basket reference');

    const requestUrl = `${basketsPath}/${reference}/clear`;
    const { data } = await httpClient.patch(
      requestUrl,
      {},
      {
        headers: {
          ...getRequestHeadersByChannel(channelId),
          ...additionalHeaders
        },
      }
    );

    return data;
  };

  return {
    upsertBasket,
    getBasket,
    getDeliveries,
    applyDelivery,
    deleteItem,
    clearBasket,
  };
};
