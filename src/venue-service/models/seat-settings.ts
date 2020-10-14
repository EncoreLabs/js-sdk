import { VenueSeatSettings } from '../typings';
import { checkRequiredProperty } from '../../utils';

export class SeatSettings {
  private readonly seatsSupplied: boolean;
  private readonly seatSelectionMode: string;
  private readonly allocationType: string;

  constructor (seatSettings: VenueSeatSettings) {
    checkRequiredProperty(seatSettings, 'Seat settings');

    this.seatsSupplied = seatSettings.seatsSupplied;
    this.seatSelectionMode = seatSettings.seatSelectionMode?.name;
    this.allocationType = seatSettings.allocationType?.name;
  }

  isSeatsSupplied () {
    return this.seatsSupplied;
  }

  getSeatSelectionMode () {
    return this.seatSelectionMode;
  }

  getAllocationType () {
    return this.allocationType;
  }
}
