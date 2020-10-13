import { Facility } from '../facility';
import { venueDetailsMock } from '../../__mocks__';

const getFacility = () => new Facility(venueDetailsMock.facilities[0]);

describe('Facility', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  describe('getDescription method', () => {
    it('should return valid info', () => {
      expect(getFacility().getDescription()).toEqual(venueDetailsMock.facilities[0].description);
    });
  });

  describe('getPath method', () => {
    it('should return valid info', () => {
      expect(getFacility().getPath()).toEqual(venueDetailsMock.facilities[0].path);
    });
  });
});
