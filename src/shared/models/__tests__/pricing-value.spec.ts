import { PricingValue } from '../pricing-value';
import { availabilityMock } from '../../../inventory-service/__mocks__';

const areaPricingValueMock = availabilityMock.areas[0].groupings[0].pricing.faceValue[0];
const getAreaPricingValue = () => {
  return new PricingValue(areaPricingValueMock);
};

describe('PricingValue', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  describe('getValue function', () => {
    it('should get value', () => {
      expect(getAreaPricingValue().getValue()).toEqual(areaPricingValueMock.value);
    });
  });

  describe('getCurrency function', () => {
    it('should get currency', () => {
      expect(getAreaPricingValue().getCurrency()).toEqual(areaPricingValueMock.currency);
    });
  });

  describe('getDecimalPlaces function', () => {
    it('should get decimal places', () => {
      expect(getAreaPricingValue().getDecimalPlaces()).toEqual(areaPricingValueMock.decimalPlaces);
    });
  });
});
