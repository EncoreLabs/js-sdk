import { ProductType } from '../typings';

export const basketItemDataMock = {
  id: '1',
  productId: '1001',
  productName: 'Wicked',
  productType: ProductType.Show,
  venueId: '199',
  venueName: 'Test',
  date: '2020-01-01T19:30:00+02:00',
  quantity: 10,
  items: [
    {
      aggregateReference: 'eyJzYm9BbW91bnQiOjY5MDAsInNib1ByaWNlIjo2OTAwLCJob3VzZVByaWNlIjo2OTAwLCJzdGFDb3N0Ijo2OTAwfQ==',
      areaName: 'Stalls',
      areaId: 'ST',
      row: 'R',
      number: '12',
      locationDescription: 'Seat Location Description(for Broadway).',
    },
  ],
  adjustedSalePriceInShopperCurrency: {
    value: 50,
    currency: 'GBP',
  },
  salePriceInShopperCurrency: {
    value: 70,
    currency: 'GBP',
  },
  faceValueInShopperCurrency: {
    value: 100,
    currency: 'GBP',
  },
  adjustmentAmountInShopperCurrency: {
    value: 20,
    currency: 'GBP',
  },
  feeInShopperCurrency: {
    value: 0,
    currency: 'GBP',
  },
  deliveryFeeInShopperCurrency: {
    value: 100,
    currency: 'GBP',
  }
};
