import { getInventoryServiceApi } from './api-provider';
import { checkRequiredProperty, checkDateProperty } from '../../utils/validator';
import { UpsellCollection, SummaryAvailability, Availability } from '../models';
import { Environment } from '../../shared/typings';
import { ApiUpsellProductsData } from '../typings';

export const getInventoryServiceRepository = (environment: Environment, inventoryApiUrl?: string) => {
  checkRequiredProperty(environment, 'getInventoryServiceRepository: environment');

  const inventoryServiceApi = getInventoryServiceApi(environment, inventoryApiUrl);

  const getPerformanceAvailability = async (
    affiliateId: string,
    productId: string,
    quantity: number,
    date: string,
    time: string
  ) => {
    checkRequiredProperty(productId, 'getPerformanceAvailability: product id');
    checkRequiredProperty(quantity, 'getPerformanceAvailability: quantity');
    checkRequiredProperty(affiliateId, 'getPerformanceAvailability: affiliate id');
    checkRequiredProperty(date, 'getPerformanceAvailability: date');
    checkRequiredProperty(time, 'getPerformanceAvailability: time');

    const availability = await inventoryServiceApi.getPerformanceAvailability(affiliateId, productId, quantity, date, time);

    if (!availability) {
      return null;
    }

    return new Availability(availability);
  };

  const getMaxQuantity = async (productId: string) => {
    checkRequiredProperty(productId, 'getMaxQuantity: product id');

    const response = await inventoryServiceApi.getMaxQuantity(productId);

    return response && response.MaxNumberOfTickets;
  };

  const getUpsellProductByAggregateReference = async (
    affiliateId: string,
    aggregateReference: string,
    quantity: number,
    productType: string,
  ) => {
    checkRequiredProperty(aggregateReference, 'getUpsellProductByAggregateReference: aggregate reference');
    checkRequiredProperty(quantity, 'getUpsellProductByAggregateReference: quantity');
    checkRequiredProperty(productType, 'getUpsellProductByAggregateReference: product type');
    checkRequiredProperty(affiliateId, 'getUpsellProductByAggregateReference: affiliate id');

    return await inventoryServiceApi.getUpsellProductByAggregateReference(
      affiliateId,
      aggregateReference,
      quantity,
      productType,
    );
  };

  const getUpsellProductsById = async (
    affiliateId: string,
    productId: string,
    quantity: number,
    productType: string,
    performanceDate: string,
    performanceTime: string,
  ) => {
    checkRequiredProperty(productId, 'getUpsellProductsById: product id');
    checkRequiredProperty(quantity, 'getUpsellProductsById: quantity');
    checkRequiredProperty(productType, 'getUpsellProductsById: product type');
    checkRequiredProperty(performanceDate, 'getUpsellProductsById: performance date');
    checkRequiredProperty(performanceTime, 'getUpsellProductsById: performance time');
    checkRequiredProperty(affiliateId, 'getUpsellProductsById: affiliate id');

    const ApiProductData: ApiUpsellProductsData = await inventoryServiceApi.getUpsellApiProductDataById(
      affiliateId,
      productId,
      quantity,
      productType,
      performanceDate,
      performanceTime,
    );

    if (!ApiProductData) {
      return null;
    }

    return new UpsellCollection(ApiProductData);
  };

  const getSummaryAvailability = async (
    affiliateId: string,
    productId: string,
    quantity: number,
    fromDate: string,
    toDate: string,
  ) => {
    checkRequiredProperty(affiliateId, 'getSummaryAvailability: affiliate id');
    checkRequiredProperty(productId, 'getSummaryAvailability: product id');
    checkRequiredProperty(quantity, 'getSummaryAvailability: quantity');
    checkRequiredProperty(fromDate, 'getSummaryAvailability: from date');
    checkDateProperty(fromDate, 'getSummaryAvailability: from date');
    checkRequiredProperty(toDate, 'getSummaryAvailability: to date');
    checkDateProperty(toDate, 'getSummaryAvailability: to date');

    const summaryAvailability = await inventoryServiceApi.getSummaryAvailability(affiliateId, productId, quantity, fromDate, toDate);

    return new SummaryAvailability(summaryAvailability);
  };

  return {
    getPerformanceAvailability,
    getMaxQuantity,
    getSummaryAvailability,

    _unstable_: {
      getUpsellProductByAggregateReference,
      getUpsellProductsById,
    },
  };
};
