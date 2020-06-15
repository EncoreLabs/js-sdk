import { upSellProductMock, upSellCollectionMock } from '../../__mocks__';
import { UpsellProduct } from '../upsell-product';

const getUpSellProduct = () => {
  return new UpsellProduct(upSellProductMock, upSellCollectionMock.displayCurrency);
};

describe('UpSell Product', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getAggregateReference function', () => {
    it('should get aggregateReference', () => {
      expect(getUpSellProduct().getAggregateReference()).toBe(upSellProductMock.aggregateReference);
    });  
  });

  describe('getQuantity function', () => {
    it('should get quantity', () => {
      expect(getUpSellProduct().getQuantity()).toBe(upSellProductMock.quantity);
    });  
  });

  describe('getFaceValue function', () => {
    it('should get face value', () => {
      expect(getUpSellProduct().getFaceValue()).toEqual({
        value: 199,
        currency: 'GBP',
        decimalPlaces: 2,
      });
    });
  });

  describe('getSalePrice function', () => {
    it('should get sale value', () => {
      expect(getUpSellProduct().getSalePrice()).toEqual({
        value: 199,
        currency: 'GBP',
        decimalPlaces: 2,
      });
    });  
  });

  describe('getUpSellIdentifier function', () => {
    it('should get upSell identifier', () => {
      expect(getUpSellProduct().getUpSellIdentifier()).toBe(upSellProductMock.upSellIdentifier);
    });  
  });

  describe('getTotalPrice function', () => {
    it('should get total price', () => {
      expect(getUpSellProduct().getTotalPrice()).toBe(398);
    });  
  });

  describe('isFlexiTicket function', () => {
    it('should check that upSell product is flexiTicket', () => {
      expect(getUpSellProduct().isFlexiTicket()).toBe(true);
    });  
  });
});
