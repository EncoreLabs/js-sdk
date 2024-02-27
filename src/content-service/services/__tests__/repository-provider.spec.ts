import { getContentServiceApi } from '../api-provider';
import { getContentServiceRepository } from '../repository-provider';
import { Product, ProductV3 } from '../../models';
import { Environment } from "../../../shared/typings";

const product = 'test';
const productV3 = {
  id: 'productV3TestId',
  venueChartKey: 'venueChartKeyV3Test'
}
const getImages = jest.fn();
const getProduct = jest.fn().mockImplementation(() => product);
const getProductFromV3 = jest.fn().mockImplementation(() => productV3);
const getProductFromPlatform = jest.fn().mockImplementation(() => productV3);
const getProducts = jest.fn().mockImplementation(() => [product]);

jest.mock('../api-provider', () => ({
  getContentServiceApi: jest.fn(() => ({
    getImages,
    getProduct,
    getProductFromV3,
    getProductFromPlatform,
    getProducts,
  })),
}));
jest.mock('../../models/product');
jest.mock('../../models/productV3');

describe('Content repository', () => {
  const id = '1587';

  beforeEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  describe('getProducts function', () => {
    it('should return null if product was not found', async () => {
      (getContentServiceApi as jest.Mock).mockImplementationOnce(() => ({ getProducts: jest.fn(() => null) }));
      const repository = getContentServiceRepository(Environment.Dev);
      const result = await repository.getProducts();

      expect(result).toBeNull();
    });

    it('should return list of products', async () => {
      const repository = getContentServiceRepository(Environment.Dev);
      await repository.getProducts();

      expect(getProducts).toBeCalledWith(undefined, undefined);
      expect(Product).toBeCalledWith(product);
    });

    it('should return list of products for specified query', async () => {
      const page = 5;
      const limit = 100;
      const repository = getContentServiceRepository(Environment.Dev);
      await repository.getProducts(page, limit);

      expect(getProducts).toBeCalledWith(page, limit);
      expect(Product).toBeCalledWith(product);
    });
  });

  describe('getProduct function', () => {
    it('should throw an error if product id is not defined', async () => {
      const repository = getContentServiceRepository(Environment.Dev);
      expect.assertions(1);
      await expect(repository.getProduct(null, false)).rejects.toEqual(new Error('getProduct: product id is required'));
    });

    it('should return null if product was not found', async () => {
      (getContentServiceApi as jest.Mock).mockImplementationOnce(() => ({ getProduct: jest.fn(() => null) }));
      const repository = getContentServiceRepository(Environment.Dev);
      const result = await repository.getProduct(id, false);

      expect(result).toBeNull();
    });

    it('should return product', async () => {
      const repository = getContentServiceRepository(Environment.Dev);
      await repository.getProduct(id);

      expect(getProduct).toBeCalledWith(id, false);
      expect(Product).toBeCalledWith(product);
    });

    it('should return product', async () => {
      const repository = getContentServiceRepository(Environment.Dev);
      await repository.getProduct(id, true);

      expect(getProduct).toBeCalledWith(id, true);
      expect(Product).toBeCalledWith(product);
    });
  });

  describe('getProductFromV3 function', () => {
    it('should throw an error if product id is not defined', async () => {
      const repository = getContentServiceRepository(Environment.Dev);
      expect.assertions(1);
      await expect(repository.getProductFromV3(null)).rejects.toEqual(new Error('getProduct: product id is required'));
    });

    it('should return null if product v3 was not found', async () => {
      (getContentServiceApi as jest.Mock).mockImplementationOnce(() => ({ getProductFromV3: jest.fn(() => null) }));
      const repository = getContentServiceRepository(Environment.Dev);
      const result = await repository.getProductFromV3(id);

      expect(result).toBeNull();
    });

    it('should return product v3', async () => {
      const repository = getContentServiceRepository(Environment.Dev);
      await repository.getProductFromV3(productV3.id)

      expect(getProductFromV3).toBeCalledWith(productV3.id);
      expect(ProductV3).toBeCalledWith(productV3);
    });
  });

  describe('getProductFromPlatform function', () => {
    it('should throw an error if product id is not defined', async () => {
      const repository = getContentServiceRepository(Environment.Dev);
      expect.assertions(1);
      await expect(repository.getProductFromPlatform(null)).rejects.toEqual(new Error('getProduct: product id is required'));
    });

    it('should return null if platform product was not found', async () => {
      (getContentServiceApi as jest.Mock).mockImplementationOnce(() => ({ getProductFromPlatform: jest.fn(() => null) }));
      const repository = getContentServiceRepository(Environment.Dev);
      const result = await repository.getProductFromPlatform(id);

      expect(result).toBeNull();
    });

    it('should return platform product', async () => {
      const repository = getContentServiceRepository(Environment.Dev);
      await repository.getProductFromPlatform(productV3.id)

      expect(getProductFromPlatform).toBeCalledWith(productV3.id);
      expect(ProductV3).toBeCalledWith(productV3);
    });
  });
});
