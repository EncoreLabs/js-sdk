import {AxiosInstance} from 'axios';
import { getContentServiceApi } from '../api-provider';
import { getHttpClient } from '../../../http-client-provider';
import { getMockFunctionReturnValue } from '../../../utils';
import { imageSizes } from '../../constants/image-sizes';
import { pathSettings } from '../../constants/path-settings';
import { EntityType, ImageOrientation } from '../../typings';
import { Environment } from '../../../shared/typings';

jest.mock('../../../http-client-provider', () => ({
  getHttpClient: jest.fn().mockImplementation(() => ({
    get: jest.fn().mockImplementation(async () => ({ data: {} })),
  })),
}));

let httpClient: AxiosInstance;

describe('Content service API', () => {
  const sourceInformation = {
    viewName: 'View name',
    sourceName: 'Source name',
    sourceVersion: 'Source version',
  };
  const contentServiceApi = getContentServiceApi(Environment.Dev, null, sourceInformation);
  const additionalHeaders = {
    'x-ttg-client': 'Source name | View name using JS SDK',
    'x-ttg-client-version': 'Source version',
  };

  beforeEach(() => {
    httpClient = getMockFunctionReturnValue(getHttpClient);
  });

  it('should create http client', () => {
    expect(getHttpClient).toBeCalledWith(pathSettings[Environment.Dev].api);
  });

  it('should create http client with custom api url', () => {
    const settings = {
      contentApiUrl: 'contentApiUrl',
      contentImagesUrl: 'contentImagesUrl',
    };
    getContentServiceApi(Environment.Dev, settings);

    expect(getHttpClient).toBeCalledWith(settings.contentApiUrl);
  });

  describe('getProducts function', () => {
    it('should get list of products', async () => {
      await contentServiceApi.getProducts();

      expect(httpClient.get).toBeCalledWith(
        '/products',
        {
          headers: additionalHeaders,
        },
      );
    });

    it('should get list of products with query', async () => {
      const page = 5;
      const limit = 100;
      await contentServiceApi.getProducts(page, limit);

      expect(httpClient.get).toBeCalledWith(
        '/products?page=5&limit=100',
        {
          headers: additionalHeaders,
        },
      );
    });
  });

  describe('getProduct function', () => {
    it('should get product', async () => {
      const id = 'test';
      await contentServiceApi.getProduct(id);

      expect(httpClient.get).toBeCalledWith(
        `/products/${id}`,
        {
          headers: additionalHeaders,
        },
      );
    });
  });

  describe('getImages function', () => {
    it('should get images with specific size', () => {
      const productEntity = EntityType.Products;
      const entityId = 'test';
      const images = contentServiceApi.getImages(productEntity, entityId, ImageOrientation.Landscape);

      images
        .filter(image => image.screenSize !== 'default')
        .forEach((image, index) => {
          const imageSizeSettings = (imageSizes[ImageOrientation.Landscape] || imageSizes[ImageOrientation.Default])[index];
          const { imageSize, screenSize } = imageSizeSettings;
          const imagesBaseUrl = pathSettings[Environment.Dev].images;

          expect(image).toEqual({
            screenSize,
            url: `${imagesBaseUrl}/${productEntity}/${entityId}/${ImageOrientation.Landscape}?width=${imageSize}`,
          });
      });
    });

    it('should get images from custom api', () => {
      const productEntity = EntityType.Products;
      const entityId = 'test';
      const settings = {
        contentApiUrl: 'contentApiUrl',
        contentImagesUrl: 'contentImagesUrl',
      };
      const images = getContentServiceApi(Environment.Dev, settings).getImages(productEntity, entityId);

      images
        .filter(image => image.screenSize !== 'default')
        .forEach((image, index) => {
          const imageSizeSettings = imageSizes[ImageOrientation.Default][index];
          const { imageSize, screenSize } = imageSizeSettings;

          expect(image).toEqual({
            screenSize,
            url: `${settings.contentImagesUrl}/${productEntity}/${entityId}/${ImageOrientation.Default}?width=${imageSize}`,
          });
      });
    });

    it('should get image with custom size', () => {
      const productEntity = EntityType.Products;
      const entityId = 'test';
      const customSize = '50';
      const imagesBaseUrl = pathSettings[Environment.Dev].images;
      const images = getContentServiceApi(Environment.Dev).getImages(
        productEntity,
        entityId,
        ImageOrientation.Default,
        customSize,
      );

      images.forEach((image) => {
        expect(image).toEqual({
          screenSize: 'custom',
          url: `${imagesBaseUrl}/${productEntity}/${entityId}/${ImageOrientation.Default}?width=${customSize}`,
        });
      });
    });

    it('should get image with default size', () => {
      const productEntity = EntityType.Products;
      const entityId = 'test';
      const imagesBaseUrl = pathSettings[Environment.Dev].images;
      const images = getContentServiceApi(Environment.Dev).getImages(
        productEntity,
        entityId,
        ImageOrientation.Default,
      );

      images
        .filter(image => image.screenSize === 'default')
        .forEach((image) => {
        expect(image).toEqual({
          screenSize: 'default',
          url: `${imagesBaseUrl}/${productEntity}/${entityId}/${ImageOrientation.Default}`,
        });
      });
    });
  });
});
