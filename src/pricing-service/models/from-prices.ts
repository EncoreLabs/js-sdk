import moment, { Moment } from 'moment';
import { checkRequiredProperty } from '../../utils/validator';
import { PricingValue } from '../../shared/models/pricing-value';
import { ApiFromPrices } from '../typings';

export class FromPrices {
  private readonly createdAt: Moment;
  private readonly rawCreatedAt: string;
  private readonly date: Moment;
  private readonly rawDate: string;
  private readonly displayCurrency: string;
  private readonly prices: PricingValue[];

  constructor (fromPricesData: ApiFromPrices) {
    checkRequiredProperty(fromPricesData, 'From Prices: from prices data');

    this.createdAt = moment(fromPricesData.createdAt);
    this.rawCreatedAt = fromPricesData.createdAt;
    this.date = moment(fromPricesData.date);
    this.rawDate = fromPricesData.date;
    this.displayCurrency = fromPricesData.displayCurrency;
    this.prices = fromPricesData.fromPrice.map(value => new PricingValue(value));
  }

  getCreatedAt () {
    return this.createdAt;
  }

  getRawCreatedAt () {
    return this.rawCreatedAt;
  }

  getDate () {
    return this.date;
  }

  getRawDate () {
    return this.rawDate;
  }

  getDisplayCurrency () {
    return this.displayCurrency;
  }

  getPrices () {
    return this.prices;
  }
}
