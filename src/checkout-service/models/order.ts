import { checkRequiredProperty } from '../../utils/validator';
import { ApiAddress, ApiBookingData, ApiDeliveryMethodCheckout, PaymentType, ApiShopper } from '../typings';

export class Order {
  private bookingData: ApiBookingData;
  private recipientName: string;
  private giftVoucherMessage: string;
  private deliveryAddress: ApiAddress;
  private paymentType: PaymentType;
  private shopper: ApiShopper;
  private billingAddress: ApiAddress;
  private deliveryMethod: ApiDeliveryMethodCheckout;
  private readonly reference: string;
  private readonly channelId: string;
  private readonly origin: string;
  private readonly redirectUrl: string;
  private readonly deliveryCharge: number;
  private readonly hasFlexiTickets: boolean;

  constructor (bookingData: ApiBookingData) {
    checkRequiredProperty(bookingData, 'Order: booking data');

    this.bookingData = bookingData;

    const {
      reference,
      channelId,
      origin,
      redirectUrl,
      deliveryCharge,
      recipientName,
      giftVoucherMessage,
      deliveryAddress,
      hasFlexiTickets,
      paymentType,
      shopper,
      billingAddress,
      deliveryMethod,
    } = this.bookingData;
    this.reference = reference;
    this.channelId = channelId;
    this.origin = origin;
    this.redirectUrl = redirectUrl;
    this.deliveryCharge = deliveryCharge;
    this.recipientName = recipientName;
    this.giftVoucherMessage = giftVoucherMessage;
    this.deliveryAddress = deliveryAddress;
    this.hasFlexiTickets = hasFlexiTickets;
    this.paymentType = paymentType;
    this.shopper = shopper;
    this.billingAddress = billingAddress;
    this.deliveryMethod = deliveryMethod;
  }

  getBasketReference () {
    return this.reference;
  }

  getChannelId () {
    return this.channelId;
  }

  getOriginUrl () {
    return this.origin;
  }

  getDeliveryCharge () {
    return this.deliveryCharge;
  }

  getRecipientName () {
    return this.recipientName;
  }

  getGiftVoucherMessage () {
    return this.giftVoucherMessage;
  }

  getDeliveryAddress () {
    return this.deliveryAddress;
  }

  isWithFlexiTickets () {
    return this.hasFlexiTickets;
  }

  getPaymentType () {
    return this.paymentType;
  }

  getShopperEntity () {
    return this.shopper;
  }

  getBillingAddress () {
    return this.billingAddress;
  }

  getDeliveryMethod () {
    return this.deliveryMethod;
  }

  setRecipientName (name: string) {
    checkRequiredProperty(name, 'setRecipientName: name');

    this.recipientName = name;
  }

  setGiftVoucherMessage (message: string) {
    checkRequiredProperty(message, 'setGiftVoucherMessage: message');

    this.giftVoucherMessage = message;
  }

  setDeliveryAddress (address: ApiAddress) {
    checkRequiredProperty(address, 'setDeliveryAddress: address');

    this.deliveryAddress = address;
  }

  setPaymentType (type: PaymentType) {
    checkRequiredProperty(type, 'setPaymentType: type');

    this.paymentType = type;
  }

  setShopperEntity (shopper: ApiShopper) {
    checkRequiredProperty(shopper, 'setShopperEntity: shopper');

    this.shopper = shopper;
  }

  setBillingAddress (address: ApiAddress) {
    checkRequiredProperty(address, 'setBillingAddress: address');

    this.billingAddress = address;
  }

  setDeliveryMethod (method: ApiDeliveryMethodCheckout) {
    checkRequiredProperty(method, 'setDeliveryMethod: method');

    this.deliveryMethod = method;
  }
}
