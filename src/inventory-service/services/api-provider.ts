import { getHttpClient } from '../../http-client-provider';
import { checkRequiredProperty, getAdditionalHeaders } from '../../utils/';
import { pathSettings } from '../constants/path-settings';
import { Environment, SourceInformation } from '../../shared/typings';
import { ApiMaxNumberOfTickets } from '../typings';

export const getInventoryServiceApi = (
  environment: Environment,
  inventoryApiUrl?: string,
  { sourceName, sourceVersion }: SourceInformation = {},
) => {
  checkRequiredProperty(environment, 'getInventoryServiceApi: environment');

  const baseInventoryApiUrl = inventoryApiUrl || pathSettings[environment];
  const httpClient = getHttpClient(baseInventoryApiUrl);
  const productsPath = '/products';
  const upsellPath = '/upsells';
  const availabilityPath = '/availability';
  const additionalHeaders = getAdditionalHeaders(
    'Inventory service',
    sourceName,
    sourceVersion,
  );

  const getPerformanceAvailability = async (
    affiliateId: string,
    productId: string,
    quantity: number,
    date: string,
    time: string
  ) => {
    const requestUrl = `${productsPath}/${productId}/areas?quantity=${quantity}&date=${date}&time=${time}`;
    const { data } = await httpClient.get(
      requestUrl,
      {
        headers: {
          affiliateId,
          ...additionalHeaders,
        },
      },
    );

    return data;
  };

  const getUpsellProductByAggregateReference = async (
    affiliateId: string,
    aggregateReference: string,
    quantity: number,
    productType: string,
  ) => {
    const requestUrl = `${productsPath}${upsellPath}?aggregateReference=${aggregateReference}&quantity=${quantity}&type=${productType}`;
    const { data } = await httpClient.get(
      requestUrl,
      {
        headers: {
          affiliateId,
          ...additionalHeaders,
        },
      },
    );

    return data;
  };

  const getUpsellApiProductDataById = async (
    affiliateId: string,
    productId: string,
    quantity: number,
    productType: string,
    performanceDate: string,
    performanceTime: string,
  ) => {
    const requestUrl = `${productsPath}/${productId}${upsellPath}?quantity=${quantity}&date=${performanceDate}&time=${performanceTime}&type=${productType}`;
    const { data } = await httpClient.get(
      requestUrl,
      {
        headers: {
          affiliateId,
          ...additionalHeaders,
        },
      },
    );

    return data;
  };

  const getMaxQuantity = async (productId: string): Promise<ApiMaxNumberOfTickets> => {
    const requestUrl = `${availabilityPath}/${productId}/max`;
    const { data } = await httpClient.get(
      requestUrl,
      {
        headers: additionalHeaders,
      },
    );

    return data;
  };

  const getSummaryAvailability = async (
    affiliateId: string,
    productId: string,
    quantity:  number,
    fromDate: string,
    toDate: string,
  ) => {
    const requestUrl = `${availabilityPath}${productsPath}/${productId}/quantity/${quantity}/from/${fromDate}/to/${toDate}`;
    const { data } = await httpClient.get(
      requestUrl,
      {
        headers: {
          affiliateId,
          ...additionalHeaders,
        },
      },
    );

    return data;
  };

  return {
    getSummaryAvailability,
    getPerformanceAvailability,
    getUpsellProductByAggregateReference,
    getUpsellApiProductDataById,
    getMaxQuantity,
  };
};
