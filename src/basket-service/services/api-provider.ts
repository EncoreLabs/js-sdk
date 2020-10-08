import { getHttpClient } from '../../http-client-provider';
import { checkRequiredProperty, getAdditionalHeaders } from '../../utils';
import { pathSettings } from '../constants/path-settings';
import { BasketData, DeliveryData, RequestBasketData } from '../typings';
import { Environment, ApiError } from '../../shared/typings';

export const getBasketServiceApi = (environment: Environment, basketApiUrl?: string, widgetTitle?: string) => {
  checkRequiredProperty(environment, 'getBasketServiceApi: environment');

  const baseBasketApiUrl = basketApiUrl || pathSettings[environment];
  const httpClient = getHttpClient(baseBasketApiUrl);
  const basketsPath = '/baskets';
  const deliveriesPath = '/deliveryOptions';
  const applyDeliveryPath = '/applyDelivery';
  const reservationsPath = '/reservations';
  const additionalHeaders = getAdditionalHeaders(
    'Basket service',
    'v1',
    basketApiUrl,
    widgetTitle,
  );

  const upsertBasket = async (basketData: RequestBasketData): Promise<BasketData | ApiError> => {
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

    return httpClient.patch(basketsPath, {
      channelId,
      coupon,
      delivery,
      reference,
      reservations,
      shopperCurrency,
      hasFlexiTickets,
    }, {
      headers: {
        ...additionalHeaders,
      },
    })
    .then((result) => {
      if (!result.data) {
        return result && result[0];
      }

      return result && result.data;
    });
  };

  const deleteItem = async (reference: string, reservationsId: number): Promise<BasketData> => {
    checkRequiredProperty(reference, 'deleteItem: basket reference');
    checkRequiredProperty(reservationsId, 'deleteItem: reservation id');

    const requestUrl = `${basketsPath}/${reference}${reservationsPath}/${reservationsId}`;
    const { data } = await httpClient.delete(
      requestUrl,
      {
        headers: {
          ...additionalHeaders,
        },
      },
    );

    return data;
  };

  const getBasket = async (reference: string): Promise<BasketData> => {
    checkRequiredProperty(reference, 'getBasket: basket reference');

    const requestUrl = `${basketsPath}/${reference}`;
    const { data } = await httpClient.get(
      requestUrl,
      {
        headers: {
          ...additionalHeaders,
        },
      },
    );

    return data;
  };

  const getDeliveries = async (reference: string): Promise<DeliveryData[]> => {
    checkRequiredProperty(reference, 'getDeliveries: basket reference');

    const requestUrl = `${basketsPath}/${reference}${deliveriesPath}`;
    const { data } = await httpClient.get(
      requestUrl,
      {
        headers: {
          ...additionalHeaders,
        },
      },
    );

    return data.results;
  };

  const applyDelivery = async (reference: string, delivery: DeliveryData): Promise<BasketData> => {
    checkRequiredProperty(reference, 'applyDelivery: basket reference');
    checkRequiredProperty(delivery, 'applyDelivery: delivery data');

    const requestUrl = `${basketsPath}/${reference}${applyDeliveryPath}`;
    const { data } = await httpClient.patch(
      requestUrl,
      { delivery },
      {
        headers: {
          ...additionalHeaders,
        },
      },
    );

    return data;
  };

  return {
    upsertBasket,
    getBasket,
    getDeliveries,
    applyDelivery,
    deleteItem,
  };
};
