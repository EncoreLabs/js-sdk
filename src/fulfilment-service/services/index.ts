import { getFulfilmentServiceRepository } from './repository-provider';

export { getFulfilmentServiceApi } from './api-provider';
export const fulfilmentService = { create: getFulfilmentServiceRepository };
