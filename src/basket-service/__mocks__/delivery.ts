import { DeliveryMethod } from '../typings';

const deliveryDataMock = {
  method: DeliveryMethod.Collection,
  charge: {
    value: 100,
    currency: 'GBP',
  },
  prePurchaseText: 'Your tickets will be available at the box office when you arrive for the show.',
  postPurchaseText: 'Tickets will be held for {name} at the box office 30 minutes prior to showtime.'
};

export const deliveriesMock = [ deliveryDataMock, deliveryDataMock ];
