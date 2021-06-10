export const availabilityMock = {
  availableCount: 495,
  isAvailable: true,
  displayCurrency: 'GBP',
  areas: [{
    aggregateReference: 'Mg==',
    isAvailable: true,
    availableCount: 257,
    date: '2019-08-30T19:30:00+0000',
    partTwoDate: '2019-08-30T19:30:00+0000',
    name: 'Circle',
    mode: 'allocated',
    groupings: [{
      groupIdentifier: 'RoyalCircle~H40;40',
      mode: 'allocated',
      aggregateReference: 'RU5UQX43NjY0NjF+Q0lSfjUwNX5VfjF+REN+MzUwMH40MjAwfjF+N35FTkMsQVAwLDF+MjE2SzE5NDkwNUsyfkx+fn4zNTAwfjE3LzExLzE4NTh+MA==',
      row: 'U',
      seatNumberStart: 1,
      seatNumberEnd: 7,
      availableCount: 7,
      isAvailable: true,
      attributes: { restrictedView: false, sideView: false },
      pricing: {
        priceReference: 'NDIwMDpHQlB+MzUwMDpHQlB+MjAxOS0wOC0yMVQxMjoxMzoxOSswMDAw',
        salePrice: [{ value: 4200, currency: 'GBP', decimalPlaces: 2 }],
        faceValue: [{ value: 3500, currency: 'GBP', decimalPlaces: 2 }],
        percentageDiscount: 0,
        includesBookingFee: true,
        promotionLabel: null,
        timestamp: '2019-08-21T12:13:19+0000',
      },
      seats: [{
        aggregateReference: 'RU5UQX43NjY0NjF+Q0lSfjUwNX5VfjF+REN+MzUwMH40MjAwfjF+N35FTkMsQVAwLDF+MjE2SzE5NDkwNUsyfkx+fn4zNTAwfjE3LzExLzE4NTh+MC1VMQ==',
        row: 'U',
        number: 1,
        isAvailable: true,
        attributes: { restrictedView: false, sideView: false },
        seatIdentifier: 'ROYAL_CIRCLE-H40',
        pricing: {
          priceReference: 'NDIwMDpHQlB+MzUwMDpHQlB+MjAxOS0wOC0yMVQxMjoxMzoxOSswMDAw',
          salePrice: [{ value: 4200, currency: 'GBP', decimalPlaces: 2 }],
          faceValue: [{ value: 3500, currency: 'GBP', decimalPlaces: 2 }],
          percentageDiscount: 0,
          includesBookingFee: true,
          promotionLabel: null,
          timestamp: '2019-08-21T12:13:19+0000',
        },
      }],
      seatLumps: [
        { seats: ['STALLS-ZE1'] },
        { seats: ['ROYAL_CIRCLE-H40'] },
      ],
    }],
  }],
};

export const broadwayAvailabilityMock = {
  displayCurrency: 'GBP',
  areas: [
    {
      availableCount: 1,
      date: '2020-11-01T15:00:00-0500',
      name: 'Rear Mezzanine D-J',
      mode: 'freesell',
      groupings: [
        {
          groupIdentifier: 'Rear Mezzanine D-J',
          aggregateReference: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2aSI6IjcwNSIsInZjIjoiVVMiLCJwaSI6IjcwMzgiLCJpaSI6IlJlYXIgTWV6emFuaW5lIEQtSiIsImliIjpudWxsLCJpciI6bnVsbCwiaXNuIjpudWxsLCJpc2xkIjoiUmVhciBNZXp6YW5pbmUgRC1KIiwiaXBpIjoiQkl-MTU5NDAxNCIsImlkIjoiMjAyMC0xMS0wMVQxNTowMDowMC0wNTowMCIsImVzaSI6IkJJIiwiZXJpIjpudWxsLCJlc2VpIjpudWxsLCJlYmkiOm51bGwsImVwaSI6bnVsbCwiZWRjdCI6bnVsbCwicGFpIjoiMzE0NCIsImNwdiI6NjQ3MCwiY3BjIjoiVVNEIiwib3NwdiI6NjYwMCwib3NwYyI6IkdCUCIsIm9mdnYiOjQ5MDAsIm9mdmMiOiJHQlAiLCJzc3B2Ijo2NjAwLCJzc3BjIjoiR0JQIiwic2Z2diI6NDkwMCwic2Z2YyI6IkdCUCIsIm90c3NwZnIiOjEsInN0b3NwZnIiOjAuODE5MjE0LCJpYyI6bnVsbCwicG1jIjpudWxsLCJyZWQiOm51bGwsInBydiI6bnVsbH0.PLSe74ARTNW30YIfxp81Pfo0QX8LdRUp8Gfqm8Z3-7A',
          row: null as string | null,
          seatNumberStart: null as number | null,
          seatNumberEnd: null as number | null,
          availableCount: 1,
          pricing: {
            salePrice: [
              {
                value: 8000,
                currency: 'USD',
                decimalPlaces: 2,
              },
              {
                value: 6600,
                currency: 'GBP',
                decimalPlaces: 2,
              },
            ],
            faceValue: [
              {
                value: 5900,
                currency: 'USD',
                decimalPlaces: 2,
              },
              {
                value: 4900,
                currency: 'GBP',
                decimalPlaces: 2,
              },
            ],
            percentageDiscount: 0,
            includesBookingFee: true,
            promotionLabel: 'Broadway promotion',
            createdAt: '2020-05-19T06:31:30+0000',
          },
          seats: [] as any,
          seatLumps: [] as any,
        },
      ],
    },
    {
      availableCount: 1,
      date: '2020-11-01T15:00:00-0500',
      name: 'Orchestra Far Side Rows P-U,Front Mezzanine A-F',
      mode: 'freesell',
      groupings: [
        {
          groupIdentifier: 'Orchestra Far Side Rows P-U,Front Mezzanine A-F',
          aggregateReference: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2aSI6IjcwNSIsInZjIjoiVVMiLCJwaSI6IjcwMzgiLCJpaSI6Ik9yY2hlc3RyYSBGYXIgU2lkZSBSb3dzIFAtVSxGcm9udCBNZXp6YW5pbmUgQS1GIiwiaWIiOm51bGwsImlyIjpudWxsLCJpc24iOm51bGwsImlzbGQiOiJPcmNoZXN0cmEgRmFyIFNpZGUgUm93cyBQLVUsRnJvbnQgTWV6emFuaW5lIEEtRiIsImlwaSI6IkJJfjE1OTQwMTMiLCJpZCI6IjIwMjAtMTEtMDFUMTU6MDA6MDAtMDU6MDAiLCJlc2kiOiJCSSIsImVyaSI6bnVsbCwiZXNlaSI6bnVsbCwiZWJpIjpudWxsLCJlcGkiOm51bGwsImVkY3QiOm51bGwsInBhaSI6IjMxNDQiLCJjcHYiOjk5MDAsImNwYyI6IlVTRCIsIm9zcHYiOjEwMDAwLCJvc3BjIjoiR0JQIiwib2Z2diI6OTgwMCwib2Z2YyI6IkdCUCIsInNzcHYiOjEwMDAwLCJzc3BjIjoiR0JQIiwic2Z2diI6OTgwMCwic2Z2YyI6IkdCUCIsIm90c3NwZnIiOjEsInN0b3NwZnIiOjAuODE5MjE0LCJpYyI6bnVsbCwicG1jIjpudWxsLCJyZWQiOm51bGwsInBydiI6bnVsbH0.Hp1R9ScmefaoyELtGnm6uNEXMkaenQ_h1nePpues8KE',
          row: null,
          seatNumberStart: null,
          seatNumberEnd: null,
          availableCount: 1,
          pricing: {
            salePrice: [
              {
                value: 12200,
                currency: 'USD',
                decimalPlaces: 2,
              },
              {
                value: 10000,
                currency: 'GBP',
                decimalPlaces: 2,
              },
            ],
            faceValue: [
              {
                value: 11900,
                currency: 'USD',
                decimalPlaces: 2,
              },
              {
                value: 9800,
                currency: 'GBP',
                decimalPlaces: 2,
              },
            ],
            percentageDiscount: 0,
            includesBookingFee: true,
            promotionLabel: 'Broadway promotion',
            createdAt: '2020-05-19T06:31:30+0000',
          },
          seats: [],
          seatLumps: [],
        },
      ],
    },
    {
      availableCount: 1,
      date: '2020-11-01T15:00:00-0500',
      name: 'Orchestra Far Side Rows C-O',
      mode: 'freesell',
      groupings: [
        {
          groupIdentifier: 'Orchestra Far Side Rows C-O',
          aggregateReference: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2aSI6IjcwNSIsInZjIjoiVVMiLCJwaSI6IjcwMzgiLCJpaSI6Ik9yY2hlc3RyYSBGYXIgU2lkZSBSb3dzIEMtTyIsImliIjpudWxsLCJpciI6bnVsbCwiaXNuIjpudWxsLCJpc2xkIjoiT3JjaGVzdHJhIEZhciBTaWRlIFJvd3MgQy1PIiwiaXBpIjoiQkl-MTU5NDAxMiIsImlkIjoiMjAyMC0xMS0wMVQxNTowMDowMC0wNTowMCIsImVzaSI6IkJJIiwiZXJpIjpudWxsLCJlc2VpIjpudWxsLCJlYmkiOm51bGwsImVwaSI6bnVsbCwiZWRjdCI6bnVsbCwicGFpIjoiMzE0NCIsImNwdiI6MTI5MDAsImNwYyI6IlVTRCIsIm9zcHYiOjEzMDAwLCJvc3BjIjoiR0JQIiwib2Z2diI6MTQ3MDAsIm9mdmMiOiJHQlAiLCJzc3B2IjoxMzAwMCwic3NwYyI6IkdCUCIsInNmdnYiOjE0NzAwLCJzZnZjIjoiR0JQIiwib3Rzc3BmciI6MSwic3Rvc3BmciI6MC44MTkyMTQsImljIjpudWxsLCJwbWMiOm51bGwsInJlZCI6bnVsbCwicHJ2IjpudWxsfQ.l6rD5abrMxE83vD4MPOY-z5B1OqF59Uz3dK7W_9nvzg',
          row: null,
          seatNumberStart: null,
          seatNumberEnd: null,
          availableCount: 1,
          pricing: {
            salePrice: [
              {
                value: 15900,
                currency: 'USD',
                decimalPlaces: 2,
              },
              {
                value: 13000,
                currency: 'GBP',
                decimalPlaces: 2,
              },
            ],
            faceValue: [
              {
                value: 17900,
                currency: 'USD',
                decimalPlaces: 2,
              },
              {
                value: 14700,
                currency: 'GBP',
                decimalPlaces: 2,
              },
            ],
            percentageDiscount: 11,
            includesBookingFee: true,
            promotionLabel: 'Broadway promotion',
            createdAt: '2020-05-19T06:31:30+0000',
          },
          seats: [],
          seatLumps: [],
        },
      ],
    },
    {
      availableCount: 1,
      date: '2020-11-01T15:00:00-0500',
      name: 'Orchestra  Rows B-O',
      mode: 'freesell',
      groupings: [
        {
          groupIdentifier: 'Orchestra  Rows B-O',
          aggregateReference: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2aSI6IjcwNSIsInZjIjoiVVMiLCJwaSI6IjcwMzgiLCJpaSI6Ik9yY2hlc3RyYSAgUm93cyBCLU8iLCJpYiI6bnVsbCwiaXIiOm51bGwsImlzbiI6bnVsbCwiaXNsZCI6Ik9yY2hlc3RyYSAgUm93cyBCLU8iLCJpcGkiOiJCSX4xNjYyMjI1IiwiaWQiOiIyMDIwLTExLTAxVDE1OjAwOjAwLTA1OjAwIiwiZXNpIjoiQkkiLCJlcmkiOm51bGwsImVzZWkiOm51bGwsImViaSI6bnVsbCwiZXBpIjpudWxsLCJlZGN0IjpudWxsLCJwYWkiOiIzMTQ0IiwiY3B2IjoyMDc3MCwiY3BjIjoiVVNEIiwib3NwdiI6MjEwMDAsIm9zcGMiOiJHQlAiLCJvZnZ2IjoxNTUwMCwib2Z2YyI6IkdCUCIsInNzcHYiOjIxMDAwLCJzc3BjIjoiR0JQIiwic2Z2diI6MTU1MDAsInNmdmMiOiJHQlAiLCJvdHNzcGZyIjoxLCJzdG9zcGZyIjowLjgxOTIxNCwiaWMiOm51bGwsInBtYyI6bnVsbCwicmVkIjpudWxsLCJwcnYiOm51bGx9.AgrAnUqXecDRUDvYgTX269M45DrfL9-tnMzhVCiyDQw',
          row: null,
          seatNumberStart: null,
          seatNumberEnd: null,
          availableCount: 1,
          pricing: {
            salePrice: [
              {
                value: 25600,
                currency: 'USD',
                decimalPlaces: 2,
              },
              {
                value: 21000,
                currency: 'GBP',
                decimalPlaces: 2,
              },
            ],
            faceValue: [
              {
                value: 18900,
                currency: 'USD',
                decimalPlaces: 2,
              },
              {
                value: 15500,
                currency: 'GBP',
                decimalPlaces: 2,
              },
            ],
            percentageDiscount: 0,
            includesBookingFee: true,
            promotionLabel: 'Broadway promotion',
            createdAt: '2020-05-19T06:31:30+0000',
          },
          seats: [],
          seatLumps: [],
        },
      ],
    },
  ],
};

export const availabilitySingleSeatStallsMock = [{
  availableCount: 1,
  date: '2020-09-26T19:30:00+0000',
  groupings: [{
    groupIdentifier: 'STALLS~X24;31',
    aggregateReference: null as string | null,
    row: 'X',
    seatNumberStart: 25,
    seatNumberEnd: 25,
    availableCount: 1,
    pricing: {
      salePrice: [
        {
          value: 9200,
          currency: 'GBP',
          decimalPlaces: 2,
        },
      ],
      faceValue: [
        {
          value: 7500,
          currency: 'GBP',
          decimalPlaces: 2,
        },
      ],
      percentageDiscount: 0,
      includesBookingFee: true,
      createdAt: '2020-05-13T06:59:09+0000',
    },
    seats: [
      {
        seatIdentifier: 'STALLS-X25',
        aggregateReference: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2aSI6IjEzOCIsInZjIjoiR0IiLCJwaSI6IjE1ODciLCJpaSI6IlNUQUxMU35YMjQ7MzEiLCJpYiI6IlNUIiwiaXIiOiJYIiwiaXNuIjoiMjUiLCJpc2xkIjoiU3RhbGxzIiwiaXBpIjpudWxsLCJpZCI6IjIwMjAtMDktMjZUMTk6MzA6MDArMDA6MDAiLCJlc2kiOiJFTlRBIiwiZXJpIjoiNzc3IiwiZXNlaSI6IjIiLCJlYmkiOiJTVEEiLCJlcGkiOiI3NzE3MjMiLCJlZGN0IjoiRU5DLEFQMCwxIiwicGFpIjoiMjY1NCIsImNwdiI6NzUwMCwiY3BjIjoiR0JQIiwib3NwdiI6OTIwMCwib3NwYyI6IkdCUCIsIm9mdnYiOjc1MDAsIm9mdmMiOiJHQlAiLCJzc3B2Ijo5MjAwLCJzc3BjIjoiR0JQIiwic2Z2diI6NzUwMCwic2Z2YyI6IkdCUCIsIm90c3NwZnIiOjEsInN0b3NwZnIiOjEsImljIjpudWxsLCJwbWMiOm51bGwsInJlZCI6IjE4NTgxMTE3IiwicHJ2IjowfQ.yeOZLUXzb3kXuKyQAWKcldi6WKoXtx2LSgHIZGCD1zY',
        row: 'X',
        number: 25,
        pricing: {
          salePrice: [
            {
              value: 9200,
              currency: 'GBP',
              decimalPlaces: 2,
            },
          ],
          faceValue: [
            {
              value: 7500,
              currency: 'GBP',
              decimalPlaces: 2,
            },
          ],
          percentageDiscount: 0,
          includesBookingFee: true,
          promotionLabel: null,
          createdAt: '2020-05-13T06:59:09+0000',
        },
      },
    ],
    seatLumps: [
      {
        seats: [
          'STALLS-X25',
        ],
      },
    ],
  }],
  mode: 'allocated',
  name: 'Stalls',
}];

export const availabilitySingleLumpStallsMock = [{
  availableCount: 2,
  date: '2020-09-26T19:30:00+0000',
  groupings: [{
    groupIdentifier: 'STALLS~X24;31',
    aggregateReference: null as string | null,
    row: 'X',
    seatNumberStart: 24,
    seatNumberEnd: 25,
    availableCount: 2,
    pricing: {
      salePrice: [
        {
          value: 9200,
          currency: 'GBP',
          decimalPlaces: 2,
        },
      ],
      faceValue: [
        {
          value: 7500,
          currency: 'GBP',
          decimalPlaces: 2,
        },
      ],
      percentageDiscount: 0,
      includesBookingFee: true,
      createdAt: '2020-05-13T06:59:09+0000',
    },
    seats: [
      {
        seatIdentifier: 'STALLS-X24',
        aggregateReference: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2aSI6IjEzOCIsInZjIjoiR0IiLCJwaSI6IjE1ODciLCJpaSI6IlNUQUxMU35YMjQ7MzEiLCJpYiI6IlNUIiwiaXIiOiJYIiwiaXNuIjoiMjQiLCJpc2xkIjoiU3RhbGxzIiwiaXBpIjpudWxsLCJpZCI6IjIwMjAtMDktMjZUMTk6MzA6MDArMDA6MDAiLCJlc2kiOiJFTlRBIiwiZXJpIjoiNzc3IiwiZXNlaSI6IjEiLCJlYmkiOiJTVEEiLCJlcGkiOiI3NzE3MjMiLCJlZGN0IjoiRU5DLEFQMCwxIiwicGFpIjoiMjY1NCIsImNwdiI6NzUwMCwiY3BjIjoiR0JQIiwib3NwdiI6OTIwMCwib3NwYyI6IkdCUCIsIm9mdnYiOjc1MDAsIm9mdmMiOiJHQlAiLCJzc3B2Ijo5MjAwLCJzc3BjIjoiR0JQIiwic2Z2diI6NzUwMCwic2Z2YyI6IkdCUCIsIm90c3NwZnIiOjEsInN0b3NwZnIiOjEsImljIjpudWxsLCJwbWMiOm51bGwsInJlZCI6IjE4NTgxMTE3IiwicHJ2IjowfQ.vHngVTg3EwWw8eJBrwIsElOxDtFF3M7b8sASXVpRZCE',
        row: 'X',
        number: 24,
        pricing: {
          salePrice: [
            {
              value: 9200,
              currency: 'GBP',
              decimalPlaces: 2,
            },
          ],
          faceValue: [
            {
              value: 7500,
              currency: 'GBP',
              decimalPlaces: 2,
            },
          ],
          percentageDiscount: 0,
          includesBookingFee: true,
          promotionLabel: null,
          createdAt: '2020-05-13T06:59:09+0000',
        },
      },
      {
        seatIdentifier: 'STALLS-X25',
        aggregateReference: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2aSI6IjEzOCIsInZjIjoiR0IiLCJwaSI6IjE1ODciLCJpaSI6IlNUQUxMU35YMjQ7MzEiLCJpYiI6IlNUIiwiaXIiOiJYIiwiaXNuIjoiMjUiLCJpc2xkIjoiU3RhbGxzIiwiaXBpIjpudWxsLCJpZCI6IjIwMjAtMDktMjZUMTk6MzA6MDArMDA6MDAiLCJlc2kiOiJFTlRBIiwiZXJpIjoiNzc3IiwiZXNlaSI6IjIiLCJlYmkiOiJTVEEiLCJlcGkiOiI3NzE3MjMiLCJlZGN0IjoiRU5DLEFQMCwxIiwicGFpIjoiMjY1NCIsImNwdiI6NzUwMCwiY3BjIjoiR0JQIiwib3NwdiI6OTIwMCwib3NwYyI6IkdCUCIsIm9mdnYiOjc1MDAsIm9mdmMiOiJHQlAiLCJzc3B2Ijo5MjAwLCJzc3BjIjoiR0JQIiwic2Z2diI6NzUwMCwic2Z2YyI6IkdCUCIsIm90c3NwZnIiOjEsInN0b3NwZnIiOjEsImljIjpudWxsLCJwbWMiOm51bGwsInJlZCI6IjE4NTgxMTE3IiwicHJ2IjowfQ.yeOZLUXzb3kXuKyQAWKcldi6WKoXtx2LSgHIZGCD1zY',
        row: 'X',
        number: 25,
        pricing: {
          salePrice: [
            {
              value: 9200,
              currency: 'GBP',
              decimalPlaces: 2,
            },
          ],
          faceValue: [
            {
              value: 7500,
              currency: 'GBP',
              decimalPlaces: 2,
            },
          ],
          percentageDiscount: 0,
          includesBookingFee: true,
          promotionLabel: null,
          createdAt: '2020-05-13T06:59:09+0000',
        },
      },
    ],
    seatLumps: [
      {
        seats: [
          'STALLS-X24',
          'STALLS-X25',
        ],
      },
    ],
  }],
  mode: 'allocated',
  name: 'Stalls',
}];

export const availabilitySingleLumpCircleMock = [{
  availableCount: 3,
  date: '2020-09-26T19:30:00+0000',
  groupings: [{
    groupIdentifier: 'CIRCLE~P1;3',
    aggregateReference: null as string | null,
    row: 'P',
    seatNumberStart: 1,
    seatNumberEnd: 3,
    availableCount: 3,
    pricing: {
      salePrice: [
        {
          value: 4300,
          currency: 'GBP',
          decimalPlaces: 2,
        },
      ],
      faceValue: [
        {
          value: 3500,
          currency: 'GBP',
          decimalPlaces: 2,
        },
      ],
      percentageDiscount: 0,
      includesBookingFee: true,
      promotionLabel: null,
      createdAt: '2020-05-13T06:59:09+0000',
    },
    seats: [
      {
        seatIdentifier: 'CIRCLE-P1',
        aggregateReference: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2aSI6IjEzOCIsInZjIjoiR0IiLCJwaSI6IjE1ODciLCJpaSI6IkNJUkNMRX5QMTszIiwiaWIiOiJEQyIsImlyIjoiUCIsImlzbiI6IjEiLCJpc2xkIjoiQ2lyY2xlIiwiaXBpIjpudWxsLCJpZCI6IjIwMjAtMDktMjZUMTk6MzA6MDArMDA6MDAiLCJlc2kiOiJFTlRBIiwiZXJpIjoiNTAwIiwiZXNlaSI6IjEiLCJlYmkiOiJDSVIiLCJlcGkiOiI3NzE3MjMiLCJlZGN0IjoiRU5DLEFQMCwxIiwicGFpIjoiMjY1NCIsImNwdiI6MzUwMCwiY3BjIjoiR0JQIiwib3NwdiI6NDMwMCwib3NwYyI6IkdCUCIsIm9mdnYiOjM1MDAsIm9mdmMiOiJHQlAiLCJzc3B2Ijo0MzAwLCJzc3BjIjoiR0JQIiwic2Z2diI6MzUwMCwic2Z2YyI6IkdCUCIsIm90c3NwZnIiOjEsInN0b3NwZnIiOjEsImljIjpudWxsLCJwbWMiOm51bGwsInJlZCI6IjE4NTgxMTE3IiwicHJ2IjowfQ.bdgA8xfbw4kdaX7ty261fx2isUZpWN3DGPz_QkzDIEY',
        row: 'P',
        number: 1,
        pricing: {
          salePrice: [
            {
              value: 4300,
              currency: 'GBP',
              decimalPlaces: 2,
            },
          ],
          faceValue: [
            {
              value: 3500,
              currency: 'GBP',
              decimalPlaces: 2,
            },
          ],
          percentageDiscount: 0,
          includesBookingFee: true,
          promotionLabel: null,
          createdAt: '2020-05-13T06:59:09+0000',
        },
      },
      {
        seatIdentifier: 'CIRCLE-P2',
        aggregateReference: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2aSI6IjEzOCIsInZjIjoiR0IiLCJwaSI6IjE1ODciLCJpaSI6IkNJUkNMRX5QMTszIiwiaWIiOiJEQyIsImlyIjoiUCIsImlzbiI6IjIiLCJpc2xkIjoiQ2lyY2xlIiwiaXBpIjpudWxsLCJpZCI6IjIwMjAtMDktMjZUMTk6MzA6MDArMDA6MDAiLCJlc2kiOiJFTlRBIiwiZXJpIjoiNTAwIiwiZXNlaSI6IjIiLCJlYmkiOiJDSVIiLCJlcGkiOiI3NzE3MjMiLCJlZGN0IjoiRU5DLEFQMCwxIiwicGFpIjoiMjY1NCIsImNwdiI6MzUwMCwiY3BjIjoiR0JQIiwib3NwdiI6NDMwMCwib3NwYyI6IkdCUCIsIm9mdnYiOjM1MDAsIm9mdmMiOiJHQlAiLCJzc3B2Ijo0MzAwLCJzc3BjIjoiR0JQIiwic2Z2diI6MzUwMCwic2Z2YyI6IkdCUCIsIm90c3NwZnIiOjEsInN0b3NwZnIiOjEsImljIjpudWxsLCJwbWMiOm51bGwsInJlZCI6IjE4NTgxMTE3IiwicHJ2IjowfQ.gjppHzzIDHXajyT0HWcuug8IClLpe6NANoZpQshz_kg',
        row: 'P',
        number: 2,
        pricing: {
          salePrice: [
            {
              value: 4300,
              currency: 'GBP',
              decimalPlaces: 2,
            },
          ],
          faceValue: [
            {
              value: 3500,
              currency: 'GBP',
              decimalPlaces: 2,
            },
          ],
          percentageDiscount: 0,
          includesBookingFee: true,
          promotionLabel: null,
          createdAt: '2020-05-13T06:59:09+0000',
        },
      },
      {
        seatIdentifier: 'CIRCLE-P3',
        aggregateReference: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2aSI6IjEzOCIsInZjIjoiR0IiLCJwaSI6IjE1ODciLCJpaSI6IkNJUkNMRX5QMTszIiwiaWIiOiJEQyIsImlyIjoiUCIsImlzbiI6IjMiLCJpc2xkIjoiQ2lyY2xlIiwiaXBpIjpudWxsLCJpZCI6IjIwMjAtMDktMjZUMTk6MzA6MDArMDA6MDAiLCJlc2kiOiJFTlRBIiwiZXJpIjoiNTAwIiwiZXNlaSI6IjMiLCJlYmkiOiJDSVIiLCJlcGkiOiI3NzE3MjMiLCJlZGN0IjoiRU5DLEFQMCwxIiwicGFpIjoiMjY1NCIsImNwdiI6MzUwMCwiY3BjIjoiR0JQIiwib3NwdiI6NDMwMCwib3NwYyI6IkdCUCIsIm9mdnYiOjM1MDAsIm9mdmMiOiJHQlAiLCJzc3B2Ijo0MzAwLCJzc3BjIjoiR0JQIiwic2Z2diI6MzUwMCwic2Z2YyI6IkdCUCIsIm90c3NwZnIiOjEsInN0b3NwZnIiOjEsImljIjpudWxsLCJwbWMiOm51bGwsInJlZCI6IjE4NTgxMTE3IiwicHJ2IjowfQ.h1tQ0_cLFrAgLhvyN_Lm5jm1fof2vOZZFRSxEUnuxwg',
        row: 'P',
        number: 3,
        pricing: {
          salePrice: [
            {
              value: 4300,
              currency: 'GBP',
              decimalPlaces: 2,
            },
          ],
          faceValue: [
            {
              value: 3500,
              currency: 'GBP',
              decimalPlaces: 2,
            },
          ],
          percentageDiscount: 0,
          includesBookingFee: true,
          promotionLabel: null,
          createdAt: '2020-05-13T06:59:09+0000',
        },
      },
    ],
    seatLumps: [
      {
        seats: [
          'CIRCLE-P1',
          'CIRCLE-P2',
        ],
      },
      {
        seats: [
          'CIRCLE-P2',
          'CIRCLE-P3',
        ],
      },
    ],
  }],
  mode: 'allocated',
  name: 'Circle',
}];

export const availabilitySeveralLumpsMock = [{
  availableCount: 4,
  date: '2020-09-26T19:30:00+0000',
  groupings: [{
    groupIdentifier: 'STALLS~H9;13',
    aggregateReference: null as string | null,
    row: 'H',
    seatNumberStart: 9,
    seatNumberEnd: 13,
    availableCount: 5,
    pricing: {
      salePrice: [
        {
          value: 10400,
          currency: 'GBP',
          decimalPlaces: 2,
        },
      ],
      faceValue: [
        {
          value: 8500,
          currency: 'GBP',
          decimalPlaces: 2,
        },
      ],
      percentageDiscount: 0,
      includesBookingFee: true,
      createdAt: '2020-05-13T06:59:09+0000',
    },
    seats: [
      {
        seatIdentifier: 'STALLS-H9',
        aggregateReference: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2aSI6IjEzOCIsInZjIjoiR0IiLCJwaSI6IjE1ODciLCJpaSI6IlNUQUxMU35IOTsxMyIsImliIjoiU1QiLCJpciI6IkgiLCJpc24iOiI5IiwiaXNsZCI6IlN0YWxscyIsImlwaSI6bnVsbCwiaWQiOiIyMDIwLTA5LTI2VDE5OjMwOjAwKzAwOjAwIiwiZXNpIjoiRU5UQSIsImVyaSI6IjU5OSIsImVzZWkiOiI1IiwiZWJpIjoiU1RBIiwiZXBpIjoiNzcxNzIzIiwiZWRjdCI6IkVOQyxBUDAsMSIsInBhaSI6IjI2NTQiLCJjcHYiOjg1MDAsImNwYyI6IkdCUCIsIm9zcHYiOjEwNDAwLCJvc3BjIjoiR0JQIiwib2Z2diI6ODUwMCwib2Z2YyI6IkdCUCIsInNzcHYiOjEwNDAwLCJzc3BjIjoiR0JQIiwic2Z2diI6ODUwMCwic2Z2YyI6IkdCUCIsIm90c3NwZnIiOjEsInN0b3NwZnIiOjEsImljIjpudWxsLCJwbWMiOm51bGwsInJlZCI6IjE4NTgxMTE3IiwicHJ2IjowfQ.P437Q6ilX7sgKIx9oO313RxdcZHCnTuEASLg-dkOG1M',
        row: 'H',
        number: 9,
        pricing: {
          salePrice: [
            {
              value: 10400,
              currency: 'GBP',
              decimalPlaces: 2,
            },
          ],
          faceValue: [
            {
              value: 8500,
              currency: 'GBP',
              decimalPlaces: 2,
            },
          ],
          percentageDiscount: 0,
          includesBookingFee: true,
          promotionLabel: null,
          createdAt: '2020-05-13T06:59:09+0000',
        },
      },
      {
        seatIdentifier: 'STALLS-H10',
        aggregateReference: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2aSI6IjEzOCIsInZjIjoiR0IiLCJwaSI6IjE1ODciLCJpaSI6IlNUQUxMU35IOTsxMyIsImliIjoiU1QiLCJpciI6IkgiLCJpc24iOiIxMCIsImlzbGQiOiJTdGFsbHMiLCJpcGkiOm51bGwsImlkIjoiMjAyMC0wOS0yNlQxOTozMDowMCswMDowMCIsImVzaSI6IkVOVEEiLCJlcmkiOiI1OTkiLCJlc2VpIjoiNiIsImViaSI6IlNUQSIsImVwaSI6Ijc3MTcyMyIsImVkY3QiOiJFTkMsQVAwLDEiLCJwYWkiOiIyNjU0IiwiY3B2Ijo4NTAwLCJjcGMiOiJHQlAiLCJvc3B2IjoxMDQwMCwib3NwYyI6IkdCUCIsIm9mdnYiOjg1MDAsIm9mdmMiOiJHQlAiLCJzc3B2IjoxMDQwMCwic3NwYyI6IkdCUCIsInNmdnYiOjg1MDAsInNmdmMiOiJHQlAiLCJvdHNzcGZyIjoxLCJzdG9zcGZyIjoxLCJpYyI6bnVsbCwicG1jIjpudWxsLCJyZWQiOiIxODU4MTExNyIsInBydiI6MH0.tScX3SRxo1HtdVZOx_3Q7WGKuojXBF-Aw6vPwgA3mmc',
        row: 'H',
        number: 10,
        pricing: {
          salePrice: [
            {
              value: 10400,
              currency: 'GBP',
              decimalPlaces: 2,
            },
          ],
          faceValue: [
            {
              value: 8500,
              currency: 'GBP',
              decimalPlaces: 2,
            },
          ],
          percentageDiscount: 0,
          includesBookingFee: true,
          promotionLabel: null,
          createdAt: '2020-05-13T06:59:09+0000',
        },
      },
      {
        seatIdentifier: 'STALLS-H11',
        aggregateReference: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2aSI6IjEzOCIsInZjIjoiR0IiLCJwaSI6IjE1ODciLCJpaSI6IlNUQUxMU35IOTsxMyIsImliIjoiU1QiLCJpciI6IkgiLCJpc24iOiIxMSIsImlzbGQiOiJTdGFsbHMiLCJpcGkiOm51bGwsImlkIjoiMjAyMC0wOS0yNlQxOTozMDowMCswMDowMCIsImVzaSI6IkVOVEEiLCJlcmkiOiI1OTkiLCJlc2VpIjoiNyIsImViaSI6IlNUQSIsImVwaSI6Ijc3MTcyMyIsImVkY3QiOiJFTkMsQVAwLDEiLCJwYWkiOiIyNjU0IiwiY3B2Ijo4NTAwLCJjcGMiOiJHQlAiLCJvc3B2IjoxMDQwMCwib3NwYyI6IkdCUCIsIm9mdnYiOjg1MDAsIm9mdmMiOiJHQlAiLCJzc3B2IjoxMDQwMCwic3NwYyI6IkdCUCIsInNmdnYiOjg1MDAsInNmdmMiOiJHQlAiLCJvdHNzcGZyIjoxLCJzdG9zcGZyIjoxLCJpYyI6bnVsbCwicG1jIjpudWxsLCJyZWQiOiIxODU4MTExNyIsInBydiI6MH0.Ko6ocp8Ao79hj8WyMX3fGWtH4z9iQ_yhoEwWDlKfp-c',
        row: 'H',
        number: 11,
        pricing: {
          salePrice: [
            {
              value: 10400,
              currency: 'GBP',
              decimalPlaces: 2,
            },
          ],
          faceValue: [
            {
              value: 8500,
              currency: 'GBP',
              decimalPlaces: 2,
            },
          ],
          percentageDiscount: 0,
          includesBookingFee: true,
          promotionLabel: null,
          createdAt: '2020-05-13T06:59:09+0000',
        },
      },
      {
        seatIdentifier: 'STALLS-H12',
        aggregateReference: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2aSI6IjEzOCIsInZjIjoiR0IiLCJwaSI6IjE1ODciLCJpaSI6IlNUQUxMU35IOTsxMyIsImliIjoiU1QiLCJpciI6IkgiLCJpc24iOiIxMiIsImlzbGQiOiJTdGFsbHMiLCJpcGkiOm51bGwsImlkIjoiMjAyMC0wOS0yNlQxOTozMDowMCswMDowMCIsImVzaSI6IkVOVEEiLCJlcmkiOiI1OTkiLCJlc2VpIjoiOCIsImViaSI6IlNUQSIsImVwaSI6Ijc3MTcyMyIsImVkY3QiOiJFTkMsQVAwLDEiLCJwYWkiOiIyNjU0IiwiY3B2Ijo4NTAwLCJjcGMiOiJHQlAiLCJvc3B2IjoxMDQwMCwib3NwYyI6IkdCUCIsIm9mdnYiOjg1MDAsIm9mdmMiOiJHQlAiLCJzc3B2IjoxMDQwMCwic3NwYyI6IkdCUCIsInNmdnYiOjg1MDAsInNmdmMiOiJHQlAiLCJvdHNzcGZyIjoxLCJzdG9zcGZyIjoxLCJpYyI6bnVsbCwicG1jIjpudWxsLCJyZWQiOiIxODU4MTExNyIsInBydiI6MH0.ZtCtIXxL7coAW-gVK4jR4cZWUmyrGnpNr3XNcSFxETU',
        row: 'H',
        number: 12,
        pricing: {
          salePrice: [
            {
              value: 10400,
              currency: 'GBP',
              decimalPlaces: 2,
            },
          ],
          faceValue: [
            {
              value: 8500,
              currency: 'GBP',
              decimalPlaces: 2,
            },
          ],
          percentageDiscount: 0,
          includesBookingFee: true,
          promotionLabel: null,
          createdAt: '2020-05-13T06:59:09+0000',
        },
      },
      {
        seatIdentifier: 'STALLS-H13',
        aggregateReference: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2aSI6IjEzOCIsInZjIjoiR0IiLCJwaSI6IjE1ODciLCJpaSI6IlNUQUxMU35IOTsxMyIsImliIjoiU1QiLCJpciI6IkgiLCJpc24iOiIxMyIsImlzbGQiOiJTdGFsbHMiLCJpcGkiOm51bGwsImlkIjoiMjAyMC0wOS0yNlQxOTozMDowMCswMDowMCIsImVzaSI6IkVOVEEiLCJlcmkiOiI1OTkiLCJlc2VpIjoiOSIsImViaSI6IlNUQSIsImVwaSI6Ijc3MTcyMyIsImVkY3QiOiJFTkMsQVAwLDEiLCJwYWkiOiIyNjU0IiwiY3B2Ijo4NTAwLCJjcGMiOiJHQlAiLCJvc3B2IjoxMDQwMCwib3NwYyI6IkdCUCIsIm9mdnYiOjg1MDAsIm9mdmMiOiJHQlAiLCJzc3B2IjoxMDQwMCwic3NwYyI6IkdCUCIsInNmdnYiOjg1MDAsInNmdmMiOiJHQlAiLCJvdHNzcGZyIjoxLCJzdG9zcGZyIjoxLCJpYyI6bnVsbCwicG1jIjpudWxsLCJyZWQiOiIxODU4MTExNyIsInBydiI6MH0.lql3B250-85GIFHzATkWzc0WCW-uor7tef1gbB6Uc6c',
        row: 'H',
        number: 13,
        pricing: {
          salePrice: [
            {
              value: 10400,
              currency: 'GBP',
              decimalPlaces: 2,
            },
          ],
          faceValue: [
            {
              value: 8500,
              currency: 'GBP',
              decimalPlaces: 2,
            },
          ],
          percentageDiscount: 0,
          includesBookingFee: true,
          promotionLabel: null,
          createdAt: '2020-05-13T06:59:09+0000',
        },
      },
    ],
    seatLumps: [
      {
        seats: [
          'STALLS-H9',
          'STALLS-H10',
        ],
      },
      {
        seats: [
          'STALLS-H12',
          'STALLS-H13',
        ],
      },
    ],
  }],
  mode: 'allocated',
  name: 'Stalls',
}];

export const availabilitySeveralGroupingsMock = [{
  availableCount: 6,
  date: '2020-09-26T19:30:00+0000',
  groupings: [{
    groupIdentifier: 'STALLS~X24;31',
    aggregateReference: null as string | null,
    row: 'X',
    seatNumberStart: 24,
    seatNumberEnd: 25,
    availableCount: 2,
    pricing: {
      salePrice: [
        {
          value: 9200,
          currency: 'GBP',
          decimalPlaces: 2,
        },
      ],
      faceValue: [
        {
          value: 7500,
          currency: 'GBP',
          decimalPlaces: 2,
        },
      ],
      percentageDiscount: 0,
      includesBookingFee: true,
      createdAt: '2020-05-13T06:59:09+0000',
    },
    seats: [
      {
        seatIdentifier: 'STALLS-X24',
        aggregateReference: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2aSI6IjEzOCIsInZjIjoiR0IiLCJwaSI6IjE1ODciLCJpaSI6IlNUQUxMU35YMjQ7MzEiLCJpYiI6IlNUIiwiaXIiOiJYIiwiaXNuIjoiMjQiLCJpc2xkIjoiU3RhbGxzIiwiaXBpIjpudWxsLCJpZCI6IjIwMjAtMDktMjZUMTk6MzA6MDArMDA6MDAiLCJlc2kiOiJFTlRBIiwiZXJpIjoiNzc3IiwiZXNlaSI6IjEiLCJlYmkiOiJTVEEiLCJlcGkiOiI3NzE3MjMiLCJlZGN0IjoiRU5DLEFQMCwxIiwicGFpIjoiMjY1NCIsImNwdiI6NzUwMCwiY3BjIjoiR0JQIiwib3NwdiI6OTIwMCwib3NwYyI6IkdCUCIsIm9mdnYiOjc1MDAsIm9mdmMiOiJHQlAiLCJzc3B2Ijo5MjAwLCJzc3BjIjoiR0JQIiwic2Z2diI6NzUwMCwic2Z2YyI6IkdCUCIsIm90c3NwZnIiOjEsInN0b3NwZnIiOjEsImljIjpudWxsLCJwbWMiOm51bGwsInJlZCI6IjE4NTgxMTE3IiwicHJ2IjowfQ.vHngVTg3EwWw8eJBrwIsElOxDtFF3M7b8sASXVpRZCE',
        row: 'X',
        number: 24,
        pricing: {
          salePrice: [
            {
              value: 9200,
              currency: 'GBP',
              decimalPlaces: 2,
            },
          ],
          faceValue: [
            {
              value: 7500,
              currency: 'GBP',
              decimalPlaces: 2,
            },
          ],
          percentageDiscount: 0,
          includesBookingFee: true,
          promotionLabel: null,
          createdAt: '2020-05-13T06:59:09+0000',
        },
      },
      {
        seatIdentifier: 'STALLS-X25',
        aggregateReference: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2aSI6IjEzOCIsInZjIjoiR0IiLCJwaSI6IjE1ODciLCJpaSI6IlNUQUxMU35YMjQ7MzEiLCJpYiI6IlNUIiwiaXIiOiJYIiwiaXNuIjoiMjUiLCJpc2xkIjoiU3RhbGxzIiwiaXBpIjpudWxsLCJpZCI6IjIwMjAtMDktMjZUMTk6MzA6MDArMDA6MDAiLCJlc2kiOiJFTlRBIiwiZXJpIjoiNzc3IiwiZXNlaSI6IjIiLCJlYmkiOiJTVEEiLCJlcGkiOiI3NzE3MjMiLCJlZGN0IjoiRU5DLEFQMCwxIiwicGFpIjoiMjY1NCIsImNwdiI6NzUwMCwiY3BjIjoiR0JQIiwib3NwdiI6OTIwMCwib3NwYyI6IkdCUCIsIm9mdnYiOjc1MDAsIm9mdmMiOiJHQlAiLCJzc3B2Ijo5MjAwLCJzc3BjIjoiR0JQIiwic2Z2diI6NzUwMCwic2Z2YyI6IkdCUCIsIm90c3NwZnIiOjEsInN0b3NwZnIiOjEsImljIjpudWxsLCJwbWMiOm51bGwsInJlZCI6IjE4NTgxMTE3IiwicHJ2IjowfQ.yeOZLUXzb3kXuKyQAWKcldi6WKoXtx2LSgHIZGCD1zY',
        row: 'X',
        number: 25,
        pricing: {
          salePrice: [
            {
              value: 9200,
              currency: 'GBP',
              decimalPlaces: 2,
            },
          ],
          faceValue: [
            {
              value: 7500,
              currency: 'GBP',
              decimalPlaces: 2,
            },
          ],
          percentageDiscount: 0,
          includesBookingFee: true,
          promotionLabel: null,
          createdAt: '2020-05-13T06:59:09+0000',
        },
      },
    ],
    seatLumps: [
      {
        seats: [
          'STALLS-X24',
          'STALLS-X25',
        ],
      },
    ],
  }, {
    groupIdentifier: 'STALLS~H9;13',
    aggregateReference: null as string | null,
    row: 'H',
    seatNumberStart: 9,
    seatNumberEnd: 13,
    availableCount: 5,
    pricing: {
      salePrice: [
        {
          value: 10400,
          currency: 'GBP',
          decimalPlaces: 2,
        },
      ],
      faceValue: [
        {
          value: 8500,
          currency: 'GBP',
          decimalPlaces: 2,
        },
      ],
      percentageDiscount: 0,
      includesBookingFee: true,
      createdAt: '2020-05-13T06:59:09+0000',
    },
    seats: [
      {
        seatIdentifier: 'STALLS-H9',
        aggregateReference: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2aSI6IjEzOCIsInZjIjoiR0IiLCJwaSI6IjE1ODciLCJpaSI6IlNUQUxMU35IOTsxMyIsImliIjoiU1QiLCJpciI6IkgiLCJpc24iOiI5IiwiaXNsZCI6IlN0YWxscyIsImlwaSI6bnVsbCwiaWQiOiIyMDIwLTA5LTI2VDE5OjMwOjAwKzAwOjAwIiwiZXNpIjoiRU5UQSIsImVyaSI6IjU5OSIsImVzZWkiOiI1IiwiZWJpIjoiU1RBIiwiZXBpIjoiNzcxNzIzIiwiZWRjdCI6IkVOQyxBUDAsMSIsInBhaSI6IjI2NTQiLCJjcHYiOjg1MDAsImNwYyI6IkdCUCIsIm9zcHYiOjEwNDAwLCJvc3BjIjoiR0JQIiwib2Z2diI6ODUwMCwib2Z2YyI6IkdCUCIsInNzcHYiOjEwNDAwLCJzc3BjIjoiR0JQIiwic2Z2diI6ODUwMCwic2Z2YyI6IkdCUCIsIm90c3NwZnIiOjEsInN0b3NwZnIiOjEsImljIjpudWxsLCJwbWMiOm51bGwsInJlZCI6IjE4NTgxMTE3IiwicHJ2IjowfQ.P437Q6ilX7sgKIx9oO313RxdcZHCnTuEASLg-dkOG1M',
        row: 'H',
        number: 9,
        pricing: {
          salePrice: [
            {
              value: 10400,
              currency: 'GBP',
              decimalPlaces: 2,
            },
          ],
          faceValue: [
            {
              value: 8500,
              currency: 'GBP',
              decimalPlaces: 2,
            },
          ],
          percentageDiscount: 0,
          includesBookingFee: true,
          promotionLabel: null,
          createdAt: '2020-05-13T06:59:09+0000',
        },
      },
      {
        seatIdentifier: 'STALLS-H10',
        aggregateReference: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2aSI6IjEzOCIsInZjIjoiR0IiLCJwaSI6IjE1ODciLCJpaSI6IlNUQUxMU35IOTsxMyIsImliIjoiU1QiLCJpciI6IkgiLCJpc24iOiIxMCIsImlzbGQiOiJTdGFsbHMiLCJpcGkiOm51bGwsImlkIjoiMjAyMC0wOS0yNlQxOTozMDowMCswMDowMCIsImVzaSI6IkVOVEEiLCJlcmkiOiI1OTkiLCJlc2VpIjoiNiIsImViaSI6IlNUQSIsImVwaSI6Ijc3MTcyMyIsImVkY3QiOiJFTkMsQVAwLDEiLCJwYWkiOiIyNjU0IiwiY3B2Ijo4NTAwLCJjcGMiOiJHQlAiLCJvc3B2IjoxMDQwMCwib3NwYyI6IkdCUCIsIm9mdnYiOjg1MDAsIm9mdmMiOiJHQlAiLCJzc3B2IjoxMDQwMCwic3NwYyI6IkdCUCIsInNmdnYiOjg1MDAsInNmdmMiOiJHQlAiLCJvdHNzcGZyIjoxLCJzdG9zcGZyIjoxLCJpYyI6bnVsbCwicG1jIjpudWxsLCJyZWQiOiIxODU4MTExNyIsInBydiI6MH0.tScX3SRxo1HtdVZOx_3Q7WGKuojXBF-Aw6vPwgA3mmc',
        row: 'H',
        number: 10,
        pricing: {
          salePrice: [
            {
              value: 10400,
              currency: 'GBP',
              decimalPlaces: 2,
            },
          ],
          faceValue: [
            {
              value: 8500,
              currency: 'GBP',
              decimalPlaces: 2,
            },
          ],
          percentageDiscount: 0,
          includesBookingFee: true,
          promotionLabel: null,
          createdAt: '2020-05-13T06:59:09+0000',
        },
      },
      {
        seatIdentifier: 'STALLS-H11',
        aggregateReference: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2aSI6IjEzOCIsInZjIjoiR0IiLCJwaSI6IjE1ODciLCJpaSI6IlNUQUxMU35IOTsxMyIsImliIjoiU1QiLCJpciI6IkgiLCJpc24iOiIxMSIsImlzbGQiOiJTdGFsbHMiLCJpcGkiOm51bGwsImlkIjoiMjAyMC0wOS0yNlQxOTozMDowMCswMDowMCIsImVzaSI6IkVOVEEiLCJlcmkiOiI1OTkiLCJlc2VpIjoiNyIsImViaSI6IlNUQSIsImVwaSI6Ijc3MTcyMyIsImVkY3QiOiJFTkMsQVAwLDEiLCJwYWkiOiIyNjU0IiwiY3B2Ijo4NTAwLCJjcGMiOiJHQlAiLCJvc3B2IjoxMDQwMCwib3NwYyI6IkdCUCIsIm9mdnYiOjg1MDAsIm9mdmMiOiJHQlAiLCJzc3B2IjoxMDQwMCwic3NwYyI6IkdCUCIsInNmdnYiOjg1MDAsInNmdmMiOiJHQlAiLCJvdHNzcGZyIjoxLCJzdG9zcGZyIjoxLCJpYyI6bnVsbCwicG1jIjpudWxsLCJyZWQiOiIxODU4MTExNyIsInBydiI6MH0.Ko6ocp8Ao79hj8WyMX3fGWtH4z9iQ_yhoEwWDlKfp-c',
        row: 'H',
        number: 11,
        pricing: {
          salePrice: [
            {
              value: 10400,
              currency: 'GBP',
              decimalPlaces: 2,
            },
          ],
          faceValue: [
            {
              value: 8500,
              currency: 'GBP',
              decimalPlaces: 2,
            },
          ],
          percentageDiscount: 0,
          includesBookingFee: true,
          promotionLabel: null,
          createdAt: '2020-05-13T06:59:09+0000',
        },
      },
      {
        seatIdentifier: 'STALLS-H12',
        aggregateReference: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2aSI6IjEzOCIsInZjIjoiR0IiLCJwaSI6IjE1ODciLCJpaSI6IlNUQUxMU35IOTsxMyIsImliIjoiU1QiLCJpciI6IkgiLCJpc24iOiIxMiIsImlzbGQiOiJTdGFsbHMiLCJpcGkiOm51bGwsImlkIjoiMjAyMC0wOS0yNlQxOTozMDowMCswMDowMCIsImVzaSI6IkVOVEEiLCJlcmkiOiI1OTkiLCJlc2VpIjoiOCIsImViaSI6IlNUQSIsImVwaSI6Ijc3MTcyMyIsImVkY3QiOiJFTkMsQVAwLDEiLCJwYWkiOiIyNjU0IiwiY3B2Ijo4NTAwLCJjcGMiOiJHQlAiLCJvc3B2IjoxMDQwMCwib3NwYyI6IkdCUCIsIm9mdnYiOjg1MDAsIm9mdmMiOiJHQlAiLCJzc3B2IjoxMDQwMCwic3NwYyI6IkdCUCIsInNmdnYiOjg1MDAsInNmdmMiOiJHQlAiLCJvdHNzcGZyIjoxLCJzdG9zcGZyIjoxLCJpYyI6bnVsbCwicG1jIjpudWxsLCJyZWQiOiIxODU4MTExNyIsInBydiI6MH0.ZtCtIXxL7coAW-gVK4jR4cZWUmyrGnpNr3XNcSFxETU',
        row: 'H',
        number: 12,
        pricing: {
          salePrice: [
            {
              value: 10400,
              currency: 'GBP',
              decimalPlaces: 2,
            },
          ],
          faceValue: [
            {
              value: 8500,
              currency: 'GBP',
              decimalPlaces: 2,
            },
          ],
          percentageDiscount: 0,
          includesBookingFee: true,
          promotionLabel: null,
          createdAt: '2020-05-13T06:59:09+0000',
        },
      },
      {
        seatIdentifier: 'STALLS-H13',
        aggregateReference: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2aSI6IjEzOCIsInZjIjoiR0IiLCJwaSI6IjE1ODciLCJpaSI6IlNUQUxMU35IOTsxMyIsImliIjoiU1QiLCJpciI6IkgiLCJpc24iOiIxMyIsImlzbGQiOiJTdGFsbHMiLCJpcGkiOm51bGwsImlkIjoiMjAyMC0wOS0yNlQxOTozMDowMCswMDowMCIsImVzaSI6IkVOVEEiLCJlcmkiOiI1OTkiLCJlc2VpIjoiOSIsImViaSI6IlNUQSIsImVwaSI6Ijc3MTcyMyIsImVkY3QiOiJFTkMsQVAwLDEiLCJwYWkiOiIyNjU0IiwiY3B2Ijo4NTAwLCJjcGMiOiJHQlAiLCJvc3B2IjoxMDQwMCwib3NwYyI6IkdCUCIsIm9mdnYiOjg1MDAsIm9mdmMiOiJHQlAiLCJzc3B2IjoxMDQwMCwic3NwYyI6IkdCUCIsInNmdnYiOjg1MDAsInNmdmMiOiJHQlAiLCJvdHNzcGZyIjoxLCJzdG9zcGZyIjoxLCJpYyI6bnVsbCwicG1jIjpudWxsLCJyZWQiOiIxODU4MTExNyIsInBydiI6MH0.lql3B250-85GIFHzATkWzc0WCW-uor7tef1gbB6Uc6c',
        row: 'H',
        number: 13,
        pricing: {
          salePrice: [
            {
              value: 10400,
              currency: 'GBP',
              decimalPlaces: 2,
            },
          ],
          faceValue: [
            {
              value: 8500,
              currency: 'GBP',
              decimalPlaces: 2,
            },
          ],
          percentageDiscount: 0,
          includesBookingFee: true,
          promotionLabel: null,
          createdAt: '2020-05-13T06:59:09+0000',
        },
      },
    ],
    seatLumps: [
      {
        seats: [
          'STALLS-H9',
          'STALLS-H10',
        ],
      },
      {
        seats: [
          'STALLS-H12',
          'STALLS-H13',
        ],
      },
    ],
  }],
  mode: 'allocated',
  name: 'Stalls',
}];

export const availabilitySeveralGroupsMock = [
  ...availabilitySingleLumpCircleMock,
  ...availabilitySingleLumpStallsMock,
];

export const availabilityWithoutSeatDetails = [
  {
    availableCount: 1,
    date: '2020-09-27T15:00:00-0400',
    name: 'Rear Mezzanine D-J',
    mode: 'freesell',
    groupings: [
      {
        groupIdentifier: 'Rear Mezzanine D-J',
        aggregateReference: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2aSI6IjcwNSIsInZjIjoiVVMiLCJwaSI6IjcwMzgiLCJpaSI6IlJlYXIgTWV6emFuaW5lIEQtSiIsImliIjpudWxsLCJpciI6bnVsbCwiaXNuIjpudWxsLCJpc2xkIjoiUmVhciBNZXp6YW5pbmUgRC1KIiwiaXBpIjoiQkl-MTU5MzgwNSIsImlkIjoiMjAyMC0wOS0yN1QxNTowMDowMC0wNDowMCIsImVzaSI6IkJJIiwiZXJpIjpudWxsLCJlc2VpIjpudWxsLCJlYmkiOm51bGwsImVwaSI6bnVsbCwiZWRjdCI6bnVsbCwicGFpIjoiMjY1NCIsImNwdiI6NjQ3MCwiY3BjIjoiVVNEIiwib3NwdiI6NjUwMCwib3NwYyI6IkdCUCIsIm9mdnYiOjQ5MDAsIm9mdmMiOiJHQlAiLCJzc3B2Ijo2NTAwLCJzc3BjIjoiR0JQIiwic2Z2diI6NDkwMCwic2Z2YyI6IkdCUCIsIm90c3NwZnIiOjEsInN0b3NwZnIiOjAuODE0NjQ4LCJpYyI6bnVsbCwicG1jIjpudWxsLCJyZWQiOm51bGwsInBydiI6bnVsbH0.hdyGMOJK_g_KX3LPJOq9ef8EB3be8xngXOXkC7Vou40',
        row: null as string | null,
        seatNumberStart: null as number | null,
        seatNumberEnd: null as number | null,
        availableCount: 1,
        pricing: {
          salePrice: [
            {
              value: 8000,
              currency: 'USD',
              decimalPlaces: 2,
            },
            {
              value: 6500,
              currency: 'GBP',
              decimalPlaces: 2,
            },
          ],
          faceValue: [
            {
              value: 5900,
              currency: 'USD',
              decimalPlaces: 2,
            },
            {
              value: 4900,
              currency: 'GBP',
              decimalPlaces: 2,
            },
          ],
          percentageDiscount: 0,
          includesBookingFee: true,
          createdAt: '2020-05-13T11:22:44+0000',
        },
        seats: [] as any,
        seatLumps: [] as any,
      },
    ],
  },
  {
    availableCount: 1,
    date: '2020-09-27T15:00:00-0400',
    name: 'Orchestra Far Side Rows P-U,Front Mezzanine A-F',
    mode: 'freesell',
    groupings: [
      {
        groupIdentifier: 'Orchestra Far Side Rows P-U,Front Mezzanine A-F',
        aggregateReference: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2aSI6IjcwNSIsInZjIjoiVVMiLCJwaSI6IjcwMzgiLCJpaSI6Ik9yY2hlc3RyYSBGYXIgU2lkZSBSb3dzIFAtVSxGcm9udCBNZXp6YW5pbmUgQS1GIiwiaWIiOm51bGwsImlyIjpudWxsLCJpc24iOm51bGwsImlzbGQiOiJPcmNoZXN0cmEgRmFyIFNpZGUgUm93cyBQLVUsRnJvbnQgTWV6emFuaW5lIEEtRiIsImlwaSI6IkJJfjE1OTM4MDQiLCJpZCI6IjIwMjAtMDktMjdUMTU6MDA6MDAtMDQ6MDAiLCJlc2kiOiJCSSIsImVyaSI6bnVsbCwiZXNlaSI6bnVsbCwiZWJpIjpudWxsLCJlcGkiOm51bGwsImVkY3QiOm51bGwsInBhaSI6IjI2NTQiLCJjcHYiOjk5MDAsImNwYyI6IlVTRCIsIm9zcHYiOjEwMDAwLCJvc3BjIjoiR0JQIiwib2Z2diI6OTcwMCwib2Z2YyI6IkdCUCIsInNzcHYiOjEwMDAwLCJzc3BjIjoiR0JQIiwic2Z2diI6OTcwMCwic2Z2YyI6IkdCUCIsIm90c3NwZnIiOjEsInN0b3NwZnIiOjAuODE0NjQ4LCJpYyI6bnVsbCwicG1jIjpudWxsLCJyZWQiOm51bGwsInBydiI6bnVsbH0.Bc6ZJ0IsSfk-ungSmcdDDsduSUvY1zCZ7x81hXkK_0o',
        row: null as string | null,
        seatNumberStart: null as number | null,
        attributes: [] as any,
        availableCount: 1,
        pricing: {
          salePrice: [
            {
              value: 12200,
              currency: 'USD',
              decimalPlaces: 2,
            },
            {
              value: 10000,
              currency: 'GBP',
              decimalPlaces: 2,
            },
          ],
          faceValue: [
            {
              value: 11900,
              currency: 'USD',
              decimalPlaces: 2,
            },
            {
              value: 9700,
              currency: 'GBP',
              decimalPlaces: 2,
            },
          ],
          percentageDiscount: 0,
          includesBookingFee: true,
          createdAt: '2020-05-13T11:22:44+0000',
        },
        seats: [] as any,
        seatLumps: [] as any,
      },
    ],
  },
  {
    availableCount: 1,
    date: '2020-09-27T15:00:00-0400',
    name: 'Orchestra Far Side Rows C-O',
    mode: 'freesell',
    groupings: [
      {
        groupIdentifier: 'Orchestra Far Side Rows C-O',
        aggregateReference: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2aSI6IjcwNSIsInZjIjoiVVMiLCJwaSI6IjcwMzgiLCJpaSI6Ik9yY2hlc3RyYSBGYXIgU2lkZSBSb3dzIEMtTyIsImliIjpudWxsLCJpciI6bnVsbCwiaXNuIjpudWxsLCJpc2xkIjoiT3JjaGVzdHJhIEZhciBTaWRlIFJvd3MgQy1PIiwiaXBpIjoiQkl-MTU5MzgwMyIsImlkIjoiMjAyMC0wOS0yN1QxNTowMDowMC0wNDowMCIsImVzaSI6IkJJIiwiZXJpIjpudWxsLCJlc2VpIjpudWxsLCJlYmkiOm51bGwsImVwaSI6bnVsbCwiZWRjdCI6bnVsbCwicGFpIjoiMjY1NCIsImNwdiI6MTI5MDAsImNwYyI6IlVTRCIsIm9zcHYiOjEzMDAwLCJvc3BjIjoiR0JQIiwib2Z2diI6MTQ2MDAsIm9mdmMiOiJHQlAiLCJzc3B2IjoxMzAwMCwic3NwYyI6IkdCUCIsInNmdnYiOjE0NjAwLCJzZnZjIjoiR0JQIiwib3Rzc3BmciI6MSwic3Rvc3BmciI6MC44MTQ2NDgsImljIjpudWxsLCJwbWMiOm51bGwsInJlZCI6bnVsbCwicHJ2IjpudWxsfQ.90LpCm2j1vk8M8y-zyTxKDyJnsoOEIpdtNWeflT9Cu0',
        row: null as string | null,
        seatNumberStart: null as number | null,
        attributes: [] as any,
        availableCount: 1,
        pricing: {
          salePrice: [
            {
              value: 15900,
              currency: 'USD',
              decimalPlaces: 2,
            },
            {
              value: 13000,
              currency: 'GBP',
              decimalPlaces: 2,
            },
          ],
          faceValue: [
            {
              value: 17900,
              currency: 'USD',
              decimalPlaces: 2,
            },
            {
              value: 14600,
              currency: 'GBP',
              decimalPlaces: 2,
            },
          ],
          percentageDiscount: 11,
          includesBookingFee: true,
          createdAt: '2020-05-13T11:22:44+0000',
        },
        seats: [] as any,
        seatLumps: [] as any,
      },
    ],
  },
  {
    availableCount: 1,
    date: '2020-09-27T15:00:00-0400',
    name: 'Orchestra  Rows B-O',
    mode: 'freesell',
    groupings: [
      {
        groupIdentifier: 'Orchestra  Rows B-O',
        aggregateReference: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2aSI6IjcwNSIsInZjIjoiVVMiLCJwaSI6IjcwMzgiLCJpaSI6Ik9yY2hlc3RyYSAgUm93cyBCLU8iLCJpYiI6bnVsbCwiaXIiOm51bGwsImlzbiI6bnVsbCwiaXNsZCI6Ik9yY2hlc3RyYSAgUm93cyBCLU8iLCJpcGkiOiJCSX4xNjYyMTg1IiwiaWQiOiIyMDIwLTA5LTI3VDE1OjAwOjAwLTA0OjAwIiwiZXNpIjoiQkkiLCJlcmkiOm51bGwsImVzZWkiOm51bGwsImViaSI6bnVsbCwiZXBpIjpudWxsLCJlZGN0IjpudWxsLCJwYWkiOiIyNjU0IiwiY3B2IjoyMDc3MCwiY3BjIjoiVVNEIiwib3NwdiI6MjA5MDAsIm9zcGMiOiJHQlAiLCJvZnZ2IjoxNTQwMCwib2Z2YyI6IkdCUCIsInNzcHYiOjIwOTAwLCJzc3BjIjoiR0JQIiwic2Z2diI6MTU0MDAsInNmdmMiOiJHQlAiLCJvdHNzcGZyIjoxLCJzdG9zcGZyIjowLjgxNDY0OCwiaWMiOm51bGwsInBtYyI6bnVsbCwicmVkIjpudWxsLCJwcnYiOm51bGx9.nL5JSWZp_P1nRR6DOT8qUNhQUnoxSsPbrPDcDsmn1CA',
        row: null as string | null,
        seatNumberStart: null as number | null,
        attributes: [] as any,
        availableCount: 1,
        pricing: {
          salePrice: [
            {
              value: 25600,
              currency: 'USD',
              decimalPlaces: 2,
            },
            {
              value: 20900,
              currency: 'GBP',
              decimalPlaces: 2,
            },
          ],
          faceValue: [
            {
              value: 18900,
              currency: 'USD',
              decimalPlaces: 2,
            },
            {
              value: 15400,
              currency: 'GBP',
              decimalPlaces: 2,
            },
          ],
          percentageDiscount: 0,
          includesBookingFee: true,
          createdAt: '2020-05-13T11:22:44+0000',
        },
        seats: [] as any,
        seatLumps: [] as any,
      },
    ],
  },
];
