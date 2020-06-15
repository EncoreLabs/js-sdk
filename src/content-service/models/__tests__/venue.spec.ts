import { Venue } from '../venue';
import { VenueAddress } from '../venue-address';
import { apiProductDataMock } from '../../../__mocks__/product-data';

describe('Venue model', () => {
  const getVenue = () => {
    return new Venue(apiProductDataMock.venue);
  };

  describe('getId function', () => {
    it('should get venue id', () => {
      const venue = getVenue();

      expect(venue.getId()).toBe(apiProductDataMock.venue.id);
    });
  });

  describe('getName function', () => {
    it('should get name of venue', () => {
      const venue = getVenue();

      expect(venue.getName()).toBe(apiProductDataMock.venue.name);
    });
  });

  describe('getAddress function', () => {
    it('should get address of venue', () => {
      const venue = getVenue();

      expect(venue.getAddress()).toEqual(new VenueAddress(apiProductDataMock.venue.address));
    });
  });
});
