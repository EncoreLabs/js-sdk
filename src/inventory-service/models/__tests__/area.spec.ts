import moment from 'moment';
import { Area } from '../area';
import { Grouping } from '../grouping';
import { availabilityMock } from '../../__mocks__';

const areaMock = availabilityMock.areas[0];
const areaMockWithoutPartTwo = { ...areaMock, partTwoDate: null };
const groupingMock = availabilityMock.areas[0].groupings[0];
const getArea = () => new Area(areaMock);
const getAreaWithoutPartTwo = () => new Area(areaMockWithoutPartTwo);
const getGrouping = () => new Grouping(groupingMock);

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

  describe('getPartTwoDate function', () => {
    it('should get date in moment format', () => {
      expect(getArea().getPartTwoDate()).toEqual(moment(areaMock.partTwoDate));
    });

    it('should return null if there is no date for part two', () => {
      expect(getAreaWithoutPartTwo().getPartTwoDate()).toBeNull();
    });
  });

  describe('getRawDate function', () => {
    it('should get raw date in string format', () => {
      expect(getArea().getRawDate()).toBe(areaMock.date);
    });
  });

  describe('getRawPartTwoDate function', () => {
    it('should get raw date in string format for part two', () => {
      expect(getArea().getRawPartTwoDate()).toBe(areaMock.partTwoDate);
    });

    it('should return null if there is no date for part two', () => {
      expect(getAreaWithoutPartTwo().getRawPartTwoDate()).toBeNull();
    });
  });

  describe('getGroupings function', () => {
    it('should set area groupings', () => {
      const newGrouping = getGrouping();
      const area = getArea();
      area.setGroupings([newGrouping]);
      const groupings = area.getGroupings();

      expect(groupings).toHaveLength(1);
      expect(groupings[0]).toEqual(newGrouping);
    });  
  });

  describe('setGroupings function', () => {
    it('should set area groupings', () => {
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
