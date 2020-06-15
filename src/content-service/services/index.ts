import { getContentServiceRepository } from './repository-provider';

export { getContentServiceApi } from './api-provider';
export const contentService = { create: getContentServiceRepository };
