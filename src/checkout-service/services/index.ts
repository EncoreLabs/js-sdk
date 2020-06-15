import { getCheckoutServiceRepository } from './repository-provider';

export { getCheckoutServiceApi } from './api-provider';
export const checkoutService = { create: getCheckoutServiceRepository };
