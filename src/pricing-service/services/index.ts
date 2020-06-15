import { getPricingServiceRepository } from './repository-provider';

export { getPricingServiceApi } from './api-provider';
export const pricingService = { create: getPricingServiceRepository };
