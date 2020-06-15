import { getInventoryServiceRepository } from './repository-provider';

export { getInventoryServiceApi } from './api-provider';
export const inventoryService = { create: getInventoryServiceRepository };
