import { Seat } from '../seat';
import { AreaPricing } from '../area-pricing';
import { availabilityMock } from '../../__mocks__';

const seatMock = availabilityMock.areas[0].groupings[0].seats[0];
const getSeat = () => {
  return new Seat(seatMock);
};

describe('Seat', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  describe('getAggregateReference function', () => {
    it('should get aggregate reference', () => {
      expect(getSeat().getAggregateReference()).toEqual(seatMock.aggregateReference);
    });
  });

  describe('getNumber function', () => {
    it('should get number', () => {
      expect(getSeat().getNumber()).toEqual(seatMock.number);
    });
  });

  describe('getPricing function', () => {
    it('should get pricing', () => {
      expect(getSeat().getPricing()).toEqual(new AreaPricing(seatMock.pricing));
    });
  });

  describe('getRow function', () => {
    it('should get row', () => {
      expect(getSeat().getRow()).toEqual(seatMock.row);
    });
  });

  describe('getSeatIdentifier function', () => {
    it('should get seat identifier', () => {
      expect(getSeat().getSeatIdentifier()).toEqual(seatMock.seatIdentifier);
    });
  });

  describe('getAttributes function', () => {
    it('should get seat identifier', () => {
      expect(getSeat().getAttributes()).toEqual(seatMock.attributes);
    });
  });
});
