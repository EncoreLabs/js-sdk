import { checkRequiredProperty } from '../../utils/validator';
import { ApiPricingValue } from '../typings';

export class PricingValue {
  private readonly value: number;
  private readonly currency: string;
  private readonly decimalPlaces?: number;

  constructor (areaPricingValue: ApiPricingValue) {
    checkRequiredProperty(areaPricingValue, 'Area Pricing Value: area pricing value data');

    this.value = areaPricingValue.value;
    this.currency = areaPricingValue.currency;
    this.decimalPlaces = areaPricingValue.decimalPlaces;
  }

  getValue () {
    return this.value;
  }

  getCurrency () {
    return this.currency;
  }

  getDecimalPlaces () {
    return this.decimalPlaces;
  }
}
