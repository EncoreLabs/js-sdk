import { Product } from '../product';
import { Venue } from '../venue';
import { ShowType } from '../show-type';
import { apiProductDataMock } from '../../../__mocks__/product-data';

describe('Product model', () => {
  const getProduct = () => {
    return new Product(apiProductDataMock);
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
  });

  describe('getVenue function', () => {
    it('should get product venue details', () => {
      const product = getProduct();

      expect(product.getVenue()).toEqual(new Venue(apiProductDataMock.venue));
    });
  });

  describe('needShowFaceValue function', () => {
    it('should check that product should show face value', () => {
      const product = getProduct();

      expect(product.needShowFaceValue()).toBe(apiProductDataMock.showFaceValue);
    });
  });
});
