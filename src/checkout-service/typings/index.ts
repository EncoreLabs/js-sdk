export interface ApiBookingData {
  reference: string;
  channelId: string;
  origin: string;
  redirectUrl: string;
  deliveryCharge: number;
  recipientName: string;
  giftVoucherMessage: string;
  deliveryAddress: ApiAddress;
  hasFlexiTickets: boolean;
  paymentType: PaymentType;
  shopper?: ApiShopper;
  billingAddress?: ApiAddress;
  deliveryMethod?: ApiDeliveryMethodCheckout;
}

export type ApiDeliveryMethodCheckout = 'C' | 'E' | 'M';

export interface ApiShopper {
  email: string;
  title?: string;
  firstName: string;
  lastName?: string;
  telephoneNumber: string;
  externalId: string;
}

export interface ApiAddress {
  line1?: string;
  line2?: string;
  postalCode?: string;
  city?: string;
  countryCode?: string;
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
