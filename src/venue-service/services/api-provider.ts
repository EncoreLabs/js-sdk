import { getHttpClient } from '../../http-client-provider';
import { checkRequiredProperty, getAdditionalHeaders } from '../../utils';
import { pathSettings } from '../constants/path-settings';
import { ApiSeatAttributes } from '../typings';
import { Environment } from '../../shared/typings';

interface Params {
  venueId: string;
  seatId?: string[];
  performanceDate?: string;
  performanceTime?: string;
}

export const getVenueServiceApi = (environment: Environment, venueApiUrl?: string, widgetTitle?: string) => {
  checkRequiredProperty(environment, 'getVenueServiceApi: environment');

  const baseVenueApiUrl = venueApiUrl || pathSettings[environment];
  const httpClient = getHttpClient(baseVenueApiUrl);
  const venuesPath = '/venues';
  const seatsPath = '/seats';
  const productsPath = '/products';
  const attributesPath = '/attributes';
  const additionalHeaders = getAdditionalHeaders(
    'Venue service',
    'v2',
    venueApiUrl,
    widgetTitle,
  );

  const getSeatAttributes = async ({ venueId, seatId, performanceDate, performanceTime }: Params): Promise<ApiSeatAttributes[]> => {
    let requestUrl = `${venuesPath}/${venueId}${seatsPath}${attributesPath}`;

    if (performanceDate || performanceTime || seatId) {
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

    if (seatId?.length) {
      seatId.forEach(item => requestUrl += `&seatIds[]=${item}`);
    }

    const { data } = await httpClient.get(
      requestUrl,
      {
        headers: {
          ...additionalHeaders,
        },
      },
    );

    return data;
  };

  const getDetails = async (venueId: string) => {
    const requestUrl = `${venuesPath}/${venueId}`;
    const { data } = await httpClient.get(
      requestUrl,
      {
        headers: {
          ...additionalHeaders,
        },
      },
    );

    return data;
  };

  const getChartDetails = async (productId: string, date?: string) => {
    let requestUrl = `${productsPath}/${productId}`;

    if (date) {
      const formattedDate = date.replace(/-/g, '');
      requestUrl = `${requestUrl}?date=${formattedDate}`;
    }

    const { data } = await httpClient.get(
      requestUrl,
      {
        headers: {
          ...additionalHeaders,
        },
      },
    );

    return data;
  };

  return {
    getSeatAttributes,
    getDetails,
    getChartDetails,
  };
};
