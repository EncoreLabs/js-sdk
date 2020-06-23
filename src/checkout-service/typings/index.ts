export interface ApiBookingData {
  channelId: string;
  billingAddress: ApiAddress;
  deliveryMethod: ApiDeliveryMethodCheckout;
  redirectUrl: string;
  reference: string;
  shopper: ApiShopper;
  origin?: string;
  deliveryCharge?: number;
  recipientName?: string;
  giftVoucherMessage?: string;
  hasFlexiTickets?: boolean;
  paymentType?: PaymentType;
  deliveryAddress?: ApiAddress;
}

export type ApiDeliveryMethodCheckout = 'C' | 'E' | 'M';

export interface ApiShopper {
  firstName: string;
  lastName: string;
  email?: string;
  title?: string;
  telephoneNumber?: string;
  externalId?: string;
}

export interface ApiAddress {
  countryCode: string;
  line1?: string;
  line2?: string;
  postalCode?: string;
  city?: string;
  countryName?: string;
  stateOrProvince?: string;
}

export enum PaymentType {
  Card = 'card',
  Amex = 'amex',
  Paypal = 'paypal',
  Account = 'account',
  Alipay = 'alipay',
  Wechatpay = 'wechatpay',
}

export interface ApiPaymentDetails {
  paymentId?: string;
  paymentType?: PaymentType;
}

export interface ApiConfirmBooking {
  nextPaymentId?: string;
  result?: string;
}

export interface ApiConfirmBookingAgentDetails {
  agentId: string;
  agentPassword: string;
}
