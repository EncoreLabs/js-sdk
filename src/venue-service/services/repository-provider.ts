import { getVenueServiceApi } from './api-provider';
import { checkRequiredProperty } from '../../utils/validator';
import { Environment, SourceInformation } from '../../shared/typings';
import { SeatAttributes, VenueDetails, ChartInfo } from '../models';
import { VenueChart } from "../models/venue-chart";

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

  const getSeatAttributesBySeatIds = async (venueId: string, seatIdCollection: string[], performanceDate: string, performanceTime: string) => {
    checkRequiredProperty(venueId, 'getSeatAttributesBySeatIds: venue id');
    checkRequiredProperty(seatIdCollection, 'getSeatAttributesBySeatIds: seat id collection');
    checkRequiredProperty(performanceDate, 'getSeatAttributesBySeatIds: performance date');
    checkRequiredProperty(performanceTime, 'getSeatAttributesBySeatIds: performance time');

    const seatAttributesData = await venueApi.getSeatAttributes({ venueId, seatIdCollection, performanceDate, performanceTime });

    return seatAttributesData.map(seatAttributes => new SeatAttributes(seatAttributes));
  };

  const getDetails = async (venueId: string) => {
    checkRequiredProperty(venueId, 'getDetails: venue id');

    return venueApi.getDetails(venueId)
      .then(details => new VenueDetails(details));
  };

  const getChartDetails = async (productId: string, date?: string) => {
    checkRequiredProperty(productId, 'getChartDetails: product id');

    return venueApi.getChartDetails(productId, date)
      .then(chartDetails => new ChartInfo(chartDetails));
  };

  const getVenueChartByKey = async (venueChartKey: string) => {
    checkRequiredProperty(venueChartKey, 'getVenueChartByKeyFromV3: venue chart key');

    return venueApi.getVenueChartByKey(venueChartKey)
      .then(chartDetails => new VenueChart(chartDetails));
  }

  return {
    getSeatAttributes,
    getDetails,
    getChartDetails,
    getSeatAttributesBySeatIds,
    getVenueChartByKey
  };
};
