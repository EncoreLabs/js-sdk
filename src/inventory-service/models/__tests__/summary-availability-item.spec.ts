import moment from 'moment';
import { SummaryAvailabilityItem } from '../summary-availability-item';
import { summaryAvailabilityMock } from '../../__mocks__';

const summaryAvailabilityItem = summaryAvailabilityMock[0];

const getSumaryAvailabilityItem = () => {
  return new SummaryAvailabilityItem(summaryAvailabilityItem);
};

describe('Summary Availability Item', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getAvailableSeatCount function', () => {
    it('should get availabile seat count', () => {
      expect(getSumaryAvailabilityItem().getAvailableSeatCount()).toBe(summaryAvailabilityItem.availableSeatCount);
    });  
  });

  describe('getDateTime function', () => {
    it('should get date and time in moment format', () => {
      expect(getSumaryAvailabilityItem().getDateTime()).toEqual(moment(summaryAvailabilityItem.datetime));
    });  
  });

  describe('getRawDateTime function', () => {
    it('should get raw date and time in string format', () => {
      expect(getSumaryAvailabilityItem().getRawDateTime()).toBe(summaryAvailabilityItem.datetime);
    });  
  });

  describe('getDiscount function', () => {
    it('should get discount', () => {
      expect(getSumaryAvailabilityItem().getDiscount()).toBe(summaryAvailabilityItem.discount);
    });  
  });

  describe('getLargestLumpOfTickets function', () => {
    it('should get length of largest lump', () => {
      expect(getSumaryAvailabilityItem().getLargestLumpOfTickets()).toBe(summaryAvailabilityItem.largestLumpOfTickets);
    });  
  });

  describe('getMaxPrice function', () => {
    it('should get max price', () => {
      expect(getSumaryAvailabilityItem().getMaxPrice()).toBe(summaryAvailabilityItem.maxPrice);
    });  
  });

  describe('getMinPrice function', () => {
    it('should get min price', () => {
      expect(getSumaryAvailabilityItem().getMinPrice()).toBe(summaryAvailabilityItem.minPrice);
    });  
  });

  describe('hasBookingFee function', () => {
    it('should check that tickets has booking fee', () => {
      expect(getSumaryAvailabilityItem().hasBookingFee()).toBe(!summaryAvailabilityItem.noBookingFee);
    });  
  });
});
