import moment, { Moment } from 'moment';
import { BasketItemsCollection } from './basket-items-collection';
import { BasketItem } from './basket-item';
import { Delivery } from './delivery';
import { basketDetailsRepositoryProvider } from '../services/basket-details-repository-provider';
import { checkRequiredProperty } from '../../utils/validator';
import {
  BasketData,
  BasketLocationType,
  BasketStatus,
  DeliveryData,
  UpsellApiProductData,
  ProductType,
  BasketItemData,
  PaymentCaptureType,
} from '../typings';
import { Amount } from 'src/shared/typings';

export class Basket {
  private readonly itemsCollection: BasketItemsCollection;
  private readonly expiredAt: Moment;
  private readonly status: BasketStatus;
  private readonly reference: string;
  private readonly checksum: string;
  private readonly orderConfirmationNumber: string;
  private readonly orderFee: Amount | null;
  private readonly paymentCaptureType?: string;
  private basketData: BasketData;
  private deliveries: Promise<Delivery[]>;
  private repository = basketDetailsRepositoryProvider.getRepository();

  constructor (basketData: BasketData) {
    checkRequiredProperty(basketData, 'Basket: basket data');

    this.basketData = basketData;

    const {
      reservations,
      expiredAt,
      status,
      reference,
      checksum,
      orderConfirmationNumber,
      paymentCaptureType,
      orderFee,
    } = this.basketData;

    if (!reservations) {
      throw new Error('Basket: there are not reservations in the basket data');
    }

    this.itemsCollection = new BasketItemsCollection(reservations);
    this.expiredAt = moment(expiredAt);
    this.status = status;
    this.reference = reference;
    this.checksum = checksum;
    this.orderConfirmationNumber = orderConfirmationNumber;
    this.orderFee = orderFee;
    this.paymentCaptureType = paymentCaptureType;
  }

  // for supporting IE11
  getExpiredDate () {
    return this.expiredAt;
  }

  isExpired () {
    return (
      this.status === BasketStatus.Expired ||
      this.getExpiredDate().valueOf() < moment().valueOf()
    );
  }

  isPaid () {
    return this.status === BasketStatus.Confirmed;
  }

  isCancelled () {
    return this.status === BasketStatus.Cancelled;
  }

  isPaymentCaptureDeferred () {
    return this.paymentCaptureType === PaymentCaptureType.Pending;
  }

  getReference () {
    return this.reference;
  }

  getOrderConfirmationNumber () {
    return this.orderConfirmationNumber;
  }

  getChecksum () {
    return this.checksum;
  }

  getItemsCollection () {
    return this.itemsCollection;
  }

  setShopperCurrency (currency: string) {
    checkRequiredProperty(currency, 'setShopperCurrency: currency');

    this.basketData.shopperCurrency = currency;
  }

  getShopperCurrency () {
    return this.basketData.shopperCurrency;
  }

  setChosenDelivery (delivery: DeliveryData | null) {
    this.basketData.delivery = delivery;
  }

  getChosenDelivery () {
    return this.basketData.delivery;
  }

  setDeliveries (deliveries: Promise<Delivery[]>) {
    checkRequiredProperty(deliveries, 'setDeliveries: promise with deliveries');

    this.deliveries = deliveries;
  }

  async getDeliveries () {
    if (!this.deliveries) {
      this.deliveries = this.repository.getDeliveries(
        this.getReference(),
        this.getItemsCollection(),
        this.basketData.channelId
      );
    }

    return this.deliveries;
  }

  isEmpty () {
    return !this.itemsCollection.getLength();
  }

  getTotalPrice () {
    return this.reduceBasketItemsAmount(
      (totalPrice, item) => totalPrice + item.getTotalPrice()
    );
  }

  isTotalPriceZero () {
    return this.getTotalPrice() === 0;
  }

  getTotalDiscount () {
    return this.reduceBasketItemsAmount(
      (totalPrice, item) => totalPrice + item.getDiscount()
    );
  }

  getTotalPromotionDiscount () {
    return this.reduceBasketItemsAmount(
      (totalPrice, item) => totalPrice + item.getPromotionDiscount()
    );
  }

  getTotalPriceBeforeDiscount () {
    return this.reduceBasketItemsAmount(
      (totalPrice, item) => totalPrice + item.getPriceBeforeDiscount()
    );
  }

  hasDiscount () {
    return this.itemsCollection.getItems().some((item) => item.hasDiscount());
  }

  getBasketData () {
    return this.basketData;
  }

  getUKShows () {
    const tickets = this.itemsCollection.getTickets();
    const countryCodePromises = tickets.map((ticket) =>
      ticket.getCountryCode()
    );

    return Promise.all(countryCodePromises).then((countryCodes) => {
      return countryCodes.filter((countryCode) => {
        return countryCode === BasketLocationType.UK;
      });
    });
  }

  getUSShows () {
    const tickets = this.itemsCollection.getTickets();
    const countryCodePromises = tickets.map((ticket) =>
      ticket.getCountryCode()
    );

    return Promise.all(countryCodePromises).then((countryCodes) => {
      return countryCodes.filter((countryCode) => {
        return countryCode === BasketLocationType.USA;
      });
    });
  }

  isMixedBasket () {
    return !!this.basketData.mixed;
  }

  areFlexiTicketsAllowed () {
    return this.basketData.allowFlexiTickets;
  }

  getAppliedPromotion () {
    return this.basketData.appliedPromotion;
  }

  getMissedPromotion () {
    return this.basketData.missedPromotions;
  }

  getCouponForPromotion () {
    return this.basketData.coupon;
  }

  hasCouponForPromotion () {
    return !!this.getCouponForPromotion();
  }

  hasAppliedPromotion () {
    return !!this.getAppliedPromotion();
  }

  getPromotionCode () {
    return this.basketData.coupon ? this.basketData.coupon.code : '';
  }

  setChannelId (channelId: string) {
    checkRequiredProperty(channelId, 'setChannelId: channel id');

    this.basketData.channelId = channelId;
  }

  getChannelId () {
    return this.basketData.channelId;
  }

  getLocation () {
    return this.basketData.location;
  }

  getOrderFee () {
    return this.orderFee;
  }

  prepareBasketData (upsellProducts?: UpsellApiProductData) {
    const { reservations } = this.basketData;
    const itemsCollection = new BasketItemsCollection(reservations);
    const filteredReservations = itemsCollection
      .getItems()
      .filter((basketItem) => basketItem.isTicket());
    const flexiTickets = itemsCollection.getFlexitickets();

    return {
      ...this.basketData,
      reservations: this.prepareBasketReservation(
        filteredReservations,
        flexiTickets,
        upsellProducts
      ),
    };
  }

  replaceBasketData (basketItems: BasketItemData[]) {
    checkRequiredProperty(
      basketItems,
      'replaceBasketData: basket items collection'
    );

    const itemsCollection = new BasketItemsCollection(basketItems);
    const filteredReservations = itemsCollection
      .getItems()
      .filter((basketItem) => basketItem.isTicket());
    const flexiTickets = itemsCollection.getFlexitickets();

    return {
      ...this.basketData,
      reservations: this.prepareBasketReservation(
        filteredReservations,
        flexiTickets
      ),
    };
  }

  private prepareBasketReservation (
    filteredReservations: any,
    flexiTickets: BasketItem[],
    upsellProducts?: UpsellApiProductData
  ) {
    return filteredReservations.map((basketItem: BasketItem) => {
      const items = basketItem.getSeats();

      if (!items) {
        return;
      }

      items.map((item: any) => ({
        aggregateReference: item.aggregateReference,
      }));
      let flexiItems = [];
      const upsellProductForItem =
        upsellProducts && upsellProducts[basketItem.getId()];

      if (upsellProductForItem) {
        const flexiTicketsForItem = upsellProductForItem.filter(
          (upsellProduct) =>
            upsellProduct.productType === ProductType.Flexitickets
        );

        flexiItems = flexiTicketsForItem.map((item) => ({
          aggregateReference: item.aggregateReference,
        }));
      } else {
        flexiItems = this.getLinkedFlexiItems(flexiTickets, basketItem);
      }

      return {
        venueId: basketItem.getVenueId(),
        productId: basketItem.getProductId(),
        date: basketItem.getRawDate(),
        quantity: basketItem.getQuantity(),
        items,
        flexiItems,
      };
    });
  }

  private getLinkedFlexiItems (
    flexiTickets: BasketItem[],
    parentBasketItem: BasketItem
  ) {
    const linkedFlexiTickets = flexiTickets.find((item) => {
      const linkedReservationId = item.getLinkedReservationId();
      const parentBasketItemId = parentBasketItem.getId();

      if (!linkedReservationId || !parentBasketItemId) {
        return false;
      }

      return linkedReservationId.toString() === parentBasketItemId.toString();
    });

    if (!linkedFlexiTickets) {
      return [];
    }

    return (linkedFlexiTickets.getSeats() || []).map((item: any) => ({
      aggregateReference: item.aggregateReference,
    }));
  }

  private reduceBasketItemsAmount (
    reducer: (accumulator: number, currentValue: BasketItem) => number
  ) {
    return this.itemsCollection.getItems().reduce(reducer, 0);
  }
}
