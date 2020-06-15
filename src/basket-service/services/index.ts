import { getBasketServiceRepository } from './repository-provider';

export { getBasketServiceApi } from './api-provider';
export const basketService = { create: getBasketServiceRepository };
