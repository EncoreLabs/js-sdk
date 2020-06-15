import { ApiPricingValue } from '../../shared/typings';

export interface ApiFromPrices {
  createdAt: string;
  date: string;
  displayCurrency: string;
  fromPrice: ApiPricingValue[];
}
