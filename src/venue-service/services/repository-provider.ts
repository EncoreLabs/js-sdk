import { getVenueServiceApi } from './api-provider';
import { checkRequiredProperty } from '../../utils/validator';
import { Environment, SourceInformation } from '../../shared/typings';
import { SeatAttributes } from '../models';

export const getVenueServiceRepository = (
  environment: Environment,
  venueApiUrl?: string,
  sourceInformation: SourceInformation = {},
) => {
  checkRequiredProperty(environment, 'getVenueServiceRepository: environment');

  const venueApi = getVenueServiceApi(environment, venueApiUrl, sourceInformation);

  const getSeatAttributes = async (venueId: string) => {
    checkRequiredProperty(venueId, 'getSeatAttributes: venue id');

    const seatAttributesData = await venueApi.getSeatAttributes(venueId);

    return seatAttributesData.map(seatAttributes => new SeatAttributes(seatAttributes));
  };

  return {
    getSeatAttributes,
  };
};
