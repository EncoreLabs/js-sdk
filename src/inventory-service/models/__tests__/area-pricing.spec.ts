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

  describe('getOrderFees function', () => {
    it('should not get face values', () => {
      const orderFees = getAreaPricing().getOrderFees();

      expect(orderFees).toBeNull();
    });

    it('should get face values', () => {
      const orderFees = getAreaPricing({orderFee: [{ value: 10, currency: 'GBP', decimalPlaces: 0 }]}).getOrderFees();

      expect(orderFees).toHaveLength(1);
      orderFees.forEach(value => {
        expect(value instanceof PricingValue).toBe(true);
      });
    });
  });

  describe('setOrderFee function', () => {
    it('should set order fee prices', () => {
      const newOrderFee = new PricingValue({
        value: 10,
        currency: 'GBP',
        decimalPlaces: 0,
      });
      const areaPricing = getAreaPricing();
      areaPricing.setOrderFees([newOrderFee]);
      const orderFees = areaPricing.getOrderFees();

      expect(orderFees).toHaveLength(1);
      expect(orderFees[0]).toEqual(newOrderFee);
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

  describe('getPromotionLabel function', () => {
    it('should return null if the promotionLabel is null', () => {
      const areaPricing = getAreaPricing();

      const promotionLabel = areaPricing.getPromotionLabel();

      expect(promotionLabel).toBeNull();
    })

    it('should return the label if the promotionLabel exists', () => {
      const areaPricing = getAreaPricing({ promotionLabel: 'Test' });

      const promotionLabel = areaPricing.getPromotionLabel();

      expect(promotionLabel).toBe('Test');
    })
  });

  describe('clearPromotionLabel function', () => {
    it('should clear any existing promotionLabel if the new one is null', () => {
      const newPromotionLabel = null;
      const areaPricing = getAreaPricing();
      areaPricing.setPromotionLabel(newPromotionLabel);
      const promotionLabel = areaPricing.getPromotionLabel();

      expect(promotionLabel).toBe(null);
    });

    it('should change the promotion label if the new one is a string', () => {
      const newPromotionLabel = 'New Promo';
      const areaPricing = getAreaPricing();
      areaPricing.setPromotionLabel(newPromotionLabel);
      const promotionLabel = areaPricing.getPromotionLabel();

      expect(promotionLabel).toBe('New Promo');
    });

    it('should change the promotion label if the new one is a string', () => {
      const newPromotionLabel = 'New Promo';
      const areaPricing = getAreaPricing();
      areaPricing.setPromotionLabel(newPromotionLabel);
      const promotionLabel = areaPricing.getPromotionLabel();

      expect(promotionLabel).toBe('New Promo');
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
