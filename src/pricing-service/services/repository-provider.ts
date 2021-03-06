import { getPricingServiceApi } from './api-provider';
import { checkRequiredProperty } from '../../utils/validator';
import { FromPrices } from '../models';
import { Environment, SourceInformation } from '../../shared/typings';

export const getPricingServiceRepository = (
  environment: Environment,
  pricingApiUrl?: string,
  sourceInformation: SourceInformation = {},
) => {
  checkRequiredProperty(environment, 'getPricingServiceRepository: environment');

  const pricingServiceApi = getPricingServiceApi(environment, pricingApiUrl, sourceInformation);

  const getFromPrices = async (productId: string) => {
    checkRequiredProperty(productId, 'getFromPrices: product id');

    const fromPricesData = await pricingServiceApi.getFromPrices(productId);

    if (!fromPricesData) {
      return null;
    }

    return fromPricesData.map(fromPrice => new FromPrices(fromPrice));
  };

  return {
    getFromPrices,
  };
};
