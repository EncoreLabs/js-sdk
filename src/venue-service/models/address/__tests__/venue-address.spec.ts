import { AddressModel } from '../venue-address';
import { VenueCountry } from '../country';
import { VenueRegion } from '../region';
import { venueDetailsMock } from '../../../__mocks__';

describe('AddressModel', () => {
  const getAddress = (customData: any = {}) => {
    return new AddressModel({
      ...venueDetailsMock.address,
      ...customData,
    });
  };

  describe('getFirstLine function', () => {
    it('should get first line', () => {
      const address = getAddress();

      expect(address.getFirstLine()).toBe(venueDetailsMock.address.firstLine);
    });
  });

  describe('getSecondLine function', () => {
    it('should get second line', () => {
      const address = getAddress();

      expect(address.getSecondLine()).toBe(venueDetailsMock.address.secondLine);
    });
  });

  describe('getThirdLine function', () => {
    it('should get third line', () => {
      const address = getAddress();

      expect(address.getThirdLine()).toBe(venueDetailsMock.address.thirdLine);
    });
  });

  describe('getCity function', () => {
    it('should get city', () => {
      const address = getAddress();

      expect(address.getCity()).toBe(venueDetailsMock.address.city);
    });
  });

  describe('getPostCode function', () => {
    it('should get postCode', () => {
      const address = getAddress();

      expect(address.getPostCode()).toBe(venueDetailsMock.address.postcode);
    });
  });

  describe('getRegion function', () => {
    it('should get region', () => {
      const address = getAddress();

      expect(address.getRegion()).toEqual(new VenueRegion(venueDetailsMock.address.region));
    });

    it('should return null if region is not defined', () => {
      const address = getAddress({ region: null });

      expect(address.getRegion()).toBeNull();
    });
  });

  describe('getCountry function', () => {
    it('should get country', () => {
      const address = getAddress();

      expect(address.getCountry()).toEqual(new VenueCountry(venueDetailsMock.address.country));
    });

    it('should return null if country is not defined', () => {
      const address = getAddress({ country: null });

      expect(address.getCountry()).toBeNull();
    });
  });

  describe('getCoordinates method', () => {
    it('should get coordinates', () => {
      const address = new AddressModel(venueDetailsMock.address);

      expect(address.getCoordinates()).toEqual({
        latitude: venueDetailsMock.address.latitude,
        longitude: venueDetailsMock.address.longitude,
      });
    });
  });
});
