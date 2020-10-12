import { VenueDetails } from '../venue-details';
import { VenueAddress } from '../../../content-service/models';
import { SeatSettings } from '../seat-settings';
import { venueDetailsMock } from '../../__mocks__';

const getVenueDetails = () => new VenueDetails(venueDetailsMock);

describe('Venue details', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  describe('getSeatSettings method', () => {
    it('should return valid info', () => {
      expect(getVenueDetails().getSeatSettings()).toEqual(new SeatSettings(venueDetailsMock.seatSettings));
    });
  });

  describe('getAddress method', () => {
    it('should return valid info', () => {
      expect(getVenueDetails().getAddress()).toEqual(new VenueAddress(venueDetailsMock.address));
    });
  });

  describe('getTitle method', () => {
    it('should return valid info', () => {
      expect(getVenueDetails().getTitle()).toEqual(venueDetailsMock.title);
    });
  });

  describe('getInternalId method', () => {
    it('should return valid info', () => {
      expect(getVenueDetails().getInternalId()).toEqual(venueDetailsMock.internalId);
    });
  });

  describe('getDescription method', () => {
    it('should return valid info', () => {
      expect(getVenueDetails().getDescription()).toEqual(venueDetailsMock.description);
    });
  });

  describe('getCreatedAt method', () => {
    it('should return valid info', () => {
      expect(getVenueDetails().getCreatedAt()).toEqual(venueDetailsMock.createdAt);
    });
  });
});
