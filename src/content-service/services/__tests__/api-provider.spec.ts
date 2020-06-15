import {AxiosInstance} from 'axios';
import { getContentServiceApi } from '../api-provider';
import { getHttpClient } from '../../../http-client-provider';
import { getMockFunctionReturnValue } from '../../../utils';
import {imageSizes} from "../../constants/image-sizes";
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
  const contentServiceApi = getContentServiceApi(Environment.Dev);

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

      expect(httpClient.get).toBeCalledWith('/products');
    });

    it('should get list of products with query', async () => {
      const page = 5;
      const limit = 100;
      await contentServiceApi.getProducts(page, limit);

      expect(httpClient.get).toBeCalledWith('/products?page=5&limit=100');
    });
  });

  describe('getProduct function', () => {
    it('should get product', async () => {
      const id = 'test';
      await contentServiceApi.getProduct(id);
  
      expect(httpClient.get).toBeCalledWith(`/products/${id}`);
    });  
  });

  describe('getImages function', () => {
    it('should get images', () => {
      const productEntity = EntityType.Products;
      const entityId = 'test';
      const images = contentServiceApi.getImages(productEntity, entityId, ImageOrientation.Landscape);
  
      images.forEach((image, index) => {
        const imageSizeSettings = (imageSizes[ImageOrientation.Landscape] || imageSizes[ImageOrientation.Default])[index];
        const { imageSize, screenSize } = imageSizeSettings;
        const imagesBaseUrl = pathSettings[Environment.Dev].images;
  
        expect(images[index]).toEqual({
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
  
      images.forEach((image, index) => {
        const imageSizeSettings = imageSizes[ImageOrientation.Default][index];
        const { imageSize, screenSize } = imageSizeSettings;
  
        expect(images[index]).toEqual({
          screenSize,
          url: `${settings.contentImagesUrl}/${productEntity}/${entityId}/${ImageOrientation.Default}?width=${imageSize}`,
        });
      });
    });
  });
});
