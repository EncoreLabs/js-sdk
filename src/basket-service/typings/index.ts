import { Amount } from '../../shared/typings';

export enum DeliveryMethod {
  Collection = 'collection',
  Postage = 'postage',
  Eticket = 'eticket',
  Evoucher = 'evoucher',
  PrintBoxOffice = 'print_box_office',
  HandDelivered = 'hand_delivered',
  DelayedBarcode = 'delayed_barcode',
  Streaming = 'streaming',
  Supplier = 'supplier',
}

export enum BasketStatus {
  Active = 'active',
  Expired = 'expired',
  Confirmed = 'confirmed',
  Cancelled = 'cancelled',
}

export interface ReservationSeat {
  aggregateReference: string;
  areaId: string;
  areaName: string;
  row: string;
  number: string;
  locationDescription: string;
}

export enum ProductType {
  Show = 'SHW',
  Attraction = 'ATT',
  Flexitickets = 'FLX',
  GiftVoucher = 'GVC',
  Postage = 'PST',
}

export interface BasketItemData {
  id: string;
  productId: string;
  productName: string;
  productType: ProductType;
  venueId: string;
  venueName: string;
  date: string;
  quantity: number;
  items: ReservationSeat[];
  adjustedSalePriceInShopperCurrency: Amount;
  salePriceInShopperCurrency: Amount;
  faceValueInShopperCurrency: Amount | null;
  adjustmentAmountInShopperCurrency: Amount;
  feeInShopperCurrency: Amount | null;
  deliveryFeeInShopperCurrency: Amount | null;
  linkedReservationId?: number;
  seats?: ReservationSeat[];
}

export interface CouponData {
  code: string;
}

export interface Promotion {
  id: string;
  name: string;
  displayText: string;
}

export interface DeliveryData {
  method: DeliveryMethod;
  charge: Amount;
  prePurchaseText: string;
  postPurchaseText: string;
}

export interface LocationSimpleData {
  id: string;
  name: string;
  regionCode: string;
  includeFees: boolean;
}

export interface BasketData {
  channelId: string;
  reservations: BasketItemData[];
  reference?: string;
  orderConfirmationNumber?: string;
  orderFee?: Amount;
  checksum?: string;
  delivery?: DeliveryData;
  createdAt?: string;
  expiredAt?: string;
  status?: BasketStatus;
  mixed?: boolean;
  coupon?: CouponData;
  appliedPromotion?: Promotion;
  shopperReference?: string;
  shopperCurrency?: string;
  missedPromotions?: Promotion[];
  hasFlexiTickets?: boolean;
  allowFlexiTickets?: boolean;
  paymentCaptureType?: string;
  location?: LocationSimpleData;
  pubId?: string;
}

interface RequestSeat {
  aggregateReference: string;
  blockId?: string;
  blockName?: string;
  row?: string;
  number?: string;
  locationDescription?: string;
}

export interface RequestBasketItemData {
  productId: string;
  venueId: string;
  quantity: number;
  items: RequestSeat[];
  date: string;
  id?: string;
  productName?: string;
  productType?: ProductType;
  venueName?: string;
  adjustedSalePriceInShopperCurrency?: Amount;
  faceValueInShopperCurrency?: Amount | null;
  adjustmentAmountInShopperCurrency?: Amount;
  salePriceInShopperCurrency?: Amount;
  feeInShopperCurrency?: Amount | null;
  deliveryFeeInShopperCurrency?: Amount | null;
}

export interface RequestBasketData {
  channelId: string;
  reservations: RequestBasketItemData[];
  reference?: string;
  checksum?: string;
  delivery?: DeliveryData;
  createdAt?: string;
  expiredAt?: string;
  status?: BasketStatus;
  coupon?: CouponData;
  shopperReference?: string;
  shopperCurrency?: string;
  exchangeRate?: number;
  hasFlexiTickets?: boolean;
}

export enum BasketLocationType {
  USA = 'USA',
  UK = 'GBR',
  Mixed = 'Mixed',
}

export enum PaymentCaptureType {
  Immediate = 'IMMEDIATE',
  Pending = 'PENDING',
}

export interface UpsellApiProductDataItem {
  aggregateReference: string;
  productType: string;
}

export interface UpsellApiProductData {
  [parentId: string]: UpsellApiProductDataItem[];
}
