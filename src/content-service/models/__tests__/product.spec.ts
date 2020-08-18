import { Product } from '../product';
import { Venue } from '../venue';
import { ShowType } from '../show-type';
import { apiProductDataMock } from '../../../__mocks__/product-data';

describe('Product model', () => {
  const getProduct = (customData: any = {}) => {
    return new Product({
      ...apiProductDataMock,
      ...customData,
    });
  };

  describe('getId function', () => {
    it('should get product id', () => {
      const product = getProduct();

      expect(product.getId()).toBe(apiProductDataMock.id);
    });
  });

  describe('getName function', () => {
    it('should get product name', () => {
      const product = getProduct();

      expect(product.getName()).toBe(apiProductDataMock.name);
    });
  });

  describe('getType function', () => {
    it('should get type of product', () => {
      const product = getProduct();

      expect(product.getType()).toEqual(new ShowType(apiProductDataMock.showType).getType());
    });

    it('should return null if show type is not defined', () => {
      const product = getProduct({ showType: null });

      expect(product.getType()).toBeNull();
    });
  });

  describe('getVenue function', () => {
    it('should get product venue details', () => {
      const product = getProduct();

      expect(product.getVenue()).toEqual(new Venue(apiProductDataMock.venue));
    });

    it('should return null if venue is not defined', () => {
      const product = getProduct({ venue: null });

      expect(product.getVenue()).toBeNull();
    });
  });

  describe('needShowFaceValue function', () => {
    it('should check that product should show face value', () => {
      const product = getProduct();

      expect(product.needShowFaceValue()).toBe(apiProductDataMock.showFaceValue);
    });
  });
});
