import { SummaryAvailability } from '../summary-availability';
import { SummaryAvailabilityItem } from '../summary-availability-item';
import { summaryAvailabilityMock } from '../../__mocks__';

const getSummaryAvailability = () => {
  return new SummaryAvailability(summaryAvailabilityMock);
};

describe('Summary Availability', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  describe('prepareSummaryAvailability function', () => {
    it('should prepare models for summary availability', () => {
      const summaryAvailabilityItems = getSummaryAvailability().prepareSummaryAvailability(summaryAvailabilityMock);
  
      expect(summaryAvailabilityItems).toHaveLength(summaryAvailabilityMock.length);
      summaryAvailabilityItems.forEach(summaryAvailabilityItem => {
        expect(summaryAvailabilityItem instanceof SummaryAvailabilityItem).toBe(true);
      });
    });
  });

  describe('getCollection function', () => {
    it('should get summary availability items collection', () => {
      const summaryAvailabilityItems = getSummaryAvailability().getCollection();
  
      expect(summaryAvailabilityItems).toHaveLength(summaryAvailabilityMock.length);
    });  
  });
});
