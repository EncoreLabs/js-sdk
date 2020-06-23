import { DeliveryMethod, BasketStatus } from '../typings';
import { basketItemDataMock } from './basket-item';

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);

export const basketDataMock = {
  reference: '1010101',
  checksum: '123123',
  channelId: 'encoretickets',
  delivery: {
    method: DeliveryMethod.Collection,
    charge: {
      value: 100,
      currency: 'GBP',
    }
  },
  status: BasketStatus.Active,
  createdAt: '2020-01-01T19:30:00+02:00',
  expiredAt: tomorrow.toString(),
  reservations: [
    { ...basketItemDataMock, id: '1' },
    { ...basketItemDataMock, id: '2' },
  ],
  coupon: {
    code: 'SAMPLE_SOURCE_CODE',
  },
  appliedPromotion: {
    id: '1',
    name: 'Free ticket',
    displayText: 'Buy one ticket, get another free.',
  },
  shopperReference: 'YmFza2V0QGVuY29yZXRpeC5jby51azpFQzRBIDFFTg==',
  shopperCurrency: 'GBP',
};