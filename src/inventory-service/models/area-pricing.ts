import { checkRequiredProperty } from '../../utils/validator';
import { PricingValue } from '../../shared/models/pricing-value';
import { ApiAreaPricing } from '../typings';

export class AreaPricing {
  private faceValue: PricingValue[] | null;
  private salePrice: PricingValue[];
  private percentageDiscount: number;
  private includesBookingFee: boolean;
  private readonly priceReference?: string;
  private readonly timestamp?: string;

  constructor (areaPricing: ApiAreaPricing) {
    checkRequiredProperty(areaPricing, 'Area Pricing: area pricing data');

    this.faceValue = areaPricing.faceValue ? areaPricing.faceValue.map(pricing => new PricingValue(pricing)) : null;
    this.salePrice = areaPricing.salePrice.map(pricing => new PricingValue(pricing));
    this.percentageDiscount = areaPricing.percentageDiscount;
    this.includesBookingFee = areaPricing.includesBookingFee;
    this.priceReference = areaPricing.priceReference;
    this.timestamp = areaPricing.timestamp;
  }

  getFaceValues () {
    return this.faceValue;
  }

  setFaceValues (faceValue: PricingValue[] | null) {
    this.faceValue = faceValue;
  }

  getSalePrices () {
    return this.salePrice;
  }

  setSalePrices (salePrice: PricingValue[]) {
    this.salePrice = salePrice;
  }

  getPercentageDiscount () {
    return this.percentageDiscount;
  }

  setPercentageDiscount (percentageDiscount: number) {
    this.percentageDiscount = percentageDiscount;
  }

  hasBookingFee () {
    return this.includesBookingFee;
  }

  setHasBookingFee (includesBookingFee: boolean) {
    this.includesBookingFee = includesBookingFee;
  }

  getPriceReference () {
    return this.priceReference;
  }

  getTimestamp () {
    return this.timestamp;
  }
}
