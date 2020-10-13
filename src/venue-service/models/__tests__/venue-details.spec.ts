import { VenueDetails } from '../venue-details';
import { VenueAddress } from '../../../content-service/models';
import { SeatSettings } from '../seat-settings';
import { VenueTerminal } from '../terminal';
import { Facility } from '../facility';
import { venueDetailsMock } from '../../__mocks__';

const getVenueDetails = () => new VenueDetails(venueDetailsMock);

describe('Venue details', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  describe('constructor', () => {
    it('should return object without errors if seatSettings and address provided', () => {
      expect(new VenueDetails({ seatSettings: {}, address: {} } as any)).toEqual({
        address: new VenueAddress({} as any),
        createdAt: undefined,
        description: undefined,
        facilities: [],
        internalId: undefined,
        seatSettings: new SeatSettings({} as any),
        title: undefined,
        transportAttributes: [],
        venueTerminals: [],
      });
    });

    it('should throw an error if seatSettings isn\'t provided', () => {
      expect(() => new VenueDetails({ address: {} } as any)).toThrow(new Error('Seat settings is required'));
    });

    it('should throw an error if address isn\'t provided', () => {
      expect(() => new VenueDetails({ seatSettings: {} } as any)).toThrow(new Error('Venue Address: address data is required'));
    });
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

  describe('getVenueTerminals method', () => {
    it('should return valid info', () => {
      expect(getVenueDetails().getVenueTerminals()).toEqual(venueDetailsMock.venueTerminals.map(item => new VenueTerminal(item)));
    });

    it('should return empty array if getVenueTerminals not provided', () => {
      const details = new VenueDetails({...venueDetailsMock, venueTerminals: undefined });

      expect(details.getVenueTerminals()).toEqual([]);
    });
  });

  describe('getFacilities method', () => {
    it('should return valid info', () => {
      expect(getVenueDetails().getFacilities()).toEqual(venueDetailsMock.facilities.map(item => new Facility(item)));
    });

    it('should return empty array if facilities not provided', () => {
      const details = new VenueDetails({...venueDetailsMock, facilities: undefined });

      expect(details.getFacilities()).toEqual([]);
    });
  });

  describe('getTransportAttributes method', () => {
    it('should return valid info', () => {
      expect(getVenueDetails().getTransportAttributes()).toEqual(venueDetailsMock.transportAttributes.map(item => item.description));
    });

    it('should return empty array if transportAttributes not provided', () => {
      const details = new VenueDetails({...venueDetailsMock, transportAttributes: undefined });

      expect(details.getTransportAttributes()).toEqual([]);
    });
  });
});
