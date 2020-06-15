import { checkRequiredProperty } from '../../utils/validator';
import { ApiAreaSeatLump } from '../typings';

export class SeatLump {
  private readonly seats: string[];

  constructor (seatLumpData: ApiAreaSeatLump) {
    checkRequiredProperty(seatLumpData, 'Seat Lump: seat lump data');

    this.seats = seatLumpData.seats;
  }

  getSeatIdentifiers () {
    return this.seats;
  }
}
