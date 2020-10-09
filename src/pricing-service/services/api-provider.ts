import { getHttpClient } from '../../http-client-provider';
import { checkRequiredProperty, getAdditionalHeaders } from '../../utils';
import { pathSettings } from '../constants/path-settings';
import { priceEndpointHeaders } from '../constants/request-settings';
import { Environment, SourceInformation } from '../../shared/typings';
import { ApiFromPrices } from '../typings';

export const getPricingServiceApi = (
  environment: Environment,
  pricingApiUrl?: string,
  { sourceName, sourceVersion }: SourceInformation = {},
) => {
  checkRequiredProperty(environment, 'getPricingServiceApi: environment');

  const basePricingApiUrl = pricingApiUrl || pathSettings[environment];
  const httpClient = getHttpClient(basePricingApiUrl);
  const productsPath = '/products';
  const additionalHeaders = getAdditionalHeaders(
    'Pricing service',
    sourceName,
    sourceVersion,
  );

  const getFromPrices = async (productId: string): Promise<ApiFromPrices[]> => {
    const requestUrl = `${productsPath}/${productId}/performances/from-price/quantity/1`;
    const { data } = await httpClient.get(
      requestUrl,
      {
        headers: {
          ...priceEndpointHeaders,
          ...additionalHeaders,
        },
      },
    );

    return data;
  };

  return {
    getFromPrices,
  };
};
