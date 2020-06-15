import moment from 'moment';
import { PricingValue } from '../../../shared/models/pricing-value';
import { FromPrices } from '../from-prices';
import { fromPricesMock } from '../../__mocks__/from-prices';

const fromPriceMock = fromPricesMock[0];
const getFromPrices = () => {
  return new FromPrices(fromPriceMock);
};

describe('From Prices', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  describe('getCreatedAt function', () => {
    it('should get created at date in moment format', () => {
      expect(getFromPrices().getCreatedAt()).toEqual(moment(fromPriceMock.createdAt));
    });
  });

  describe('getRawCreatedAt function', () => {
    it('should get raw created at date in string format', () => {
      expect(getFromPrices().getRawCreatedAt()).toEqual(fromPriceMock.createdAt);
    });
  });

  describe('getDate function', () => {
    it('should get date in moment format', () => {
      expect(getFromPrices().getDate()).toEqual(moment(fromPriceMock.date));
    });
  });

  describe('getRawDate function', () => {
    it('should get date in string format', () => {
      expect(getFromPrices().getRawDate()).toEqual(fromPriceMock.date);
    });
  });

  describe('getDisplayCurrency function', () => {
    it('should get display currency', () => {
      expect(getFromPrices().getDisplayCurrency()).toEqual(fromPriceMock.displayCurrency);
    });
  });

  describe('getPrices function', () => {
    it('should get prices', () => {
      const prices = getFromPrices().getPrices();

      expect(prices).toHaveLength(fromPriceMock.fromPrice.length);
      prices.forEach(value => {
        expect(value instanceof PricingValue).toBe(true);
      });
    });
  });
});
