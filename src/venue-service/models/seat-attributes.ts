import { checkRequiredProperty } from '../../utils/validator';
import { SeatAttribute } from './seat-attribute';
import { ApiSeatAttributes } from '../typings';

export class SeatAttributes {
  private readonly seatIdentifier: string;
  private readonly area: string;
  private readonly attributes: SeatAttribute[];

  constructor (seatAttributesData: ApiSeatAttributes) {
    checkRequiredProperty(seatAttributesData, 'Seat Attributes: seat attributes data');

    this.seatIdentifier = seatAttributesData.seatIdentifier;
    this.area = seatAttributesData.area;
    this.attributes = seatAttributesData.attributes.map(attribute => new SeatAttribute(attribute));
  }

  getSeatIdentifier () {
    return this.seatIdentifier;
  }

  getArea () {
    return this.area;
  }

  getAttributes () {
    return this.attributes;
  }
}
