import { Product } from '../models';
import { getContentServiceApi } from './api-provider';
import { checkRequiredProperty } from '../../utils/validator';
import { Environment, Settings } from '../../shared/typings';

export const getContentServiceRepository = (environment: Environment, settings?: Settings) => {
  checkRequiredProperty(environment, 'getContentServiceRepository: environment');

  const contentServiceApi = getContentServiceApi(environment, settings);
  const { getImages, getProduct, getProducts } = contentServiceApi;

  return {
    getProducts: async (page?: number, limit?: number) => {
      const productsData = await getProducts(page, limit);

      if (!productsData) {
        return null;
      }

      return productsData.map(apiProductData => new Product(apiProductData));
    },

    getProduct: async (productId: string) => {
      checkRequiredProperty(productId, 'getProduct: product id');

      const apiProductData = await getProduct(productId);

      if (!apiProductData) {
        return null;
      }

      return new Product(apiProductData);
    },

    getImages,
  };
};
