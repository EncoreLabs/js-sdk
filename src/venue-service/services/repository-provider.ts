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

  const getSeatAttributes = async (venueId: string, performanceDate?: string, performanceTime?: string) => {
    checkRequiredProperty(venueId, 'getSeatAttributes: venue id');

    const seatAttributesData = await venueApi.getSeatAttributes({ venueId, performanceDate, performanceTime });

    return seatAttributesData.map(seatAttributes => new SeatAttributes(seatAttributes));
  };

  const getSeatAttributesBySeatIds = async (venueId: string, seatIdCollection: string[]) => {
    checkRequiredProperty(venueId, 'getSeatAttributesBySeatIds: venue id');
    checkRequiredProperty(seatIdCollection, 'getSeatAttributesBySeatIds: seat id collection');

    const seatAttributesData = await venueApi.getSeatAttributes({ venueId, seatIdCollection });

    return seatAttributesData.map(seatAttributes => new SeatAttributes(seatAttributes));
  };

  const getDetails = async (venueId: string) => {
    checkRequiredProperty(venueId, 'getDetails: venue id');

    return venueApi.getDetails(venueId);
  };

  const getChartDetails = async (productId: string, date?: string) => {
    checkRequiredProperty(productId, 'getChartDetails: product id');

    return venueApi.getChartDetails(productId, date);
  };

  return {
    getSeatAttributes,
    getDetails,
    getChartDetails,
    getSeatAttributesBySeatIds,
  };
};
