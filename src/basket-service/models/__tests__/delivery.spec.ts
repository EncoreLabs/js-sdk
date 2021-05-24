import { basketDataMock, deliveriesMock } from '../../__mocks__';
import { BasketItemsCollection } from '../basket-items-collection';
import { Delivery } from '../delivery';
import { deliverySettings } from '../../constants/delivery-settings';
import { DeliveryMethod, ProductType } from '../../typings';

const [ deliveryData ] = deliveriesMock;
const getDelivery = (
  productType = ProductType.GiftVoucher,
  deliveryMethod = DeliveryMethod.Collection,
  basketItems = basketDataMock.reservations,
) => {
  deliveryData.method = deliveryMethod;

  basketItems[0].productType = productType;
  const basketItemsCollection = new BasketItemsCollection(basketItems);

  return new Delivery(deliveryData, basketItemsCollection);
};

describe('Delivery', () => {
  describe('getAmount function', () => {
    it('should return amount', () => {
      const delivery = getDelivery();

      expect(delivery.getAmount()).toBe(deliveryData.charge);
    });
  });

  describe('getMethod function', () => {
    it('should return method', () => {
      const delivery = getDelivery();

      expect(delivery.getMethod()).toBe(deliveryData.method);
    });
  });

  describe('getName function', () => {
    const collectionDeliverySettings = deliverySettings[DeliveryMethod.Collection];

    it('should get voucher name', () => {
      const delivery = getDelivery();

      expect(delivery.getName()).toBe(collectionDeliverySettings.voucherName);
    });

    it('should get attraction name', () => {
      const attractionItems = [ basketDataMock.reservations[0] ];
      const delivery = getDelivery(ProductType.Attraction, DeliveryMethod.Collection, attractionItems);

      expect(delivery.getName()).toBe(collectionDeliverySettings.attractionName);
    });

    it('should get show name', () => {
      const delivery = getDelivery(ProductType.Show);

      expect(delivery.getName()).toBe(collectionDeliverySettings.name);
    });

    it('should get eTicket name', () => {
      const eTicketCode = DeliveryMethod.Eticket;
      const delivery = getDelivery(ProductType.Show, eTicketCode);

      expect(delivery.getName()).toBe(deliverySettings[eTicketCode].name);
    });

    it('should get postage name', () => {
      const postageCode = DeliveryMethod.Postage;
      const delivery = getDelivery(ProductType.Show, postageCode);

      expect(delivery.getName()).toBe(deliverySettings[postageCode].name);
    });
  });

  describe('getPrePurchaseText function', () => {
    it('should return pre-purchase text', () => {
      const delivery = getDelivery();

      expect(delivery.getPrePurchaseText()).toBe(deliveryData.prePurchaseText);
    });
  });

  describe('getPostPurchaseText function', () => {
    it('should return post-purchase text', () => {
      const delivery = getDelivery();

      expect(delivery.getPostPurchaseText()).toBe(deliveryData.postPurchaseText);
    });
  });
});
