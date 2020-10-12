import { VenueDetailsApi } from '../typings';

export const venueDetailsMock: VenueDetailsApi = {
  internalId: '1002',
  title: 'Bluebell Theatre',
  description: 'Bluebell - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo.',
  address: {
    firstLine: '200 Woodland Park Road',
    secondLine: 'Parkside',
    thirdLine: 'thirdLine',
    city: 'London',
    postCode: 'postCode',
    region: {
      name: 'Westminster',
      isoCode: 'GB_WSM',
    },
    country: {
      name: 'United Kingdom',
      isoCode: 'GB',
    },
  },
  seatSettings: {
    seatsSupplied: true,
    seatSelectionMode: {
      name: 'allocated',
    },
    allocationType: {
      name: 'afterPayment',
    },
  },
  createdAt: '2020-01-17T10:55:35+00:00',
  facilities: [
    {
      description: 'Air',
      path: '',
    },
  ],
  transportAttributes: [],
  venueTerminals: [
    {
      directions: 'directions',
      journeyTime: '2 mins',
      terminal: {
        name: 'Firewood Terminal',
        routes: [
          {
            description: '',
            transportMode: {
              name: 'rail',
            },
          },
        ],
      },
    },
  ],
};
