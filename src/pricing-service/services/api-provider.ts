import { getHttpClient } from '../../http-client-provider';
import { checkRequiredProperty } from '../../utils/validator';
import { pathSettings } from '../constants/path-settings';
import { priceEndpointHeaders } from '../constants/request-settings';
import { Environment } from '../../shared/typings';
import { ApiFromPrices } from '../typings';

export const getPricingServiceApi = (environment: Environment, pricingApiUrl?: string) => {
  checkRequiredProperty(environment, 'getPricingServiceApi: environment');

  const basePricingApiUrl = pricingApiUrl || pathSettings[environment];
  const httpClient = getHttpClient(basePricingApiUrl);
  const productsPath = '/products';

  const getFromPrices = async (productId: string): Promise<ApiFromPrices[]> => {
    const requestUrl = `${productsPath}/${productId}/performances/from-price/quantity/1`;
    const { data } = await httpClient.get(requestUrl, { headers: priceEndpointHeaders });

    return data;
  };

  return {
    getFromPrices,
  };
};
