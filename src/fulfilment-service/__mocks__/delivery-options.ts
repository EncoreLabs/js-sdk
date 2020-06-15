export const deliveryOptions = [
  {
    id: 'DM0003',
    name: 'Print at home',
    legacyCode: 'EV',
    checked: true,
    aggregateReference: 'aggregateReference',
    salePrice: [
      {
        value: 0,
        currency: 'GBP',
        decimalPlaces: 2,
      },
    ],
  },
  {
    id: 'DM0005',
    name: 'By Post – UK Addresses only',
    legacyCode: 'Std',
    aggregateReference: 'aggregateReference',
    salePrice: [
      {
        value: 145,
        currency: 'GBP',
        decimalPlaces: 2,
      },
    ],
  },
  {
    id: 'DM0001',
    name: 'Collect at the Box Office',
    legacyCode: 'COBO',
    aggregateReference: 'aggregateReference',
    salePrice: [
      {
        value: 0,
        currency: 'GBP',
        decimalPlaces: 2,
      },
    ],
  },
];
