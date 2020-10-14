import { VenueDetails } from '../venue-details';
import { AddressModel } from '../address';
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
    it('should return valid object if seatSettings and address provided', () => {
      expect(new VenueDetails({} as any)).toEqual({
        address: null,
        createdAt: undefined,
        description: undefined,
        facilities: [],
        internalId: undefined,
        seatSettings: null,
        title: undefined,
        transportAttributes: [],
        venueTerminals: [],
      });
    });
  });

  describe('getSeatSettings method', () => {
    it('should return valid info', () => {
      expect(getVenueDetails().getSeatSettings()).toEqual(new SeatSettings(venueDetailsMock.seatSettings));
    });
  });

  describe('getAddress method', () => {
    it('should return valid info', () => {
      expect(getVenueDetails().getAddress()).toEqual(new AddressModel(venueDetailsMock.address));
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
      expect(getVenueDetails().getVenueTerminals())
        .toEqual(venueDetailsMock.venueTerminals.map(item => new VenueTerminal(item)));
    });

    it('should return empty array if getVenueTerminals not provided', () => {
      const details = new VenueDetails({...venueDetailsMock, venueTerminals: undefined });

      expect(details.getVenueTerminals()).toEqual([]);
    });
  });

  describe('getFacilities method', () => {
    it('should return valid info', () => {
      expect(getVenueDetails().getFacilities())
        .toEqual(venueDetailsMock.facilities.map(item => new Facility(item)));
    });

    it('should return empty array if facilities not provided', () => {
      const details = new VenueDetails({...venueDetailsMock, facilities: undefined });

      expect(details.getFacilities()).toEqual([]);
    });
  });

  describe('getTransportAttributes method', () => {
    it('should return valid info', () => {
      expect(getVenueDetails().getTransportAttributes())
        .toEqual(venueDetailsMock.transportAttributes.map(item => item.description));
    });

    it('should return empty array if transportAttributes not provided', () => {
      const details = new VenueDetails({...venueDetailsMock, transportAttributes: undefined });

      expect(details.getTransportAttributes()).toEqual([]);
    });

    it('should return empty array if transportAttributes items lacks of description property', () => {
      const details = new VenueDetails({...venueDetailsMock, transportAttributes: [{} as any, undefined, 'someString'] as any });

      expect(details.getTransportAttributes()).toEqual([]);
    });
  });
});
