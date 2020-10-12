import { SeatSettings } from '../seat-settings';
import { venueDetailsMock } from '../../__mocks__';

const { seatSettings } = venueDetailsMock;
const getSeatSettings = () => new SeatSettings(seatSettings);

describe('Seat Settings', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  describe('isSeatsSupplied method', () => {
    it('should return valid info', () => {
      expect(getSeatSettings().isSeatsSupplied()).toBe(seatSettings.seatsSupplied);
    });
  });

  describe('getSeatSelectionMode method', () => {
    it('should return valid info', () => {
      expect(getSeatSettings().getSeatSelectionMode()).toBe(seatSettings.seatSelectionMode.name);
    });

    it('should return undefined if seatSettings.seatSelectionMode undefined', () => {
      expect(new SeatSettings({} as any).getSeatSelectionMode()).toBe(undefined);
    });
  });

  describe('getAllocationType method', () => {
    it('should return valid info', () => {
      expect(getSeatSettings().getAllocationType()).toBe(seatSettings.allocationType.name);
    });

    it('should return undefined if seatSettings.getAllocationType undefined', () => {
      expect(new SeatSettings({} as any).getAllocationType()).toBe(undefined);
    });
  });
});
