import { getHttpClient } from '../../http-client-provider';
import { checkRequiredProperty } from '../../utils/validator';
import { pathSettings } from '../constants/path-settings';
import { imageSizes } from '../constants/image-sizes';
import { ApiProductData, EntityType, ImageOrientation, Image } from '../typings';
import { Environment, Settings } from '../../shared/typings';

export const getContentServiceApi = (environment: Environment, settings?: Settings) => {
  checkRequiredProperty(environment, 'getContentServiceApi: environment');

  const baseContentApiUrl = settings?.contentApiUrl || pathSettings[environment].api;
  const baseContentImagesUrl = settings?.contentImagesUrl || pathSettings[environment].images;

  const httpClient = getHttpClient(baseContentApiUrl);
  const productsPath = '/products';

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

    const { data } = await httpClient.get(requestUrl);

    return data;
  };

  const getProduct = async (id: string): Promise<ApiProductData> => {
    const requestUrl = `${productsPath}/${id}`;
    const { data } = await httpClient.get(requestUrl);

    return data;
  };

  const getImages = (entityType: EntityType, entityId: string, orientation = ImageOrientation.Default): Image[] => (
    (imageSizes[orientation] || imageSizes[ImageOrientation.Default]).map(({ screenSize, imageSize }) => (
      {
        screenSize,
        url: `${baseContentImagesUrl}/${entityType}/${entityId}/${orientation}?width=${imageSize}`
      }
    ))
  );

  return {
    getProducts,
    getProduct,
    getImages,
  };
};