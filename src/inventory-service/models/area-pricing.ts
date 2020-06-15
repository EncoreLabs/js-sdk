import { checkRequiredProperty } from '../../utils/validator';
import { PricingValue } from '../../shared/models/pricing-value';
import { ApiAreaPricing } from '../typings';

export class AreaPricing {
  private readonly faceValue: PricingValue[];
  private readonly salePrice: PricingValue[];
  private readonly percentageDiscount: number;
  private readonly includesBookingFee: boolean;
  private readonly priceReference?: string;
  private readonly timestamp?: string;

  constructor (areaPricing: ApiAreaPricing) {
    checkRequiredProperty(areaPricing, 'Area Pricing: area pricing data');

    this.faceValue = areaPricing.faceValue.map(pricing => new PricingValue(pricing));
    this.salePrice = areaPricing.salePrice.map(pricing => new PricingValue(pricing));
    this.percentageDiscount = areaPricing.percentageDiscount;
    this.includesBookingFee = areaPricing.includesBookingFee;
    this.priceReference = areaPricing.priceReference;
    this.timestamp = areaPricing.timestamp;
  }

  getFaceValues () {
    return this.faceValue;
  }

  getSalePrices () {
    return this.salePrice;
  }

  getPercentageDiscount () {
    return this.percentageDiscount;
  }

  hasBookingFee () {
    return this.includesBookingFee;
  }

  getPriceReference () {
    return this.priceReference;
  }

  getTimestamp () {
    return this.timestamp;
  }
}
