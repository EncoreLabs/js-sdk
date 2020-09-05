import { AreaPricing } from '../area-pricing';
import { PricingValue } from '../../../shared/models/pricing-value';
import { availabilityMock } from '../../__mocks__';

const areaPricingMock = availabilityMock.areas[0].groupings[0].pricing;
const getAreaPricing = (customAreaPricingProps = {}) => {
  return new AreaPricing({
    ...areaPricingMock,
    ...customAreaPricingProps,
  });
};

describe('AreaPricing', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  describe('constructor', () => {
    it('should set null in face values are not presented', () => {
      expect(getAreaPricing({ faceValue: null }).getFaceValues()).toBeNull();
    });
  });

  describe('getFaceValues function', () => {
    it('should get face values', () => {
      const faceValue = getAreaPricing().getFaceValues();

      expect(faceValue).toHaveLength(areaPricingMock.faceValue.length);
      faceValue.forEach(value => {
        expect(value instanceof PricingValue).toBe(true);
      });
    });
  });

  describe('getSalePrices function', () => {
    it('should get sale values', () => {
      const salePrices = getAreaPricing().getSalePrices();

      expect(salePrices).toHaveLength(areaPricingMock.salePrice.length);
      salePrices.forEach(value => {
        expect(value instanceof PricingValue).toBe(true);
      });
    });  
  });

  describe('getPercentageDiscount function', () => {
    it('should get percentage discount', () => {
      expect(getAreaPricing().getPercentageDiscount()).toEqual(areaPricingMock.percentageDiscount);
    });
  });

  describe('hasBookingFee function', () => {
    it('should check that pricing has booking fee', () => {
      expect(getAreaPricing().hasBookingFee()).toEqual(areaPricingMock.includesBookingFee);
    });
  });

  describe('getPriceReference function', () => {
    it('should get price reference', () => {
      expect(getAreaPricing().getPriceReference()).toEqual(areaPricingMock.priceReference);
    });
  });

  describe('getTimestamp function', () => {
    it('should get timestamp', () => {
      expect(getAreaPricing().getTimestamp()).toEqual(areaPricingMock.timestamp);
    });
  });
});
