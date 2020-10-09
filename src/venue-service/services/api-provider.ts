import { getHttpClient } from '../../http-client-provider';
import { checkRequiredProperty, getAdditionalHeaders } from '../../utils';
import { pathSettings } from '../constants/path-settings';
import { ApiSeatAttributes } from '../typings';
import { Environment, SourceInformation } from '../../shared/typings';

export const getVenueServiceApi = (
  environment: Environment,
  venueApiUrl?: string,
  { sourceName, sourceVersion }: SourceInformation = {},
) => {
  checkRequiredProperty(environment, 'getVenueServiceApi: environment');

  const baseVenueApiUrl = venueApiUrl || pathSettings[environment];
  const httpClient = getHttpClient(baseVenueApiUrl);
  const venuesPath = '/venues';
  const seatsPath = '/seats';
  const attributesPath = '/attributes';
  const additionalHeaders = getAdditionalHeaders(
    'Venue service',
    sourceName,
    sourceVersion,
  );

  const getSeatAttributes = async (venueId: string): Promise<ApiSeatAttributes[]> => {
    const requestUrl = `${venuesPath}/${venueId}${seatsPath}${attributesPath}`
    const { data } = await httpClient.get(
      requestUrl,
      {
        headers: additionalHeaders,
      },
    );

    return data;
  };

  return {
    getSeatAttributes,
  };
};
