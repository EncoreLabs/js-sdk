import { VenueAddress } from '../venue-address';
import { Country } from '../country';
import { Region } from '../region';
import { apiProductDataMock } from '../../../__mocks__/product-data';

describe('Venue Address model', () => {
  const getAddress = () => {
    return new VenueAddress(apiProductDataMock.venue.address);
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
  });

  describe('getCountry function', () => {
    it('should get country', () => {
      const address = getAddress();

      expect(address.getCountry()).toEqual(new Country(apiProductDataMock.venue.address.country));
    });
  });
});
