import { Amount } from '../../shared/typings';
import { DeliveryMethod, DeliveryData } from '../typings';
import { BasketItemsCollection } from './basket-items-collection';
import { deliverySettings } from '../constants/delivery-settings';
import { checkRequiredProperty } from "../../utils/validator";

export class Delivery {
  private readonly amount: Amount;
  private readonly method: DeliveryMethod;
  private name: string;

  constructor (
    deliveryData: DeliveryData,
    itemsToDeliver: BasketItemsCollection,
  ) {
    checkRequiredProperty(deliveryData, 'Delivery: delivery data');
    checkRequiredProperty(itemsToDeliver, 'Delivery: collection with items to deliver');

    const { method, charge } = deliveryData;

    this.amount = charge;
    this.method = method;
    this.setName(itemsToDeliver);
  }

  getAmount () {
    return this.amount;
  }

  getMethod () {
    return this.method;
  }

  getName () {
    return this.name;
  }

  private setName (itemsToDeliver: BasketItemsCollection) {
    this.name = (this.method === DeliveryMethod.Collection)
      ? this.getCollectionDeliveryName(itemsToDeliver)
      : deliverySettings[this.method].name;
  }

  private getCollectionDeliveryName (itemsToDeliver: BasketItemsCollection) {
    const collectionDeliverySettings = deliverySettings[DeliveryMethod.Collection];

    if (itemsToDeliver.hasVoucher()) {
      return collectionDeliverySettings.voucherName;
    }

    if (itemsToDeliver.hasAttraction() && !itemsToDeliver.hasShow()) {
      return collectionDeliverySettings.attractionName;
    }

    return collectionDeliverySettings.name;
  }
}
