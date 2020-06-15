import { getVenueServiceRepository } from './repository-provider';

export { getVenueServiceApi } from './api-provider';
export const venueService = { create: getVenueServiceRepository };
