import { PaymentType, ApiDeliveryMethodCheckout } from '../typings';

export const bookingDataMock = {
  reference: '8826674',
  channelId: 'encoretickets',
  shopper: {
    email: 'user@example.com',
    title: 'Miss',
    firstName: 'Shawn',
    lastName: 'Butler',
    telephoneNumber: '07882571812',
    externalId: '8263702',
  },
  billingAddress: {
    line1: 'Barnards Inn',
    line2: '86 Fetter Lane',
    postalCode: 'EC4A 1EN',
    city: 'London',
    countryCode: 'GB',
    countryName: 'United Kingdom',
    stateOrProvince: 'NY',
  },
  origin: 'https://example.com',
  redirectUrl: 'https://example.com',
  deliveryMethod: 'C' as ApiDeliveryMethodCheckout,
  deliveryCharge: 245,
  recipientName: 'Mr. Someone Else',
  giftVoucherMessage: 'Happy Birthday to you.',
  deliveryAddress: {
    line1: 'Barnards Inn',
    line2: '86 Fetter Lane',
    postalCode: 'EC4A 1EN',
    city: 'London',
    countryCode: 'GB',
    countryName: 'United Kingdom',
    stateOrProvince: 'NY',
  },
  hasFlexiTickets: false,
  paymentType: PaymentType.Card,
}

export const paymentDataMock = {
  paymentId: '123459876',
  paymentType: PaymentType.Paypal,
}
