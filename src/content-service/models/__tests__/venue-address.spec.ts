import { VenueAddress } from '../venue-address';
import { Country } from '../country';
import { Region } from '../region';
import { apiProductDataMock } from '../../../__mocks__/product-data';
import { venueDetailsMock } from '../../../venue-service/__mocks__';

describe('Venue Address model', () => {
  const getAddress = (customData: any = {}) => {
    return new VenueAddress({
      ...apiProductDataMock.venue.address,
      ...customData,
    });
  };

  describe('getFirstLine function', () => {
    it('should get first line', () => {
      const address = getAddress();

      expect(address.getFirstLine()).toBe(apiProductDataMock.venue.address.firstLine);
    });
  });

  describe('getSecondLine function', () => {
    it('should get second line', () => {
      const address = getAddress();

      expect(address.getSecondLine()).toBe(apiProductDataMock.venue.address.secondLine);
    });
  });

  describe('getThirdLine function', () => {
    it('should get third line', () => {
      const address = getAddress();

      expect(address.getThirdLine()).toBe(apiProductDataMock.venue.address.thirdLine);
    });
  });

  describe('getCity function', () => {
    it('should get city', () => {
      const address = getAddress();

      expect(address.getCity()).toBe(apiProductDataMock.venue.address.city);
    });
  });

  describe('getPostCode function', () => {
    it('should get postCode', () => {
      const address = getAddress();

      expect(address.getPostCode()).toBe(apiProductDataMock.venue.address.postCode);
    });
  });

  describe('getRegion function', () => {
    it('should get region', () => {
      const address = getAddress();

      expect(address.getRegion()).toEqual(new Region(apiProductDataMock.venue.address.region));
    });

    it('should return null if region is not defined', () => {
      const address = getAddress({ region: null });

      expect(address.getRegion()).toBeNull();
    });
  });

  describe('getCountry function', () => {
    it('should get country', () => {
      const address = getAddress();

      expect(address.getCountry()).toEqual(new Country(apiProductDataMock.venue.address.country));
    });

    it('should return null if country is not defined', () => {
      const address = getAddress({ country: null });

      expect(address.getCountry()).toBeNull();
    });
  });

  describe('getCoordinates method', () => {
    it('should get coordinates', () => {
      const address = new VenueAddress(venueDetailsMock.address)

      expect(address.getCoordinates()).toEqual({
        latitude: venueDetailsMock.address.latitude,
        longitude: venueDetailsMock.address.longitude,
      });
    });
  });
});
