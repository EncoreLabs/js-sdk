import { TerminalItem } from '../terminal-item';
import { VenueTerminal } from '../venue-terminal';
import { venueDetailsMock } from '../../../__mocks__';

const getVenueTerminal = () => new VenueTerminal(venueDetailsMock.venueTerminals[0]);

describe('Venue Terminal', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  describe('getDirections method', () => {
    it('should return valid info', () => {
      expect(getVenueTerminal().getDirections())
        .toEqual(venueDetailsMock.venueTerminals[0].directions);
    });
  });

  describe('getJourneyTime method', () => {
    it('should return valid info', () => {
      expect(getVenueTerminal().getJourneyTime())
        .toEqual(venueDetailsMock.venueTerminals[0].journeyTime);
    });
  });

  describe('getTerminal method', () => {
    it('should return valid info', () => {
      expect(getVenueTerminal().getTerminal())
        .toEqual(new TerminalItem(venueDetailsMock.venueTerminals[0].terminal));
    });
  });
});
