import { Country } from '../country';
import { apiProductDataMock } from '../../../__mocks__/product-data';

describe('Country model', () => {
  const getCountry = () => {
    return new Country(apiProductDataMock.venue.address.country);
  };

  describe('getName function', () => {
    it('should get country name', () => {
      const country = getCountry();

      expect(country.getName()).toBe(apiProductDataMock.venue.address.country.name);
    });
  });

  describe('getISOCode function', () => {
    it('should get ISO code', () => {
      const country = getCountry();

      expect(country.getISOCode()).toBe(apiProductDataMock.venue.address.country.isoCode);
    });
  });
});
