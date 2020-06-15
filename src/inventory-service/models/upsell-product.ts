import { checkRequiredProperty } from '../../utils/validator';
import { Amount } from '../../shared/typings';
import { ApiUpsellApiProductData, UpsellProductTypes } from '../typings';

export class UpsellProduct {
  private displayCurrency: string = 'GBP';
  private readonly aggregateReference: string;
  private readonly faceValue: Amount;
  private readonly salePrice: Amount;
  private readonly quantity: number;
  private readonly upSellIdentifier: string;

  constructor (upsellProduct: ApiUpsellApiProductData, displayCurrency: string) {
    checkRequiredProperty(upsellProduct, 'UpsellProduct: upsell product data');
    checkRequiredProperty(displayCurrency, 'UpsellProduct: display currency');

    const {
      aggregateReference,
      faceValue,
      salePrice,
      quantity,
      upSellIdentifier,
    } = upsellProduct;

    this.aggregateReference = aggregateReference;
    this.displayCurrency = displayCurrency;
    this.faceValue = this.getPrice(faceValue, displayCurrency);
    this.salePrice = this.getPrice(salePrice, displayCurrency);
    this.quantity = quantity;
    this.upSellIdentifier = upSellIdentifier;
  }

  getAggregateReference () {
    return this.aggregateReference;
  }

  getQuantity () {
    return this.quantity;
  }

  getFaceValue () {
    return this.faceValue;
  }

  getSalePrice () {
    return this.salePrice;
  }

  getUpSellIdentifier () {
    return this.upSellIdentifier;
  }

  getTotalPrice () {
    return this.salePrice.value * this.quantity;
  }

  isFlexiTicket () {
    return this.upSellIdentifier === UpsellProductTypes.FlxiTicket;
  }

  private getPrice (priceData: any[], currencyCode: string): Amount {
    return priceData.reduce((accumulator, item) => {
      if (item.currency === currencyCode) {
        Object.assign(accumulator, item);
      }

      return accumulator;
    }, priceData[0]);
  }
}
