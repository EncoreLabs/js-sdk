import { getHttpClient } from '../../http-client-provider';
import { checkRequiredProperty } from '../../utils/validator';
import { pathSettings } from '../constants/path-settings';
import { ApiSeatAttributes } from '../typings';
import { Environment } from '../../shared/typings';

export const getVenueServiceApi = (environment: Environment, venueApiUrl?: string) => {
  checkRequiredProperty(environment, 'getVenueServiceApi: environment');

  const baseVenueApiUrl = venueApiUrl || pathSettings[environment];
  const httpClient = getHttpClient(baseVenueApiUrl);
  const venuesPath = '/venues';
  const seatsPath = '/seats';
  const attributesPath = '/attributes';

  const getSeatAttributes = async (venueId: string): Promise<ApiSeatAttributes[]> => {
    const { data } = await httpClient.get(`${venuesPath}/${venueId}${seatsPath}${attributesPath}`);

    return data;
  };

  return {
    getSeatAttributes,
  };
};
