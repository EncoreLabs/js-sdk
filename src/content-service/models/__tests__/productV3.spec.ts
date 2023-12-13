import { ProductV3 } from "../productV3";
import { apiProductV3DataMock } from "../../../__mocks__/productV3-data";

describe('Product V3 model', () => {
  const getProductFromV3 = (customData: any = {}) => {
    return new ProductV3({
      ...apiProductV3DataMock,
      ...customData,
    });
  };

  describe('getId function', () => {
    it('should get product id', () => {
      const product = getProductFromV3();

      expect(product.getId()).toBe(apiProductV3DataMock.id);
    });
  });

  describe('getVenueChartKey function', () => {
    it('should get product name', () => {
      const product = getProductFromV3();

      expect(product.getVenueChartKey()).toBe(apiProductV3DataMock.venueChartKey);
    });
  });
});
