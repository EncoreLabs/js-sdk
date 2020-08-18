import moment from 'moment';
import { Basket } from '../basket';
import { BasketItemsCollection } from '../basket-items-collection';
import { BasketItemData, BasketStatus, DeliveryMethod, ProductType } from '../../typings';
import { Delivery } from '../delivery';
import { basketDataMock, basketItemDataMock } from '../../__mocks__';

const getDeliveriesData = jest.fn().mockImplementation(() => ({}));
jest.mock('../../services', () => ({
  getBasketService: () => ({ getDeliveries: getDeliveriesData })
}));

jest.mock('../../services/basket-details-repository-provider', () => ({
  basketDetailsRepositoryProvider: {
    getRepository: () => ({ getDeliveries: getDeliveriesData }),
  },
}));

const basketItemsData = basketDataMock.reservations;
const getBasket = (basketItems?: BasketItemData[]) => {
  basketDataMock.reservations = typeof basketItems === 'undefined' ? basketItemsData : basketItems;

  return new Basket({ ...basketDataMock });
};

describe('Basket', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  describe('constructor', () => {
    it('should throw an error if reservations are not defined', () => {
      expect(() => getBasket(null)).toThrowError('Basket: there are not reservations in the basket data');
    });
  });

  describe('getExpiredDate function', () => {
    it('should return expiration date', () => {
      expect(getBasket().getExpiredDate()).toEqual(moment(basketDataMock.expiredAt));
    });
  });

  describe('isExpired function', () => {
    it('should check that basket expired', () => {
      const basket = getBasket();
      const basketDataMockWithExpiredStatus = basketDataMock;
      basketDataMockWithExpiredStatus.status = BasketStatus.Expired;
      const basketWithExpiredStatus = new Basket(basketDataMockWithExpiredStatus);
  
      const basketDataMockWithExpiredDate = basketDataMock;
      basketDataMockWithExpiredDate.expiredAt = new Date('2000 01 01').toString();
      const basketWithExpiredDate = new Basket(basketDataMockWithExpiredDate);
  
      expect(basket.isExpired()).toBe(false);
      expect(basketWithExpiredStatus.isExpired()).toBe(true);
      expect(basketWithExpiredDate.isExpired()).toBe(true);
    });
  });

  describe('isPaid function', () => {
    it('should check that basket paid', () => {
      const basket = getBasket();
      const basketDataMockWithExpiredStatus = basketDataMock;
      basketDataMockWithExpiredStatus.status = BasketStatus.Confirmed;
      const basketWithExpiredStatus = new Basket(basketDataMockWithExpiredStatus);

      expect(basket.isPaid()).toBe(false);
      expect(basketWithExpiredStatus.isPaid()).toBe(true);
    });
  });

  describe('isCancelled function', () => {
    it('should check that basket paid', () => {
      const basket = getBasket();
      const basketDataMockWithExpiredStatus = basketDataMock;
      basketDataMockWithExpiredStatus.status = BasketStatus.Cancelled;
      const basketWithExpiredStatus = new Basket(basketDataMockWithExpiredStatus);

      expect(basket.isCancelled()).toBe(false);
      expect(basketWithExpiredStatus.isCancelled()).toBe(true);
    });
  });

  describe('getReference function', () => {
    it('should return basket reference', () => {
      expect(getBasket().getReference()).toEqual(basketDataMock.reference);
    });
  });

  describe('getChecksum function', () => {
    it('should return basket reference', () => {
      expect(getBasket().getChecksum()).toEqual(basketDataMock.checksum);
    });
  });

  describe('getItemsCollection function', () => {
    it('should return items collection', () => {
      expect(getBasket().getItemsCollection()).toEqual(new BasketItemsCollection(basketItemsData));
    });
  });

  describe('setShopperCurrency function', () => {
    it('should set shopper currency', () => {
      const basket = getBasket();
      basket.setShopperCurrency('USD');

      expect(basket.getShopperCurrency()).toEqual('USD');
    });
  });

  describe('getShopperCurrency function', () => {
    it('should get shopper currency', () => {
      const basket = getBasket();

      expect(basket.getShopperCurrency()).toEqual('GBP');
    });
  });

  describe('setChosenDelivery function', () => {
    it('should set delivery option', () => {
      const basket = getBasket();

      const newDelivery = { ...basketDataMock.delivery, method: DeliveryMethod.Postage };
      basket.setChosenDelivery(newDelivery);

      expect(basket.getChosenDelivery()).toEqual(newDelivery);
    });
  });

  describe('getChosenDelivery function', () => {
    it('should get delivery option', () => {
      const basket = getBasket();

      expect(basket.getChosenDelivery()).toEqual(basketDataMock.delivery);
    });
  });

  describe('getDeliveries function', () => {
    it('should get deliveries from repository', async () => {
      await getBasket().getDeliveries();

      expect(getDeliveriesData).toHaveBeenCalledTimes(1);
      expect(getDeliveriesData).toHaveBeenCalledWith(basketDataMock.reference, new BasketItemsCollection(basketDataMock.reservations));
    });

    it('should not request deliveries on second call', async () => {
      const basketItem = getBasket();
      await basketItem.getDeliveries();
      await basketItem.getDeliveries();

      expect(getDeliveriesData).toHaveBeenCalledTimes(1);
    });
  });

  describe('setDeliveries functions', () => {
    it('should set deliveries', async () => {
      const deliveries = new Promise(() => []);
      const basketItem = getBasket();
      await basketItem.setDeliveries(deliveries as Promise<Delivery[]>);

      expect(basketItem.getDeliveries()).toEqual(deliveries);
    });
  });

  describe('isEmpty function', () => {
    it('should get if basket is empty', () => {
      expect(getBasket().isEmpty()).toBe(false);
      expect(getBasket([]).isEmpty()).toBe(true);
    });  
  });

  describe('getTotalPrice function', () => {
    it('should get total price', () => {
      expect(getBasket().getTotalPrice()).toBe(1000);
    });  
  });

  describe('getTotalDiscount function', () => {
    it('should get total discount', () => {
      expect(getBasket().getTotalDiscount()).toBe(600);
    });
  });

  describe('getTotalPromotionDiscount function', () => {
    it('should get total promotion discount', () => {
      expect(getBasket().getTotalPromotionDiscount()).toBe(400);
    });
  });

  describe('getTotalPriceBeforeDiscount function', () => {
    it('should get total price before discount', () => {
      expect(getBasket().getTotalPriceBeforeDiscount()).toBe(2000);
    });  
  });

  describe('hasDiscount function', () => {
    it('should get if basket has discount', () => {
      expect(getBasket().hasDiscount()).toBe(true);
      expect(getBasket([]).hasDiscount()).toBe(false);
    });  
  });

  describe('getbasketDataMock function', () => {
    it('should return basket data', () => {
      expect(getBasket().getBasketData()).toEqual(basketDataMock);
    });
  });

  describe('getUKShows function', () => {
    it('should return tickets for UK shows', async () => {
      const basket = getBasket();
      basket.getItemsCollection().getTickets().map(item => (item.getCountryCode as any) = () => Promise.resolve('GBR'));
      const ukShows = await basket.getUKShows();

      expect(ukShows.length).toBe(2);
    });
  });

  describe('getUSShows function', () => {
    it('should return tickets for US shows', async () => {
      const basket = getBasket();
      basket.getItemsCollection().getTickets().map(item => (item.getCountryCode as any) = () => Promise.resolve('USA'));
      const usShows = await basket.getUSShows();

      expect(usShows.length).toBe(2);
    });
  });

  describe('isMixedBasket function', () => {
    it('should check that basket has mixed tickets', () => {
      expect(getBasket().isMixedBasket()).toBe(false);
      expect(new Basket({ ...basketDataMock, mixed: true }).isMixedBasket()).toBe(true);
    });
  });

  describe('getAppliedPromotion function', () => {
    it('should return applied promotion', () => {
      expect(getBasket().getAppliedPromotion()).toBe(basketDataMock.appliedPromotion);
    });
  });

  describe('getMissedPromotion function', () => {
    it('should return missed promotion', () => {
      const missedPromotions = [basketDataMock.appliedPromotion];

      expect(getBasket().getMissedPromotion()).toBeUndefined();
      expect(new Basket({ ...basketDataMock, missedPromotions }).getMissedPromotion()).toBe(missedPromotions);
    });
  });

  describe('getCouponForPromotion function', () => {
    it('should return coupon for promotion', () => {
      expect(getBasket().getCouponForPromotion()).toBe(basketDataMock.coupon);
    });
  });

  describe('hasCouponForPromotion function', () => {
    it('should check that coupon for promotion is set', () => {
      expect(getBasket().hasCouponForPromotion()).toBe(true);
      expect(new Basket({ ...basketDataMock, coupon: null }).hasCouponForPromotion()).toBe(false);
    });
  });

  describe('hasAppliedPromotion function', () => {
    it('should check that promotion was applied', () => {
      expect(getBasket().hasAppliedPromotion()).toBe(true);
      expect(new Basket({ ...basketDataMock, appliedPromotion: null }).hasAppliedPromotion()).toBe(false);
    });
  });

  describe('getPromotionCode function', () => {
    it('should return promotion code', () => {
      expect(getBasket().getPromotionCode()).toBe(basketDataMock.coupon.code);
      expect(new Basket({ ...basketDataMock, coupon: null }).getPromotionCode()).toEqual('');
    });
  });

  describe('setChannelId function', () => {
    it('should set channel id', () => {
      const basket = getBasket();

      const newChannelId = 'londontheatredd';
      basket.setChannelId(newChannelId);

      expect(basket.getChannelId()).toEqual(newChannelId);
    });
  });

  describe('getChannelId function', () => {
    it('should get channel id', () => {
      expect(getBasket().getChannelId()).toEqual(basketDataMock.channelId);
    });
  });

  describe('prepareBasketData function', () => {
    it('should map basket items into reservations', () => {
      expect(getBasket().prepareBasketData().reservations).toEqual([
        {
          venueId: '199',
          productId: '1001',
          date: '2020-01-01T19:30:00+02:00',
          quantity: 10,
          items: basketItemDataMock.items,
          flexiItems: [],
        },
        {
          venueId: '199',
          productId: '1001',
          date: '2020-01-01T19:30:00+02:00',
          quantity: 10,
          items: basketItemDataMock.items,
          flexiItems: [],
        },
      ]);
    });

    it('should ignore tickets without seats', () => {
      const basketItemsWithTicketWithoutSeats = JSON.parse(JSON.stringify(basketItemsData));
      basketItemsWithTicketWithoutSeats[0].items = null;
      const basket = getBasket(basketItemsWithTicketWithoutSeats);

      expect(basket.prepareBasketData().reservations).toEqual([
        undefined,
        {
          venueId: '199',
          productId: '1001',
          date: '2020-01-01T19:30:00+02:00',
          quantity: 10,
          items: basketItemDataMock.items,
          flexiItems: [],
        },
      ]);
    });

    it('should return ticket with upsell products', () => {
      const basketItemsWithTicketWithoutSeats = JSON.parse(JSON.stringify(basketItemsData));
      basketItemsWithTicketWithoutSeats[1].productType = ProductType.Flexitickets;
      const basket = getBasket(basketItemsWithTicketWithoutSeats);
      const upsellProductsData = {
        '1': [{
          aggregateReference: basketItemsData[0].items[0].aggregateReference,
          productType: ProductType.Flexitickets,
        }],
      };

      expect(basket.prepareBasketData(upsellProductsData).reservations).toEqual([
        {
          venueId: '199',
          productId: '1001',
          date: '2020-01-01T19:30:00+02:00',
          quantity: 10,
          items: basketItemDataMock.items,
          flexiItems: [{
            aggregateReference: basketItemsData[0].items[0].aggregateReference,
          }],
        },
      ]);
    });

    it('should return ticket with linked flexiticket', () => {
      const basketItemsWithTicketWithoutSeats = JSON.parse(JSON.stringify(basketItemsData));
      basketItemsWithTicketWithoutSeats[1].productType = ProductType.Flexitickets;
      basketItemsWithTicketWithoutSeats[1].linkedReservationId = '1';
      const basket = getBasket(basketItemsWithTicketWithoutSeats);

      expect(basket.prepareBasketData().reservations).toEqual([
        {
          venueId: '199',
          productId: '1001',
          date: '2020-01-01T19:30:00+02:00',
          quantity: 10,
          items: basketItemDataMock.items,
          flexiItems: [{
            aggregateReference: basketItemsData[1].items[0].aggregateReference,
          }],
        },
      ]);
    });

    it('should return ticket only if flexiticket is not linked', () => {
      const basketItemsWithTicketWithoutSeats = JSON.parse(JSON.stringify(basketItemsData));
      basketItemsWithTicketWithoutSeats[1].productType = ProductType.Flexitickets;
      const basket = getBasket(basketItemsWithTicketWithoutSeats);

      expect(basket.prepareBasketData().reservations).toEqual([
        {
          venueId: '199',
          productId: '1001',
          date: '2020-01-01T19:30:00+02:00',
          quantity: 10,
          items: basketItemDataMock.items,
          flexiItems: [],
        }
      ]);
    });

    it('should return ticket without reference if flexiticket is linked but does not have items', () => {
      const basketItemsWithTicketWithoutSeats = JSON.parse(JSON.stringify(basketItemsData));
      basketItemsWithTicketWithoutSeats[1].productType = ProductType.Flexitickets;
      basketItemsWithTicketWithoutSeats[1].linkedReservationId = '1';
      basketItemsWithTicketWithoutSeats[1].items = null;
      const basket = getBasket(basketItemsWithTicketWithoutSeats);

      expect(basket.prepareBasketData().reservations).toEqual([
        {
          venueId: '199',
          productId: '1001',
          date: '2020-01-01T19:30:00+02:00',
          quantity: 10,
          items: basketItemDataMock.items,
          flexiItems: [],
        }
      ]);
    });
  });

  describe('replacebasketDataMock function', () => {
    it('should replace original basket items with new list', () => {
      const newBasketItem = {
        venueId: '138',
        productId: '1587',
        date: '2030-10-01T19:30:00+02:00',
        quantity: 2,
        items: basketItemDataMock.items,
      };

      expect(getBasket().replaceBasketData([{ ...basketItemDataMock, ...newBasketItem }]).reservations).toEqual([{
        ...newBasketItem,
        flexiItems: [],
      }]);
    });
  });
});
