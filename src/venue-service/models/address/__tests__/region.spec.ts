import { VenueRegion } from '../region';
import { apiProductDataMock } from '../../../../__mocks__/product-data';

describe('VenueRegion model', () => {
  const getRegion = () => {
    return new VenueRegion(apiProductDataMock.venue.address.region);
  };

  describe('getName function', () => {
    it('should get region name', () => {
      const region = getRegion();

      expect(region.getName()).toBe(apiProductDataMock.venue.address.region.name);
    });
  });

  describe('getISOCode function', () => {
    it('should get ISO code', () => {
      const region = getRegion();

      expect(region.getISOCode()).toBe(apiProductDataMock.venue.address.region.isoCode);
    });
  });
});
