import { getPricingServiceRepository } from '../repository-provider';
import { getPricingServiceApi } from '../api-provider';
import { Environment } from '../../../shared/typings';
import { fromPricesMock } from '../../__mocks__/from-prices';

const getFromPricesData = jest.fn(() => Promise.resolve(fromPricesMock));

jest.mock('../api-provider', () => ({
  getPricingServiceApi: jest.fn().mockImplementation(() => ({
    getFromPrices: getFromPricesData,
  })),
}));

describe('Pricing repository', () => {
  const productId = '1001';
  const environment = Environment.Dev;
  const { getFromPrices } = getPricingServiceRepository(environment);

  it('should create api for specific environment', () => {
    expect(getPricingServiceApi).toBeCalledWith(environment, undefined);
  });

  describe('getFromPrices function', () => {
    it('should throw an error if venue id is not defined', async () => {
      expect.assertions(1);
      await expect(getFromPrices(null)).rejects.toEqual(new Error('getFromPrices: product id is required'));
    });

    it('should return null if seat attributes were not found', async () => {
      (getPricingServiceApi as jest.Mock).mockImplementationOnce(() => ({ getFromPrices: jest.fn(() => null) }));
      const repository = getPricingServiceRepository(Environment.Dev);
      const result = await repository.getFromPrices(productId);
  
      expect(result).toBeNull();
    });

    it('should return pricing details', async () => {
      await getFromPrices(productId);

      expect(getFromPricesData).toBeCalledWith(productId);
    });
  });
});
