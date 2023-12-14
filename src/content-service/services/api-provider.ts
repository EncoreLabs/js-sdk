import { getHttpClient } from '../../http-client-provider';
import { checkRequiredProperty, getAdditionalHeaders } from '../../utils';
import { pathSettings } from '../constants/path-settings';
import { imageSizes } from '../constants/image-sizes';
import { ApiProductData, EntityType, ImageOrientation, Image, ApiProductDataV3 } from '../typings';
import { Environment, Settings, SourceInformation } from '../../shared/typings';

export const getContentServiceApi = (
  environment: Environment,
  settings?: Settings,
  sourceInformation: SourceInformation = {},
) => {
  checkRequiredProperty(environment, 'getContentServiceApi: environment');

  const baseContentApiUrl = settings?.contentApiUrl || pathSettings[environment].api;
  const baseContentApiUrlForV3 = settings?.contentApiUrlV3 || pathSettings[environment].apiV3;
  const baseContentImagesUrl = settings?.contentImagesUrl || pathSettings[environment].images;

  const httpClient = getHttpClient(baseContentApiUrl);
  const httpClientForV3 = getHttpClient(baseContentApiUrlForV3);

  const productsPath = '/products';
  const additionalHeaders = getAdditionalHeaders(sourceInformation);
  const additionalHeadersForV3 = getAdditionalHeaders(sourceInformation, false, true);

  const getProducts = async (page?: number, limit?: number): Promise<ApiProductData[]> => {
    let requestUrl = productsPath;
    let query = '';

    if (page) {
      query += `&page=${page}`;
    }

    if (limit) {
      query += `&limit=${limit}`;
    }

    if (query) {
      requestUrl += query.replace('&', '?');
    }

    const { data } = await httpClient.get(
      requestUrl,
      {
        headers: additionalHeaders,
      },
    );

    return data;
  };

  const getProduct = async (id: string, getContentFromV3: boolean): Promise<ApiProductData> => {
    const requestUrl = `${productsPath}/${id}?getContentFromV3=${getContentFromV3}`;
    const { data } = await httpClient.get(
      requestUrl,
      {
        headers: additionalHeaders,
      },
    );

    return data;
  };

  const getProductFromV3 = async (id: string): Promise<ApiProductDataV3> => {
    const requestUrl = `${productsPath}/${id}?includeAllFields=true`;

    const { data } = await httpClientForV3.get(
      requestUrl,
      {
        headers: additionalHeadersForV3,
      },
    );

    return { id: data.id, venueChartKey: data.venueChartKey };
  };

  const getImages = (
    entityType: EntityType,
    entityId: string,
    orientation = ImageOrientation.Default,
    customImageSize?: string,
  ): Image[] => {
    if (customImageSize) {
      return [{
        screenSize: 'custom',
        url: `${baseContentImagesUrl}/${entityType}/${entityId}/${orientation}?width=${customImageSize}`,
      }];
    }

    return (imageSizes[orientation] || imageSizes[ImageOrientation.Default]).map(({ screenSize, imageSize }) => ({
      screenSize,
      url: `${baseContentImagesUrl}/${entityType}/${entityId}/${orientation}${imageSize ? `?width=${imageSize}` : '' }`,
    }));
  };

  return {
    getProducts,
    getProduct,
    getProductFromV3,
    getImages,
  };
};
