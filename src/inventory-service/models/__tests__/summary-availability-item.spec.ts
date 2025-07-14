import moment from 'moment';
import { SummaryAvailabilityItem } from '../summary-availability-item';
import { summaryAvailabilityMock } from '../../__mocks__';

const summaryAvailabilityItem = summaryAvailabilityMock[0];
const summaryAvailabilityItemWithoutPartTwo = { ...summaryAvailabilityItem, partTwoDatetime: null };

const getSummaryAvailabilityItem = () => {
  return new SummaryAvailabilityItem(summaryAvailabilityItem);
};

const getSummaryAvailabilityItemWithoutPartTwo = () => {
  return new SummaryAvailabilityItem(summaryAvailabilityItemWithoutPartTwo);
};

describe('Summary Availability Item', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getAvailableSeatCount function', () => {
    it('should get availabile seat count', () => {
      expect(getSummaryAvailabilityItem().getAvailableSeatCount()).toBe(summaryAvailabilityItem.availableSeatCount);
    });  
  });

  describe('getDateTime function', () => {
    it('should get date and time in moment format', () => {
      expect(getSummaryAvailabilityItem().getDateTime()).toEqual(moment(summaryAvailabilityItem.datetime));
    });  
  });

  describe('getPartTwoDateTime function', () => {
    it('should get date and time in moment format for part two', () => {
      expect(getSummaryAvailabilityItem().getPartTwoDateTime()).toEqual(moment(summaryAvailabilityItem.partTwoDatetime));
    });

    it('should return null if there is no datetime for part two', () => {
      expect(getSummaryAvailabilityItemWithoutPartTwo().getPartTwoDateTime()).toBeNull();
    });
  });

  describe('getRawDateTime function', () => {
    it('should get raw date and time in string format', () => {
      expect(getSummaryAvailabilityItem().getRawDateTime()).toBe(summaryAvailabilityItem.datetime);
    });  
  });

  describe('getRawPartTwoDateTime function', () => {
    it('should get raw date and time in string format for part two', () => {
      expect(getSummaryAvailabilityItem().getRawPartTwoDateTime()).toBe(summaryAvailabilityItem.partTwoDatetime);
    });

    it('should return null if there is no datetime for part two', () => {
      expect(getSummaryAvailabilityItemWithoutPartTwo().getRawPartTwoDateTime()).toBeNull();
    });
  });

  describe('getDiscount function', () => {
    it('should get discount', () => {
      expect(getSummaryAvailabilityItem().getDiscount()).toBe(summaryAvailabilityItem.discount);
    });  
  });

  describe('getLargestLumpOfTickets function', () => {
    it('should get length of largest lump', () => {
      expect(getSummaryAvailabilityItem().getLargestLumpOfTickets()).toBe(summaryAvailabilityItem.largestLumpOfTickets);
    });  
  });

  describe('getMaxPrice function', () => {
    it('should get max price', () => {
      expect(getSummaryAvailabilityItem().getMaxPrice()).toBe(summaryAvailabilityItem.maxPrice);
    });  
  });

  describe('getMinPrice function', () => {
    it('should get min price', () => {
      expect(getSummaryAvailabilityItem().getMinPrice()).toBe(summaryAvailabilityItem.minPrice);
    });  
  });

  describe('hasBookingFee function', () => {
    it('should check that tickets has booking fee', () => {
      expect(getSummaryAvailabilityItem().hasBookingFee()).toBe(!summaryAvailabilityItem.noBookingFee);
    });  
  });

  describe('getCurrency function', () => {
    it('should get currency', () => {
      expect(getSummaryAvailabilityItem().getCurrency()).toBe(summaryAvailabilityItem.currency);
    });
  });

  describe('getOffer function', () => {
    it('should get offer', () => {
      expect(getSummaryAvailabilityItem().getOffer()).toBe(summaryAvailabilityItem.offer);
    });
  });

  describe('getPromotionLabel function', () => {
    it('should get promotion label', () => {
      expect(getSummaryAvailabilityItem().getPromotionLabel()).toBe(summaryAvailabilityItem.promotionLabel);
    });

    it('should return null if there is no promotion label', () => {
      expect(getSummaryAvailabilityItemWithoutPartTwo().getPromotionLabel()).toBeNull();
    });
  });

  describe('getAvailabilityLevel function', () => {
    it('should get availability level', () => {
      expect(getSummaryAvailabilityItem().getAvailabilityLevel()).toBe(summaryAvailabilityItem.availabilityLevel);
    });

    it('should return null if there is no availability level', () => {
      const summaryAvailabilityItemWithoutLevel = { ...summaryAvailabilityItem, availabilityLevel: null };
      const summaryAvailabilityItemInstance = new SummaryAvailabilityItem(summaryAvailabilityItemWithoutLevel);
      expect(summaryAvailabilityItemInstance.getAvailabilityLevel()).toBeNull();
    });
  });
});
