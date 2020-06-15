import { SeatAttributes } from '../seat-attributes';
import { SeatAttribute } from '../seat-attribute';
import { seatAttributesMock } from '../../__mocks__';

const seatAttributesDataMock = seatAttributesMock[0];
const getSeatAttributes = () => {
  return new SeatAttributes(seatAttributesDataMock);
};

describe('Seat Attributes', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  describe('getSeatIdentifier function', () => {
    it('should get seat identifier', () => {
      expect(getSeatAttributes().getSeatIdentifier()).toEqual(seatAttributesDataMock.seatIdentifier);
    });
  });

  describe('getArea function', () => {
    it('should get area', () => {
      expect(getSeatAttributes().getArea()).toEqual(seatAttributesDataMock.area);
    });
  });

  describe('getAttributes function', () => {
    it('should get attributes', () => {
      const attributes = getSeatAttributes().getAttributes();

      expect(attributes).toHaveLength(seatAttributesDataMock.attributes.length);
      attributes.forEach(value => {
        expect(value instanceof SeatAttribute).toBe(true);
      });
    });
  });
});
