import { Order } from '../order';
import { bookingDataMock } from '../../__mocks__';
import { PaymentType } from "../../typings";

describe('Order model', () => {
  const getOrder = () => {
    return new Order(bookingDataMock);
  };

  describe('getBasketReference function', () => {
    it('should get basket reference', () => {
      const order = getOrder();

      expect(order.getBasketReference()).toBe(bookingDataMock.reference);
    });
  });

  describe('getBillingAddress function', () => {
    it('should get billing address', () => {
      const order = getOrder();

      expect(order.getBillingAddress()).toBe(bookingDataMock.billingAddress);
    });
  });

  describe('getChannelId function', () => {
    it('should get channel id', () => {
      const order = getOrder();

      expect(order.getChannelId()).toBe(bookingDataMock.channelId);
    });
  });

  describe('getDeliveryAddress function', () => {
    it('should get delivery address', () => {
      const order = getOrder();

      expect(order.getDeliveryAddress()).toBe(bookingDataMock.deliveryAddress);
    });
  });

  describe('getDeliveryCharge function', () => {
    it('should get delivery charge', () => {
      const order = getOrder();

      expect(order.getDeliveryCharge()).toBe(bookingDataMock.deliveryCharge);
    });
  });

  describe('getDeliveryMethod function', () => {
    it('should get delivery method', () => {
      const order = getOrder();

      expect(order.getDeliveryMethod()).toBe(bookingDataMock.deliveryMethod);
    });
  });

  describe('getGiftVoucherMessage function', () => {
    it('should get gift voucher message', () => {
      const order = getOrder();

      expect(order.getGiftVoucherMessage()).toBe(bookingDataMock.giftVoucherMessage);
    });
  });

  describe('getOriginUrl function', () => {
    it('should get origin url', () => {
      const order = getOrder();

      expect(order.getOriginUrl()).toBe(bookingDataMock.origin);
    });
  });

  describe('getPaymentType function', () => {
    it('should get payment type', () => {
      const order = getOrder();

      expect(order.getPaymentType()).toBe(bookingDataMock.paymentType);
    });
  });

  describe('getRecipientName function', () => {
    it('should get recipient name', () => {
      const order = getOrder();

      expect(order.getRecipientName()).toBe(bookingDataMock.recipientName);
    });
  });

  describe('getShopperEntity function', () => {
    it('should get shopper entity', () => {
      const order = getOrder();

      expect(order.getShopperEntity()).toBe(bookingDataMock.shopper);
    });
  });

  describe('isWithFlexiTickets function', () => {
    it('should check if there are flexi tickets', () => {
      const order = getOrder();

      expect(order.isWithFlexiTickets()).toBe(bookingDataMock.hasFlexiTickets);
    });
  });

  describe('setBillingAddress function', () => {
    it('should set new billing address', () => {
      const order = getOrder();

      expect(order.getBillingAddress()).toBe(bookingDataMock.billingAddress);

      order.setBillingAddress({ countryCode: 'UK' });

      expect(order.getBillingAddress()).toEqual({ countryCode: 'UK' });
    });
  });

  describe('setDeliveryAddress function', () => {
    it('should set new delivery address', () => {
      const order = getOrder();

      expect(order.getDeliveryAddress()).toBe(bookingDataMock.deliveryAddress);

      order.setDeliveryAddress({ countryCode: 'UK' });

      expect(order.getDeliveryAddress()).toEqual({ countryCode: 'UK' });
    });
  });

  describe('setDeliveryMethod function', () => {
    it('should set new delivery method', () => {
      const order = getOrder();

      expect(order.getDeliveryMethod()).toBe(bookingDataMock.deliveryMethod);

      order.setDeliveryMethod('M');

      expect(order.getDeliveryMethod()).toBe('M');
    });
  });

  describe('setGiftVoucherMessage function', () => {
    it('should set new gift message', () => {
      const order = getOrder();

      expect(order.getGiftVoucherMessage()).toBe(bookingDataMock.giftVoucherMessage);

      order.setGiftVoucherMessage('Hello, my friend!');

      expect(order.getGiftVoucherMessage()).toBe('Hello, my friend!');
    });
  });

  describe('setPaymentType function', () => {
    it('should set new payment type', () => {
      const order = getOrder();

      expect(order.getPaymentType()).toBe(bookingDataMock.paymentType);

      order.setPaymentType(PaymentType.Account);

      expect(order.getPaymentType()).toBe(PaymentType.Account);
    });
  });

  describe('setRecipientName function', () => {
    it('should set new recipient name', () => {
      const order = getOrder();

      expect(order.getRecipientName()).toBe(bookingDataMock.recipientName);

      order.setRecipientName('John Doe');

      expect(order.getRecipientName()).toBe('John Doe');
    });
  });

  describe('setShopperEntity function', () => {
    it('should set new shopper entity', () => {
      const order = getOrder();
      const shopperEnity = {
        email: 'email.com',
        firstName: 'First Name',
        lastName: 'Last Name',
        telephoneNumber: '+1111111111',
        externalId: '1234567',
      }

      expect(order.getShopperEntity()).toEqual(bookingDataMock.shopper);

      order.setShopperEntity(shopperEnity);

      expect(order.getShopperEntity()).toEqual(shopperEnity);
    });
  });
});
