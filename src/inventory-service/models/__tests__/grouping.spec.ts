import { Grouping } from '../grouping';
import { AreaPricing } from '../area-pricing';
import { Seat } from '../seat';
import { SeatLump } from '../seat-lump';
import { availabilityMock } from '../../__mocks__';

const groupingMock = availabilityMock.areas[0].groupings[0];
const getGrouping = () => {
  return new Grouping(groupingMock);
};

describe('Grouping', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  describe('getRow function', () => {
    it('should get row', () => {
      expect(getGrouping().getRow()).toEqual(groupingMock.row);
    });
  });

  describe('getAvailableCount function', () => {
    it('should get available count', () => {
      expect(getGrouping().getAvailableCount()).toEqual(groupingMock.availableCount);
    });
  });

  describe('getFirstSeatInGrouping function', () => {
    it('should get first seat in grouping', () => {
      expect(getGrouping().getFirstSeatInGrouping()).toEqual(groupingMock.seatNumberStart);
    });
  });

  describe('getLastSeatInGrouping function', () => {
    it('should get last seat in grouping', () => {
      expect(getGrouping().getLastSeatInGrouping()).toEqual(groupingMock.seatNumberEnd);
    });
  });

  describe('getGroupIdentifier function', () => {
    it('should get group identifier', () => {
      expect(getGrouping().getGroupIdentifier()).toEqual(groupingMock.groupIdentifier);
    });
  });

  describe('getPricing function', () => {
    it('should get price details', () => {
      expect(getGrouping().getPricing()).toEqual(new AreaPricing(groupingMock.pricing));
    });
  });

  describe('getSeats function', () => {
    it('should get grouping seats', () => {
      const seats = getGrouping().getSeats();

      expect(seats).toHaveLength(groupingMock.seats.length);
      seats.forEach(seat => {
        expect(seat instanceof Seat).toBe(true);
      });
    });  
  });

  describe('getSeatLumps function', () => {
    it('should get grouping seat lumps', () => {
      const seatLumps = getGrouping().getSeatLumps();

      expect(seatLumps).toHaveLength(groupingMock.seatLumps.length);
      seatLumps.forEach(seatLump => {
        expect(seatLump instanceof SeatLump).toBe(true);
      });
    });  
  });

  describe('getAggregateReference function', () => {
    it('should get aggregate reference', () => {
      expect(getGrouping().getAggregateReference()).toEqual(groupingMock.aggregateReference);
    });
  });

  describe('getAttributes function', () => {
    it('should get attributes', () => {
      expect(getGrouping().getAttributes()).toEqual(groupingMock.attributes);
    });
  });
});
