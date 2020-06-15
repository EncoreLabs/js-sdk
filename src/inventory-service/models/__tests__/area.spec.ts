import moment from 'moment';
import { Area } from '../area';
import { Grouping } from '../grouping';
import { availabilityMock } from '../../__mocks__';

const areaMock = availabilityMock.areas[0];
const getArea = () => {
  return new Area(areaMock);
};

describe('Area', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  describe('getAvailableCount function', () => {
    it('should get available count', () => {
      expect(getArea().getAvailableCount()).toEqual(areaMock.availableCount);
    });
  });

  describe('getDate function', () => {
    it('should get date in moment format', () => {
      expect(getArea().getDate()).toEqual(moment(areaMock.date));
    });
  });

  describe('getRawDate function', () => {
    it('should get raw date in string format', () => {
      expect(getArea().getRawDate()).toBe(areaMock.date);
    });
  });

  describe('getGroupings function', () => {
    it('should get area groupings', () => {
      const groupings = getArea().getGroupings();

      expect(groupings).toHaveLength(areaMock.groupings.length);
      groupings.forEach(grouping => {
        expect(grouping instanceof Grouping).toBe(true);
      });
    });  
  });

  describe('getMode function', () => {
    it('should get mode', () => {
      expect(getArea().getMode()).toBe(areaMock.mode);
    });
  });

  describe('getName function', () => {
    it('should get area name', () => {
      expect(getArea().getName()).toBe(areaMock.name);
    });
  });

  describe('getAggregateReference function', () => {
    it('should get area aggregare reference', () => {
      expect(getArea().getAggregateReference()).toBe(areaMock.aggregateReference);
    });
  });
});
