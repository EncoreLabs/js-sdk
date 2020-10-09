import { getContentServiceApi } from '../api-provider';
import { getContentServiceRepository } from '../repository-provider';
import { Product } from '../../models';
import { Environment } from "../../../shared/typings";

const product = 'test';
const getImages = jest.fn();
const getProduct = jest.fn().mockImplementation(() => product);
const getProducts = jest.fn().mockImplementation(() => [product]);

jest.mock('../api-provider', () => ({
  getContentServiceApi: jest.fn(() => ({
    getImages,
    getProduct,
    getProducts,
  })),
}));
jest.mock('../../models/product');

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
      await expect(repository.getProduct(null)).rejects.toEqual(new Error('getProduct: product id is required'));
    });

    it('should return null if product was not found', async () => {
      (getContentServiceApi as jest.Mock).mockImplementationOnce(() => ({ getProduct: jest.fn(() => null) }));
      const repository = getContentServiceRepository(Environment.Dev);
      const result = await repository.getProduct(id);

      expect(result).toBeNull();
    });

    it('should return product', async () => {
      const repository = getContentServiceRepository(Environment.Dev);
      await repository.getProduct(id);

      expect(getProduct).toBeCalledWith(id);
      expect(Product).toBeCalledWith(product);
    });
  });
});
