import { ShowType } from '../show-type';
import { apiProductDataMock } from '../../../__mocks__/product-data';

describe('Show Type model', () => {
  const getShowType = () => {
    return new ShowType(apiProductDataMock.showType);
  };

  describe('getId function', () => {
    it('should get show type id', () => {
      const showType = getShowType();

      expect(showType.getId()).toBe(apiProductDataMock.showType.id);
    });
  });

  describe('getType function', () => {
    it('should get type of show', () => {
      const showType = getShowType();

      expect(showType.getType()).toBe(apiProductDataMock.showType.type);
    });
  });
});
