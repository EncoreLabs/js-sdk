import { SeatAttribute } from '../seat-attribute';
import { seatAttributesMock } from '../../__mocks__';

const seatAttributeMock = seatAttributesMock[0].attributes[0];
const getSeatAttribute = () => {
  return new SeatAttribute(seatAttributeMock);
};

describe('Seat Attribute', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  describe('getTitle function', () => {
    it('should get title', () => {
      expect(getSeatAttribute().getTitle()).toEqual(seatAttributeMock.title);
    });
  });

  describe('getDescription function', () => {
    it('should get description', () => {
      expect(getSeatAttribute().getDescription()).toEqual(seatAttributeMock.description);
    });
  });

  describe('getIntention function', () => {
    it('should get intention', () => {
      expect(getSeatAttribute().getIntention()).toEqual(seatAttributeMock.intention);
    });
  });
});
