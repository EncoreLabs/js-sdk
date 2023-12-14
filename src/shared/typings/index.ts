export interface Amount {
  value: number;
  currency: string;
  decimalPlaces?: number;
}

export enum Environment {
  Dev = 'dev',
  Qa = 'qa',
  Staging = 'staging',
  Prod = 'prod',
}

export interface Repository {
  // tslint:disable-next-line
  [key: string]: Function,
}

export interface ApiError {
  message: string;
  field?: string;
  code?: string;
}

export interface FulfilmentBasketItem {
  productId: string;
  venueId: string;
  productType: string;
  dateTime: string;
  linkedReservationId: number;
}

export interface Settings {
  basketApiUrl?: string;
  contentApiUrl?: string;
  contentApiUrlV3?: string;
  contentImagesUrl?: string;
}

export interface ApiPricingValue {
  value: number;
  currency: string;
  decimalPlaces?: number;
}

export interface SourceInformation {
  affiliateId?: string;
  sourceName?: string;
  viewName?: string;
  sourceVersion?: string;
  channelId?: string;
}
