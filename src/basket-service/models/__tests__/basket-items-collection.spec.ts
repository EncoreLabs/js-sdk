import { basketDataMock } from '../../__mocks__';
import { BasketItemsCollection } from '..';
import { BasketItem } from '../basket-item';
import { ProductType } from '../../typings';

const basketItems = basketDataMock.reservations;
const getBasketItemsCollection = (productType = ProductType.Show) => {
  basketItems.forEach(item => {
    item.productType = productType;
  });

  return new BasketItemsCollection(basketItems);
};

describe('Basket items collection', () => {
  describe('getItems function', () => {
    it('should get basket items', () => {
      expect(getBasketItemsCollection().getItems()).toEqual(
        basketItems.map(basketItemData => new BasketItem(basketItemData))
      );
    });  
  });

  describe('hasVoucher function', () => {
    it('should get voucher existence', () => {
      expect(getBasketItemsCollection(ProductType.GiftVoucher).hasVoucher()).toBe(true);
      expect(getBasketItemsCollection().hasVoucher()).toBe(false);
    });
  });

  describe('hasPostage function', () => {
    it('should get postage existence', () => {
      expect(getBasketItemsCollection(ProductType.Postage).hasPostage()).toBe(true);
      expect(getBasketItemsCollection().hasPostage()).toBe(false);
    });
  });

  describe('hasFlexiticket function', () => {
    it('should get flexiticket existence', () => {
      expect(getBasketItemsCollection(ProductType.Flexitickets).hasFlexiticket()).toBe(true);
      expect(getBasketItemsCollection().hasFlexiticket()).toBe(false);
    });
  });

  describe('hasShow function', () => {
    it('should get show existence', () => {
      expect(getBasketItemsCollection().hasShow()).toBe(true);
      expect(getBasketItemsCollection(ProductType.Attraction).hasShow()).toBe(false);
    });
  });

  describe('hasAttraction function', () => {
    it('should get attraction existence', () => {
      expect(getBasketItemsCollection(ProductType.Attraction).hasAttraction()).toBe(true);
      expect(getBasketItemsCollection().hasAttraction()).toBe(false);
    });
  });

  describe('getLength function', () => {
    it('should get items length', () => {
      expect(getBasketItemsCollection().getLength()).toBe(2);
    });
  });

  describe('getAttractions function', () => {
    it('should get attractions', () => {
      expect(getBasketItemsCollection().getAttractions().length).toBe(0);
      expect(getBasketItemsCollection(ProductType.Attraction).getAttractions().length).toBe(2);
    });
  });

  describe('getFlexitickets function', () => {
    it('should get flexitickets', () => {
      const flexitickets = getBasketItemsCollection(ProductType.Flexitickets).getFlexitickets();

      expect(getBasketItemsCollection().getFlexitickets().length).toBe(0);
      expect(flexitickets.length).toBe(2);
    });

    it('should get tickets with flexitickets', () => {
      const basketItemsCollection = basketDataMock.reservations;
  
      basketItemsCollection[0].productType = ProductType.Flexitickets;
  
      const basketItemsWithFlexiticket = new BasketItemsCollection(basketItemsCollection);
  
      expect(getBasketItemsCollection().getTicketsWithFlexiticket().length).toBe(2);
      expect(basketItemsWithFlexiticket.getFlexitickets().length).toBe(1);
    });
  });

  describe('getPostage function', () => {
    it('should get postage', () => {
      expect(getBasketItemsCollection().getPostage()).toBeUndefined();
      expect(getBasketItemsCollection(ProductType.Postage).getPostage()).toBeDefined();
    });
  });

  describe('getTickets function', () => {
    it('should get tickets', () => {
      expect(getBasketItemsCollection().getTickets().length).toBe(2);
      expect(getBasketItemsCollection(ProductType.Flexitickets).getTickets().length).toBe(0);
    });
  });

  describe('getTicketsWithFlexiticket function', () => {
    it('should get tickets and flexitickets', () => {
      expect(getBasketItemsCollection().getTicketsWithFlexiticket().length).toBe(2);
      expect(getBasketItemsCollection(ProductType.Flexitickets).getTicketsWithFlexiticket().length).toBe(2);
    });
  });
});
