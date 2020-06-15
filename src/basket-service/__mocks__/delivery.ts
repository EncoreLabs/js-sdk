import { DeliveryMethod } from '../typings';

const deliveryDataMock = {
  method: DeliveryMethod.Collection,
  charge: {
    value: 100,
    currency: 'GBP',
  },
};

export const deliveriesMock = [ deliveryDataMock, deliveryDataMock ];
