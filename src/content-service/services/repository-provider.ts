import { Product } from '../models';
import { getContentServiceApi } from './api-provider';
import { checkRequiredProperty } from '../../utils/validator';
import { Environment, Settings, SourceInformation } from '../../shared/typings';
import { ProductV3 } from '../models/productV3';

export const getContentServiceRepository = (
  environment: Environment,
  settings?: Settings,
  sourceInformation: SourceInformation = {},
) => {
  checkRequiredProperty(environment, 'getContentServiceRepository: environment');

  const contentServiceApi = getContentServiceApi(environment, settings, sourceInformation);
  const { getImages, getProduct, getProducts, getProductFromV3 } = contentServiceApi;

  return {
    getProducts: async (page?: number, limit?: number) => {
      const productsData = await getProducts(page, limit);

      if (!productsData) {
        return null;
      }

      return productsData.map(apiProductData => new Product(apiProductData));
    },

    getProduct: async (productId: string, getContentFromV3: boolean = false) => {
      checkRequiredProperty(productId, 'getProduct: product id');

      const apiProductData = await getProduct(productId, getContentFromV3);

      if (!apiProductData) {
        return null;
      }

      return new Product(apiProductData);
    },

    getProductFromV3: async (productId: string) => {
      checkRequiredProperty(productId, 'getProduct: product id');

      const apiProductData = await getProductFromV3(productId);

      if (!apiProductData) {
        return null;
      }

      return new ProductV3(apiProductData);
    },

    getImages,
  };
};
