import { SeatLump } from '../seat-lump';
import { availabilityMock } from '../../__mocks__';

const seatLumpMock = availabilityMock.areas[0].groupings[0].seatLumps[0];
const getSeatLump = () => {
  return new SeatLump(seatLumpMock);
};

describe('Seat Lump', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  describe('getSeatIdentifiers function', () => {
    it('should get list of available lumps', () => {
      expect(getSeatLump().getSeatIdentifiers()).toEqual(seatLumpMock.seats);
    });
  });
});
