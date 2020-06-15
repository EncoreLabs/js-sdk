import { upSellCollectionMock } from '../../__mocks__';
import { UpsellCollection } from '../upsell-collection';
import { UpsellProduct } from '../upsell-product';

const getUpSellCollection = () => {
  return new UpsellCollection(upSellCollectionMock);
};

describe('UpSell Collection', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should prepare models for upSell products', () => {
    const { displayCurrency, upSellItems } = upSellCollectionMock;
    const upSellProducts = getUpSellCollection().prepareUpsellProducts(upSellItems, displayCurrency);

    expect(upSellProducts).toHaveLength(upSellItems.length);
    upSellProducts.forEach(upSellProduct => {
      expect(upSellProduct instanceof UpsellProduct).toBe(true);
    });
  });

  it('should check that collection have at least one flexiTicket', () => {
    expect(getUpSellCollection().hasFlexiTicket()).toBe(true);
  });

  it('should get flexiTickets from the collection', () => {
    expect(getUpSellCollection().getFlexiTickets()).toHaveLength(upSellCollectionMock.upSellItems.length);
  });

  it('should get model for upSell collection', () => {
    const upSellProducts = getUpSellCollection().getCollection();

    expect(upSellProducts).toHaveLength(upSellCollectionMock.upSellItems.length);
    upSellProducts.forEach(upSellProduct => {
      expect(upSellProduct instanceof UpsellProduct).toBe(true);
    });
  });
});
