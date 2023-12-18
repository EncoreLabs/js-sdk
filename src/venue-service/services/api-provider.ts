import { getHttpClient } from '../../http-client-provider';
import { checkRequiredProperty, getAdditionalHeaders } from '../../utils';
import { pathSettings, pathSettingsForV3 } from '../constants/path-settings';
import { ApiSeatAttributes, ChartDetails, VenueChartType, VenueDetailsApi } from '../typings';
import { Environment, SourceInformation } from '../../shared/typings';

interface Params {
  venueId: string;
  seatIdCollection?: string[];
  performanceDate?: string;
  performanceTime?: string;
}

export const getVenueServiceApi = (
  environment: Environment,
  venueApiUrl?: string,
  sourceInformation: SourceInformation = {},
  venueApiUrlForV3?: string
) => {
  checkRequiredProperty(environment, 'getVenueServiceApi: environment');

  const baseVenueApiUrl = venueApiUrl || pathSettings[environment];
  const httpClient = getHttpClient(baseVenueApiUrl);
  const baseVenueApiUrlForV3 = venueApiUrlForV3 || pathSettingsForV3[environment];
  const httpClientForV3 = getHttpClient(baseVenueApiUrlForV3);
  const venuesPath = '/venues';
  const seatsPath = '/seats';
  const productsPath = '/products';
  const attributesPath = '/attributes';
  const chartPath = '/chart'
  const additionalHeaders = getAdditionalHeaders(sourceInformation);

  const getSeatAttributes = async ({
    venueId,
    seatIdCollection,
    performanceDate,
    performanceTime,
  }: Params): Promise<ApiSeatAttributes[]> => {
    let requestUrl = `${venuesPath}/${venueId}${seatsPath}${attributesPath}`;

    if (performanceDate || performanceTime || seatIdCollection) {
      requestUrl += '?';
    }

    if (performanceDate) {
      const formattedDate = performanceDate.replace(/-/g, '');
      requestUrl +=`date=${formattedDate}`;
    }

    if (performanceTime) {
      const formattedTime = performanceTime.replace(/:/g, '');
      requestUrl += `&time=${formattedTime}`;
    }

    if (seatIdCollection?.length) {
      seatIdCollection.forEach(item => requestUrl += `&seatIds[]=${item}`);
    }

    const { data } = await httpClient.get(
      requestUrl,
      {
        headers: additionalHeaders,
      },
    );

    return data;
  };

  const getDetails = async (venueId: string): Promise<VenueDetailsApi> => {
    const requestUrl = `${venuesPath}/${venueId}`;
    const { data } = await httpClient.get(
      requestUrl,
      {
        headers: additionalHeaders,
      },
    );

    return data;
  };

  const getChartDetails = async (productId: string, date?: string): Promise<ChartDetails> => {
    let requestUrl = `${productsPath}/${productId}`;

    if (date) {
      const formattedDate = date.replace(/-/g, '');
      requestUrl = `${requestUrl}?date=${formattedDate}`;
    }

    const { data } = await httpClient.get(
      requestUrl,
      {
        headers: additionalHeaders,
      },
    );

    return data;
  };

  const getVenueChartByKey = async (venueChartKey: string): Promise<VenueChartType> => {
    const requestUrl = `${chartPath}/${venueChartKey}`;

    const { data } = await httpClientForV3.get(
      requestUrl,
      {
        headers: additionalHeaders,
      },
    );

    return data;
  };

  return {
    getSeatAttributes,
    getDetails,
    getChartDetails,
    getVenueChartByKey
  };
};


