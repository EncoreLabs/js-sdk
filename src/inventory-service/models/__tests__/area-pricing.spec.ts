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

  describe('setFaceValues function', () => {
    it('should set face values', () => {
      const newFaceValue = new PricingValue({
        value: 10000,
        currency: 'USD',
        decimalPlaces: 2,
      });
      const areaPricing = getAreaPricing();
      areaPricing.setFaceValues([newFaceValue]);
      const faceValue = areaPricing.getFaceValues();

      expect(faceValue).toHaveLength(1);
      expect(faceValue[0]).toEqual(newFaceValue);
    });
  });

  describe('getSalePrices function', () => {
    it('should get sale values', () => {
      const salePrices = getAreaPricing().getSalePrices();

      expect(salePrices).toHaveLength(1);
      salePrices.forEach(value => {
        expect(value instanceof PricingValue).toBe(true);
      });
    });  
  });

  describe('setSalePrices function', () => {
    it('should set sale prices', () => {
      const newSalePrice = new PricingValue({
        value: 10000,
        currency: 'USD',
        decimalPlaces: 2,
      });
      const areaPricing = getAreaPricing();
      areaPricing.setSalePrices([newSalePrice]);
      const salePrice = areaPricing.getSalePrices();

      expect(salePrice).toHaveLength(1);
      expect(salePrice[0]).toEqual(newSalePrice);
    });
  });

  describe('getPercentageDiscount function', () => {
    it('should get percentage discount', () => {
      expect(getAreaPricing().getPercentageDiscount()).toEqual(areaPricingMock.percentageDiscount);
    });
  });

  describe('setPercentageDiscount function', () => {
    it('should set percentage discount', () => {
      const newPercentageDiscount = 10;
      const areaPricing = getAreaPricing();
      areaPricing.setPercentageDiscount(newPercentageDiscount);
      const percentageDiscount = areaPricing.getPercentageDiscount();

      expect(percentageDiscount).toBe(newPercentageDiscount);
    });
  });

  describe('hasBookingFee function', () => {
    it('should check that pricing has booking fee', () => {
      expect(getAreaPricing().hasBookingFee()).toEqual(areaPricingMock.includesBookingFee);
    });
  });

  describe('setHasBookingFee function', () => {
    it('should set hasBookingFee state', () => {
      const newHasBookingFeeState = false;
      const areaPricing = getAreaPricing();
      areaPricing.setHasBookingFee(newHasBookingFeeState);
      const hasBookingFee = areaPricing.hasBookingFee();

      expect(hasBookingFee).toBe(newHasBookingFeeState);
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
