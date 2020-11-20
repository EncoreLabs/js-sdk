import { getInventoryServiceRepository } from '../repository-provider';
import { getInventoryServiceApi } from '../api-provider';
import { UpsellCollection, SummaryAvailability } from '../../models';
import { upSellProductMock, upSellCollectionMock, summaryAvailabilityMock } from '../../__mocks__';
import { Environment } from '../../../shared/typings';

const getPerformanceAvailabilityMock = jest.fn().mockImplementation(() => ({}));
const getUpsellProductByAggregateReferenceMock = jest.fn().mockImplementation(() => ({}));
const getUpsellProductsByIdMock = jest.fn().mockImplementation(() => upSellCollectionMock);
const getMaxQuantityMock = jest.fn().mockImplementation(() => ({}));
const getSummaryAvailabilityMock = jest.fn().mockImplementation(() => summaryAvailabilityMock);

jest.mock('../api-provider', () => ({
  getInventoryServiceApi: jest.fn().mockImplementation(() => ({
    getPerformanceAvailability: getPerformanceAvailabilityMock,
    getUpsellProductByAggregateReference: getUpsellProductByAggregateReferenceMock,
    getUpsellApiProductDataById: getUpsellProductsByIdMock,
    getMaxQuantity: getMaxQuantityMock,
    getSummaryAvailability: getSummaryAvailabilityMock,
  })),
}));

jest.mock('../../models');

describe('Inventory repository', () => {
  const productId = '1001';
  const quantity = 2;
  const affiliateId = 'encoretickets';
  const performanceDate = '2020-01-01';
  const performanceTime = '19:30';
  const fromDate = '20200101';
  const toDate = '20210101';
  const environment= Environment.Dev;
  const sourceInformation = {
    sourceName: 'Source name',
    sourceVersion: 'Source version',
  };
  const inventoryApiUrl = 'https://inventory-service.qatixuk.io/api/v4';
  const {
    getPerformanceAvailability,
    getMaxQuantity,
    getSummaryAvailability,
    _unstable_,
  } = getInventoryServiceRepository(environment);
  const {
    getUpsellProductByAggregateReference,
    getUpsellProductsById,
  } = _unstable_;

  beforeEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  it('should create api for specific environment', () => {
    getInventoryServiceRepository(environment);

    expect(getInventoryServiceApi).toBeCalledWith(environment, undefined, {});

    getInventoryServiceRepository(environment, inventoryApiUrl, sourceInformation);

    expect(getInventoryServiceApi).toBeCalledWith(environment, inventoryApiUrl, sourceInformation);
  });

  describe('getPerformanceAvailability function', () => {
    it('should return product availability', async () => {
      await getPerformanceAvailability(affiliateId, productId, quantity, performanceDate, performanceTime);

      expect(getPerformanceAvailabilityMock).toBeCalledWith(affiliateId, productId, quantity, performanceDate, performanceTime);
    });

    it('should return null if there is no availability in the response', async () => {
      getPerformanceAvailabilityMock.mockImplementation(() => Promise.resolve(null));

      const result = await getPerformanceAvailability(affiliateId, productId, quantity, performanceDate, performanceTime);

      expect(result).toBeNull();
    });
  });

  describe('getUpsellProductByAggregateReference function', () => {
    it('should return upSell product by aggregate reference', async () => {
      const { aggregateReference, upSellIdentifier: productType } = upSellProductMock;

      await getUpsellProductByAggregateReference(affiliateId, aggregateReference, quantity, productType);

      expect(getUpsellProductByAggregateReferenceMock).toBeCalledWith(affiliateId, aggregateReference, quantity, productType);
    });
  });

  describe('getUpsellProductsById function', () => {
    it('should return null if upsell data not exist', async () => {
      getUpsellProductsByIdMock.mockImplementationOnce(() => null);
      const result = await getUpsellProductsById(affiliateId, productId, quantity, upSellProductMock.upSellIdentifier, performanceDate, performanceTime);

      expect(result).toBeNull();
      expect(UpsellCollection).not.toBeCalledWith(upSellCollectionMock);
    });

    it('should return upSell products by id', async () => {
      await getUpsellProductsById(affiliateId, productId, quantity, upSellProductMock.upSellIdentifier, performanceDate, performanceTime);

      expect(getUpsellProductsByIdMock).toBeCalledWith(affiliateId, productId, quantity, upSellProductMock.upSellIdentifier, performanceDate, performanceTime);
      expect(UpsellCollection).toBeCalledWith(upSellCollectionMock);
    });
  });

  describe('getMaxQuantity function', () => {
    it('should return max quantity', async () => {
      await getMaxQuantity(productId, affiliateId);

      expect(getMaxQuantityMock).toBeCalledWith(productId, affiliateId);
    });
  });

  describe('getSummaryAvailability function', () => {
    it('should return summary availability', async () => {
      await getSummaryAvailability(affiliateId, productId, quantity, fromDate, toDate);

      expect(getSummaryAvailabilityMock).toBeCalledWith(affiliateId, productId, quantity, fromDate, toDate);
      expect(SummaryAvailability).toBeCalledWith(summaryAvailabilityMock);
    });
  });
});
