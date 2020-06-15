import { Availability } from '../availability';
import { Area } from '../area';
import { availabilityMock } from '../../__mocks__';

const getAvailability = () => {
  return new Availability(availabilityMock);
};

describe('Availability', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  describe('getAvailability function', () => {
    it('should get product availability', () => {
      const availability = getAvailability().getAvailability();
  
      expect(availability).toEqual(availabilityMock);
    });  
  });

  describe('getAreas function', () => {
    it('should get available areas', () => {
      const areas = getAvailability().getAreas();

      expect(areas).toHaveLength(availabilityMock.areas.length);
      areas.forEach(area => {
        expect(area instanceof Area).toBe(true);
      });
    });  
  });
});
