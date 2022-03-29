import { Amount, ApiPricingValue } from '../../shared/typings';

export interface ApiSummaryAvailabilityItemData {
  availableSeatCount: number;
  datetime: string;
  partTwoDatetime: string | null;
  discount: boolean;
  largestLumpOfTickets: number;
  maxPrice: number;
  minPrice: number;
  noBookingFee: boolean;
}

export interface ApiUpsellApiProductData {
  aggregateReference: string;
  faceValue: Amount[] | null;
  salePrice: Amount[];
  quantity: number;
  upSellIdentifier: string;
}

export interface ApiUpsellProductsData {
  displayCurrency: string;
  upSellItems: ApiUpsellApiProductData[];
}

export enum UpsellProductTypes {
  FlxiTicket = 'FLX',
}

export interface ApiAvailability {
  isAvailable?: boolean;
  availableCount?: number;
  displayCurrency: string;
  areas: ApiArea[]
}

export interface ApiArea {
  date: string;
  partTwoDate: string | null;
  name: string;
  availableCount: number;
  aggregateReference?: string;
  mode: string;
  isAvailable?: boolean;
  groupings: ApiAreaGroup[];
}

export interface ApiAreaGroup {
  row: string;
  availableCount: number;
  aggregateReference?: string;
  seatNumberStart: number;
  seatNumberEnd: number;
  groupIdentifier: string;
  isAvailable?: boolean;
  attributes?: {
    restrictedView: boolean;
    sideView: boolean;
  };
  pricing: ApiAreaPricing;
  seats: ApiAvailabilitySeat[];
  seatLumps: ApiAreaSeatLump[];
  mode?: string;
}

export interface ApiAreaPricing {
  faceValue: ApiPricingValue[] | null;
  salePrice: ApiPricingValue[];
  orderFee?: ApiPricingValue[] | null;
  percentageDiscount: number;
  includesBookingFee: boolean;
  promotionLabel: string | null;
  priceReference?: string;
  timestamp?: string;
}

export interface ApiAvailabilitySeat {
  aggregateReference: string;
  attributes: {
    restrictedView: boolean;
    sideView: boolean;
  };
  isAvailable: boolean;
  number: number;
  pricing: ApiAreaPricing;
  row: string;
  seatIdentifier: string;
}

export interface ApiAreaSeatLump {
  seats: string[];
}

export interface SeatAttributeType {
  title: string;
  description: string
}

export interface Lump {
  seatNumberStart: number;
  seatNumberEnd: number;
}

export interface ApiMaxNumberOfTickets {
  MaxNumberOfTickets: number;
  productId: string;
}

export enum SeatAllocationMode {
  Allocated = 'allocated',
  Freesell = 'freesell',
}
